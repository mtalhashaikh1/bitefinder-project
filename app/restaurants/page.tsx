import React from 'react';

const RESTAURANTS = [
  {
    id: 1,
    name: "The Spicy Crust",
    cuisine: "Italian & Fusion",
    rating: 4.8,
    reviews: 124,
    price: "$$",
    tags: ["Pizza", "Cheese", "Nightlife"],
    image: "🍕",
    matchScore: "98% AI Match"
  },
  {
    id: 2,
    name: "Al-Rehman Biryani Hub",
    cuisine: "Pakistani Authentic",
    rating: 4.9,
    reviews: 540,
    price: "$",
    tags: ["Biryani", "Spicy", "Desi"],
    image: "🍛",
    matchScore: "95% AI Match"
  },
  {
    id: 3,
    name: "Cafe Evergreen",
    cuisine: "Continental & Organic",
    rating: 4.5,
    reviews: 88,
    price: "$$$",
    tags: ["Healthy", "Salads", "Quiet Place"],
    image: "🥗",
    matchScore: "89% AI Match"
  },
  {
    id: 4,
    name: "Kababjees Highway",
    cuisine: "BBQ & Traditional",
    rating: 4.7,
    reviews: 412,
    price: "$$$",
    tags: ["Sajji", "Karahi", "Family Dining"],
    image: "🍖",
    matchScore: "94% AI Match"
  },
  {
    id: 5,
    name: "Big Bash Burgers",
    cuisine: "American Fast Food",
    rating: 4.6,
    reviews: 210,
    price: "$$",
    tags: ["Smashed Burger", "Fries", "Crispy"],
    image: "🍔",
    matchScore: "91% AI Match"
  },
  {
    id: 6,
    name: "Dhaba Lounge",
    cuisine: "Chai & Street Food",
    rating: 4.4,
    reviews: 155,
    price: "$",
    tags: ["Karak Chai", "Paratha", "Open Air"],
    image: "☕",
    matchScore: "87% AI Match"
  }
];

export default function RestaurantsPage() {
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 pt-24">
      {/* Page Header */}
      <div className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore Venues Matrix
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Dynamic context matching using continuous cosine similarity vector scores.
        </p>
      </div>

      {/* Filter Buttons Section */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-2 bg-orange-600 text-white text-xs font-semibold rounded-lg shadow-sm">All Matches</button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50">Top Rated (4.5+)</button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50">Budget Friendly</button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50">AI Recommended</button>
      </div>

      {/* Restaurant Responsive Grid Listing */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESTAURANTS.map((algo) => (
          <div key={algo.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="bg-orange-50 h-48 flex items-center justify-center text-6xl select-none">
              {algo.image}
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">
                  {algo.matchScore}
                </span>
                <span className="text-sm text-gray-500 font-medium">{algo.price}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1">{algo.name}</h3>
              <p className="text-xs text-gray-500 mb-4 font-mono">{algo.cuisine}</p>
              
              <div className="flex flex-wrap gap-1 mb-5">
                {algo.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <span className="text-orange-500 font-bold">★ {algo.rating}</span>
                  <span className="text-gray-400">({algo.reviews} reviews)</span>
                </div>
                <button className="text-orange-600 font-semibold hover:text-orange-700">
                  View Analysis →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}