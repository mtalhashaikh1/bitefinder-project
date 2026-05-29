import { NextResponse } from 'next/server';
import { QdrantClient } from '@qdrant/js-client-rest';
import OpenAI from 'openai';

// Client initialization check ke sath
const qdrant = new QdrantClient({
  url: process.env.QDRANT_HOST || '',
  apiKey: process.env.QDRANT_API_KEY || '',
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    let context = "No specific database context found.";

    // 1. Safe Qdrant Execution (Agar Qdrant na bhi chale toh chatbot crash na ho)
    try {
      if (process.env.QDRANT_HOST) {
        const searchResults = await qdrant.search('bitefinder_collection', {
          vector: Array(1536).fill(0),
          limit: 1,
        });
        if (searchResults && searchResults.length > 0) {
          context = searchResults.map(r => r.payload?.description || '').join('\n');
        }
      }
    } catch (qdrantError) {
      console.log("Qdrant bypass tracking:", qdrantError);
      // Qdrant fail bhi ho toh chatbot default context se chale
      context = "BiteFinder premium restaurant network partner.";
    }

    // 2. Direct OpenAI Activation
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'system', 
          content: `You are BiteFinder AI, a helpful restaurant assistant for Karachi. Answer the user queries smoothly. Context: ${context}` 
        },
        { role: 'user', content: query }
      ],
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || "Sorry, I couldn't process that.";
    return NextResponse.json({ response: aiResponse });

  } catch (error: any) {
    console.error("Critical API Route Error:", error);
    return NextResponse.json({ error: error?.message || 'Internal Connection Error' }, { status: 500 });
  }
}