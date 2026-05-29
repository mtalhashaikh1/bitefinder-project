import os
import psycopg2
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = FastAPI(title="BiteFinder AI Live Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatQuery(BaseModel):
    query: str

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
DATABASE_URL = os.getenv("DATABASE_URL")

@app.post("/chat")
async def chat_endpoint(data: ChatQuery):
    user_input = data.query.strip()
    if not user_input:
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    user_lower = user_input.lower()
    ai_response = ""
    engine_status = "LIVE_CLOUD_RAG_ACTIVE"

    urdu_keywords = ["mjhe", "khani", "kahan", "kya", "batao", "achi", "rate", "hai", "h", "kaise", "milegi", "krni", "nh"]
    is_urdu = any(word in user_lower for word in urdu_keywords)

    try:
        # A. OpenAI API Call Execution
        completion = openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are BiteFinder AI. Recommend the best food spots in Karachi."},
                {"role": "user", "content": user_input}
            ]
        )
        ai_response = completion.choices[0].message.content

    except Exception as e:
        # B. Fallback Mode (Quota exceeded standard handle)
        if "insufficient_quota" in str(e).lower() or "429" in str(e):
            engine_status = "LIVE_CLOUD_RAG_QUOTA_FALLBACK"
            
            # 1. BIRYANI
            if "biryani" in user_lower:
                if "price" in user_lower or "rate" in user_lower or "cost" in user_lower or "kitne" in user_lower:
                    if is_urdu:
                        ai_response = "Karachi mein achi Biryani ki price VIP spots par Rs. 250 se Rs. 450 tak hoti hai per plate. Al-Rehman ya Farhan Biryani par aapko behtareen rates mil jayenge!"
                    else:
                        ai_response = "The price of a good plate of Biryani in Karachi ranges from Rs. 250 to Rs. 450. You can get top quality and budget rates at Al-Rehman Biryani or Farhan Biryani."
                else:
                    if is_urdu:
                        ai_response = "Karachi mein Biryani ke liye sab se behtareen spots 'Al-Rehman Biryani (Kharadar)' aur 'Naseeb Biryani' hain!"
                    else:
                        ai_response = "For the best Biryani experience in Karachi, we highly recommend 'Al-Rehman Biryani (Kharadar)' and 'Naseeb Biryani'!"
            
            # 2. PIZZA
            elif "pizza" in user_lower:
                if "price" in user_lower or "rate" in user_lower or "cost" in user_lower or "kitne" in user_lower:
                    if is_urdu:
                        ai_response = "Karachi mein Regular Pizza Rs. 500 se shuru hota hai aur Large Pizza Rs. 1200 se Rs. 2000 tak jata hai."
                    else:
                        ai_response = "In Karachi, a Regular Pizza starts around Rs. 500, while a Large Pizza ranges from Rs. 1200 to Rs. 2000 depending on the parlor."
                else:
                    if is_urdu:
                        ai_response = "Pizza ke liye Karachi mein 'The Spicy Crust' aur 'Broadway Pizza' bohot famous hain."
                    else:
                        ai_response = "For top pizza spots in Karachi, you should definitely try 'The Spicy Crust' or 'Broadway Pizza'!"
            
            # 3. DEFAULT DEFAULT (Kuch aur pucha toh)
            else:
                if is_urdu:
                    ai_response = f"Hello! BiteFinder AI yahan hai. Karachi mein '{user_input}' ke liye aap Burns Road ya Hussainabad food street visit kar sakte hain!"
                else:
                    ai_response = f"Hello! BiteFinder AI here. For '{user_input}' options in Karachi, you can explore famous food streets like Burns Road or Hussainabad!"
        else:
            raise HTTPException(status_code=500, detail=f"Unexpected Engine Error: {str(e)}")

    try:
        # C. Neon Database Save Logic
        conn = psycopg2.connect(DATABASE_URL)
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS chat_logs (id SERIAL PRIMARY KEY, user_query TEXT, ai_reply TEXT)")
        cursor.execute("INSERT INTO chat_logs (user_query, ai_reply) VALUES (%s, %s)", (user_input, ai_response))
        conn.commit()
        cursor.close()
        conn.close()
        db_status = "NEON_POSTGRES_SYNC_SUCCESS"
    except Exception as db_err:
        db_status = f"NEON_POSTGRES_SYNC_FAILED: {str(db_err)}"

    return {"response": ai_response, "engine_status": engine_status, "db_status": db_status}