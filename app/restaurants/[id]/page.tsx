import React from 'react';
import { notFound } from 'next/navigation';

const DETAILS_MAP: Record<string, { 
  name: string; 
  cuisine: string; 
  rating: number; 
  reviewsCount: number; 
  price: string; 
  image: string; 
  desc: string; 
  location: string; 
  mapUrl: string;
  timings: string;
  contact: string;
  featuredReviews: { user: string; rating: number; text: string }[]
}> = {
  "1": { 
    name: "The Spicy Crust", 
    cuisine: "Italian & Fusion", 
    rating: 4.8, 
    reviewsCount: 124, 
    price: "Rs. 1,500 - 2,500", 
    image: "🍕", 
    desc: "Premium wood-fired artisanal pizzas featuring a secret blend of local spices.", 
    location: "Block 4, Clifton",
    mapUrl: "https://maps.google.com/?q=Block+4+Clifton+Karachi",
    timings: "12:00 PM - 01:00 AM",
    contact: "(021) 111-123-456",
    featuredReviews: [
      { user: "Zainab Ahmed", rating: 5, text: "The crust was perfectly thin and crispy, and the fusion spices are incredible!" },
      { user: "Hamza Khan", rating: 4, text: "Great ambiance and excellent pizza, just took a bit long to arrive." }
    ]
  },
  "2": { 
    name: "Al-Rehman Biryani Hub", 
    cuisine: "Pakistani Authentic", 
    rating: 4.9, 
    reviewsCount: 540, 
    price: "Rs. 300 - 600", 
    image: "🍛", 
    desc: "The legendary localized aromatic basmati rice layered with spicy tender meat.", 
    location: "Saddar, Karachi",
    mapUrl: "https://maps.google.com/?q=Al+Rehman+Biryani+Saddar+Karachi",
    timings: "11:30 AM - 11:00 PM",
    contact: "0333-1234567",
    featuredReviews: [
      { user: "M. Ali", rating: 5, text: "Best biryani in Karachi, hands down. Super spicy and aromatic!" },
      { user: "Sana Bilal", rating: 5, text: "The meat is always tender and perfectly cooked. Highly recommended." }
    ]
  },
  "3": { 
    name: "Cafe Evergreen", 
    cuisine: "Continental & Organic", 
    rating: 4.5, 
    reviewsCount: 88, 
    price: "Rs. 2,000 - 4,000", 
    image: "🥗", 
    desc: "A quiet, green-ambient zone serving calculated calorie-conscious meals.", 
    location: "Phase 6, DHA",
    mapUrl: "https://maps.google.com/?q=Phase+6+DHA+Karachi",
    timings: "08:00 AM - 12:00 AM",
    contact: "(021) 35841234",
    featuredReviews: [
      { user: "Dr. Asif", rating: 5, text: "Perfect place for healthy eating. The keto salad bowl is amazing." },
      { user: "Ayesha Malik", rating: 4, text: "Beautiful peaceful interior. Perfect for work or a quiet lunch." }
    ]
  },
  "4": { 
    name: "Kababjees Highway", 
    cuisine: "BBQ & Traditional", 
    rating: 4.7, 
    reviewsCount: 412, 
    price: "Rs. 1,800 - 3,500", 
    image: "🍖", 
    desc: "Authentic charcoal BBQ skewers cooked live on the open-air highway track corridors.", 
    location: "Super Highway",
    mapUrl: "https://maps.google.com/?q=Kababjees+Highway+Karachi",
    timings: "04:00 PM - 03:00 AM",
    contact: "(021) 111-666-111",
    featuredReviews: [
      { user: "Bilal Shah", rating: 5, text: "Their mutton chops and chicken reshmi kabab are out of this world." },
      { user: "Tariq Jameel", rating: 4, text: "Great open-air environment for family gatherings. Huge parking space." }
    ]
  },
  "5": { 
    name: "Big Bash Burgers", 
    cuisine: "American Fast Food", 
    rating: 4.6, 
    reviewsCount: 210, 
    price: "Rs. 800 - 1,500", 
    image: "🍔", 
    desc: "Smashed beef patties cooked with dynamic crisp edges and melted cheddar.", 
    location: "Gulshan-e-Iqbal",
    mapUrl: "https://maps.google.com/?q=Gulshan+e+Iqbal+Karachi",
    timings: "01:00 PM - 02:00 AM",
    contact: "0300-9876543",
    featuredReviews: [
      { user: "Saad Siddiqui", rating: 5, text: "Proper smash burger texture! Extremely juicy and the sauce is stellar." },
      { user: "Nimra Khan", rating: 4, text: "Love the dynamic crisp edges on the patties. Good value for money." }
    ]
  },
  "6": { 
    name: "Dhaba Lounge", 
    cuisine: "Chai & Street Food", 
    rating: 4.4, 
    reviewsCount: 155, 
    price: "Rs. 200 - 500", 
    image: "☕", 
    desc: "An open-air casual space providing high-caffeine Karak tea streams.", 
    location: "Johar Block 12",
    mapUrl: "https://maps.google.com/?q=Johar+Block+12+Karachi",
    timings: "04:00 PM - 04:00 AM",
    contact: "0312-3456789",
    featuredReviews: [
      { user: "Omar Farooq", rating: 5, text: "The Karak Chai is exceptionally rich. Best spot to chill with friends late night." },
      { user: "Faiza Ali", rating: 4, text: "Love the classic dhaba vibe with comfortable lounge seating." }
    ]
  }
};

export default async function RestaurantDetailPage({ params }: { params: Promise<{ id: string }> | any }) {
  
  const resolvedParams = await params;
  const targetId = resolvedParams?.id;
  
  const item = DETAILS_MAP[targetId];
  
  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-8 pt-24 text-gray-800">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Banner with Icon */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-48 flex items-center justify-center text-7xl select-none">
          {item.image}
        </div>
        
        <div className="p-6">
          {/* Main Title Info */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 text-amber-700 font-bold text-sm">
              ⭐ {item.rating} <span className="text-gray-400 font-normal text-xs">({item.reviewsCount} reviews)</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 font-mono mb-4">{item.cuisine} • {item.price}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 border-t border-b border-gray-100 py-4">{item.desc}</p>
          
          {/* Operational Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">⏰ Operational Hours</span>
              {item.timings}
            </div>
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">📞 Contact & Orders</span>
              {item.contact}
            </div>
          </div>

          {/* Clickable Map Location Block */}
          <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 mb-6">
            <span className="font-bold text-gray-900 block mb-1">📍 Location Structure</span>
            <a 
              href={item.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              {item.location} <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">(View on Live Map)</span>
            </a>
          </div>

          {/* User Reviews Section without raw double quotes */}
          <div className="border-t border-gray-100 pt-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">💬 Featured Customer Reviews</h3>
            <div className="space-y-3">
              {item.featuredReviews.map((review, idx) => (
                <div key={idx} className="bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-gray-900">{review.user}</span>
                    <span className="text-amber-500 text-xs">{"⭐".repeat(review.rating)}</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}