"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RESTAURANTS = [
  { id: "1", name: "The Spicy Crust", cuisine: "Italian & Fusion", rating: 4.8, reviews: 124, price: "Rs. 1,500 - 2,500", image: "🍕", matchScore: "98% AI Match", tags: ["Pizza", "Cheese", "Fast Food"] },
  { id: "2", name: "Al-Rehman Biryani Hub", cuisine: "Pakistani Authentic", rating: 4.9, reviews: 540, price: "Rs. 300 - 600", image: "🍛", matchScore: "95% AI Match", tags: ["Biryani", "Desi", "Spicy"] },
  { id: "3", name: "Cafe Evergreen", cuisine: "Continental & Organic", rating: 4.5, reviews: 88, price: "Rs. 2,000 - 4,000", image: "🥗", matchScore: "89% AI Match", tags: ["Healthy", "Salads", "Diet"] },
  { id: "4", name: "Kababjees Highway", cuisine: "BBQ & Traditional", rating: 4.7, reviews: 412, price: "Rs. 1,800 - 3,500", image: "🍖", matchScore: "94% AI Match", tags: ["Sajji", "Karahi", "BBQ"] },
  { id: "5", name: "Big Bash Burgers", cuisine: "American Fast Food", rating: 4.6, reviews: 210, price: "Rs. 800 - 1,500", image: "🍔", matchScore: "91% AI Match", tags: ["Burger", "Crispy", "Fast Food"] },
  { id: "6", name: "Dhaba Lounge", cuisine: "Chai & Street Food", rating: 4.4, reviews: 155, price: "Rs. 200 - 500", image: "☕", matchScore: "87% AI Match", tags: ["Chai", "Paratha", "Desi"] }
];

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter(); 

  const filteredRestaurants = RESTAURANTS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 pt-24">
      {/* Header & Search */}
      <div className="mb-8 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Venues Matrix</h1>
          <p className="mt-1 text-sm text-gray-500">Dynamic context matching across localized vector spaces.</p>
        </div>
        <div className="w-full md:w-80">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search via name, tags, or cuisine..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 bg-white shadow-sm text-gray-800"
          />
        </div>
      </div>

      {/* Grid Content Display */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRestaurants.map((algo) => (
            <div key={algo.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all">
              <div className="bg-orange-50 h-48 flex items-center justify-center text-6xl select-none">{algo.image}</div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">{algo.matchScore}</span>
                  <span className="text-xs text-gray-600 font-bold font-mono">{algo.price}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{algo.name}</h3>
                <p className="text-xs text-gray-500 mb-4 font-mono">{algo.cuisine}</p>
                <div className="flex flex-wrap gap-1 mb-5">
                  {algo.tags?.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded">#{tag}</span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                  <span className="text-orange-500 font-bold">★ {algo.rating}</span>
                  <button 
                    onClick={() => router.push(`/restaurants/${algo.id}`)}
                    className="text-orange-600 font-semibold hover:text-orange-700 cursor-pointer text-sm bg-transparent border-none outline-none"
                  >
                    View Analysis →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">No restaurants found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}