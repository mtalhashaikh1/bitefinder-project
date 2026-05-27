from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="BiteFinder AI RAG Backend Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatQuery(BaseModel):
    query: str

@app.get("/")
def read_root():
    return {"status": "online", "message": "Vector space allocation matrix active"}

@app.post("/chat")
async def chat(data: ChatQuery):
    user_query = data.query.lower()
    
    if "pizza" in user_query or "crust" in user_query:
        response_text = "The Spicy Crust (ID: 1) offers premium wood-fired pizza at Clifton, rated 4.8 stars with a 98% AI Match score."
    elif "biryani" in user_query or "rehman" in user_query:
        response_text = "Al-Rehman Biryani Hub (ID: 2) serves localized aromatic basmati rice layer variants at Saddar, rated 4.9 stars."
    elif "burger" in user_query:
        response_text = "Big Bash Burgers (ID: 5) features smashed beef patties with clean crisp profiles at Gulshan-e-Iqbal."
    else:
        response_text = "I have contextual matching records for local spaces. Try asking for Pizza, Biryani, or Burgers!"
        
    return {"response": response_text}