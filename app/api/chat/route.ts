import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const userQuery = query.toLowerCase();

    let aiResponse = "Welcome to BiteFinder AI! I can help you find the best food spots in Karachi. Try asking about Pizza, Biryani, Burgers, or BBQ.";

    
    if (userQuery.includes('pizza') || userQuery.includes('crust') || userQuery.includes('italian')) {
      aiResponse = "The Spicy Crust (Clifton Block 4) is highly recommended! They serve premium wood-fired artisanal pizzas with a local spice fusion. Rating: 4.8 ⭐ (124 reviews). Price: Rs. 1,500 - 2,500. Timings: 12:00 PM - 01:00 AM.";
    } else if (userQuery.includes('biryani') || userQuery.includes('rehman') || userQuery.includes('rice')) {
      aiResponse = "Al-Rehman Biryani Hub (Saddar, Karachi) is a legend! Famous for its spicy, aromatic basmati rice layered with perfectly tender meat. Rating: 4.9 ⭐ (540 reviews). Price: Rs. 300 - 600. Timings: 11:30 AM - 11:00 PM.";
    } else if (userQuery.includes('burger') || userQuery.includes('bash') || userQuery.includes('fast food')) {
      aiResponse = "Big Bash Burgers (Gulshan-e-Iqbal) serves amazing smashed beef patties cooked with dynamic crisp edges and melted cheddar. Rating: 4.6 ⭐ (210 reviews). Price: Rs. 800 - 1,500. Timings: 01:00 PM - 02:00 AM.";
    } else if (userQuery.includes('bbq') || userQuery.includes('kababjees') || userQuery.includes('kabab')) {
      aiResponse = "Kababjees Highway is perfect for authentic traditional charcoal BBQ skewers cooked live on the open-air highway track corridors. Rating: 4.7 ⭐ (412 reviews). Price: Rs. 1,800 - 3,500. Open till 03:00 AM!";
    } else if (userQuery.includes('chai') || userQuery.includes('dhaba') || userQuery.includes('tea')) {
      aiResponse = "Dhaba Lounge (Johar Block 12) is the ultimate casual open-air space providing rich, high-caffeine Karak tea streams and street food. Rating: 4.4 ⭐ (155 reviews). Open till 04:00 AM!";
    } else if (userQuery.includes('salad') || userQuery.includes('evergreen') || userQuery.includes('healthy')) {
      aiResponse = "Cafe Evergreen (Phase 6, DHA) is a quiet, green-ambient zone serving calculated calorie-conscious organic meals. Rating: 4.5 ⭐ (88 reviews). Price: Rs. 2,000 - 4,000.";
    } else if (userQuery.includes('hello') || userQuery.includes('hi') || userQuery.includes('hey')) {
      aiResponse = "Hello! I am BiteFinder AI, your smart restaurant assistant for Karachi. Ask me about local favorites like Al-Rehman Biryani, The Spicy Crust, or Kababjees!";
    }

    return NextResponse.json({ response: aiResponse });

  } catch (error: any) {
    return NextResponse.json({ 
      response: "BiteFinder AI is online and ready! Let me know which Karachi restaurant or cuisine you are looking for." 
    });
  }
}