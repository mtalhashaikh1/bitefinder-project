import React from 'react';
import { notFound } from 'next/navigation';

// Mock database to simulate dynamic lookup
const RESTAURANT_DATA: Record<string, any> = {
  "1": { name: "The Spicy Crust", cuisine: "Italian & Fusion", rating: 4.8, reviews: 124, price: "$$", image: "🍕", desc: "Premium wood-fired artisanal pizzas featuring a secret blend of local spices and structural mozzarella layers.", timing: "12:00 PM - 12:00 AM", location: "Block 4, Clifton" },
  "2": { name: "Al-Rehman Biryani Hub", cuisine: "Pakistani Authentic", rating: 4.9, reviews: 540, price: "$", image: "🍛", desc: "The legendary localized aromatic basmati rice layered with highly optimized spicy tender meat matrices.", timing: "11:00 AM - 11:00 PM", location: "Saddar, Karachi" },
  "3": { name: "Cafe Evergreen", cuisine: "Continental & Organic", rating: 4.5, reviews: 88, price: "$$$", image: "🥗", desc: "A quiet, green-ambient zone serving calculated calorie-conscious meals and fresh cold-press organic matrices.", timing: "8:00 AM - 10:00 PM", location: "Phase 6, DHA" },
  "4": { name: "Kababjees Highway", cuisine: "BBQ & Traditional", rating: 4.7, reviews: 412, price: "$$$", image: "🍖", desc: "Authentic charcoal BBQ skewers cooked live on the open-air highway track corridors with premium spices.", timing: "4:00 PM - 3:00 AM", location: "Super Highway" },
  "5": { name: "Big Bash Burgers", cuisine: "American Fast Food", rating: 4.6, reviews: 210, price: "$$", image: "🍔", desc: "Smashed beef patties cooked with dynamic crisp edges, loaded with melted cheddar algorithms and secret sauce.", timing: "1:00 PM - 2:00 AM", location: "Gulshan-e-Iqbal" },
  "6": { name: "Dhaba Lounge", cuisine: "Chai & Street Food", rating: 4.4, reviews: 155, price: "$", image: "☕", desc: "An open-air casual space providing high-caffeine Karak tea streams paired with crisp layered paratha assets.", timing: "2:40 PM - 4:00 AM", location: "Johar Block 12" }
};

export default function RestaurantDetailPage({ params }: { params: { id: string } }) {
  const item = RESTAURANT_DATA[params.id];
  
  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-8 pt-24">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Large Aesthetic Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-64 flex items-center justify-center text-8xl select-none">
          {item.image}
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{item.name}</h1>
            <span className="text-sm font-semibold px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
              ★ {item.rating} ({item.reviews} reviews)
            </span>
          </div>

          <p className="text-sm text-gray-500 font-mono mb-6">{item.cuisine} • Cost Matrix: {item.price}</p>
          
          <div className="border-t border-b border-gray-100 py-4 mb-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Vector Description</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>

          {/* Operational Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="font-bold text-gray-900 block mb-1">📍 Vector Location Link</span>
              {item.location}
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="font-bold text-gray-900 block mb-1">⏰ Active Server Hours</span>
              {item.timing}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}