import React from 'react';
import { notFound } from 'next/navigation';

const DETAILS_MAP: Record<string, { name: string; cuisine: string; rating: number; reviews: number; price: string; image: string; desc: string; location: string }> = {
  "1": { name: "The Spicy Crust", cuisine: "Italian & Fusion", rating: 4.8, reviews: 124, price: "Rs. 1,500 - 2,500", image: "🍕", desc: "Premium wood-fired artisanal pizzas featuring a secret blend of local spices.", location: "Block 4, Clifton" },
  "2": { name: "Al-Rehman Biryani Hub", cuisine: "Pakistani Authentic", rating: 4.9, reviews: 540, price: "Rs. 300 - 600", image: "🍛", desc: "The legendary localized aromatic basmati rice layered with spicy tender meat.", location: "Saddar, Karachi" },
  "3": { name: "Cafe Evergreen", cuisine: "Continental & Organic", rating: 4.5, reviews: 88, price: "Rs. 2,000 - 4,000", image: "🥗", desc: "A quiet, green-ambient zone serving calculated calorie-conscious meals.", location: "Phase 6, DHA" },
  "4": { name: "Kababjees Highway", cuisine: "BBQ & Traditional", rating: 4.7, reviews: 412, price: "Rs. 1,800 - 3,500", image: "🍖", desc: "Authentic charcoal BBQ skewers cooked live on the open-air highway track corridors.", location: "Super Highway" },
  "5": { name: "Big Bash Burgers", cuisine: "American Fast Food", rating: 4.6, reviews: 210, price: "Rs. 800 - 1,500", image: "🍔", desc: "Smashed beef patties cooked with dynamic crisp edges and melted cheddar.", location: "Gulshan-e-Iqbal" },
  "6": { name: "Dhaba Lounge", cuisine: "Chai & Street Food", rating: 4.4, reviews: 155, price: "Rs. 200 - 500", image: "☕", desc: "An open-air casual space providing high-caffeine Karak tea streams.", location: "Johar Block 12" }
};

//  Next.js safe async parameter handling structure
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
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-48 flex items-center justify-center text-7xl select-none">
          {item.image}
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">{item.name}</h1>
          <p className="text-sm text-gray-500 font-mono mb-4">{item.cuisine} • {item.price}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 border-t border-b border-gray-100 py-4">{item.desc}</p>
          <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
            <span className="font-bold text-gray-900 block mb-1">📍 Location Structure</span>
            {item.location}
          </div>
        </div>
      </div>
    </div>
  );
}