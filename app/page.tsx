"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Common redirect function for query mapping
  const handleSearchExecution = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      router.push('/restaurants');
    } else {
      router.push(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearchExecution(query);
  };

  return (
    <div className="bg-gray-50 w-full">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10 mb-4 animate-pulse">
              🚀 Smart Vector Search Engine Live
            </span>
            
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-sans leading-tight">
              Find the Best Dishes dynamically with <span className="text-orange-600">BiteFinder AI</span>
            </h1>
            
            <p className="mt-4 text-sm sm:text-base leading-6 text-gray-600 max-w-xl mx-auto">
              An intelligent, context-aware food exploration platform powered by FastAPI backend, OpenAI, and Qdrant vector cloud index storage.
            </p>
            
            {/* AI Search Hub Component */}
            <form onSubmit={handleFormSubmit} className="mt-6 max-w-xl mx-auto bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: 'Spicy chicken biryani near Karachi'..." 
                className="w-full px-4 py-2.5 text-gray-700 bg-transparent rounded-lg focus:outline-none placeholder-gray-400 text-sm text-gray-800"
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto rounded-lg bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors shrink-0 cursor-pointer border-none outline-none"
              >
                Search AI
              </button>
            </form>

            {/* Quick Suggestions Matrix */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span className="font-medium text-gray-700">Popular queries:</span>
              <button onClick={() => handleSearchExecution('Cheesy Pizza')} className="hover:text-orange-600 border border-gray-200 px-2 py-0.5 rounded bg-gray-50 cursor-pointer transition-colors">Cheesy Pizza</button>
              <button onClick={() => handleSearchExecution('Hyderabadi Haleem')} className="hover:text-orange-600 border border-gray-200 px-2 py-0.5 rounded bg-gray-50 cursor-pointer transition-colors">Hyderabadi Haleem</button>
              <button onClick={() => handleSearchExecution('Outdoor Dining')} className="hover:text-orange-600 border border-gray-200 px-2 py-0.5 rounded bg-gray-50 cursor-pointer transition-colors">Outdoor Dining</button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights Matrix */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-orange-600 font-bold text-base mb-1">🔍 Context-Aware</div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Our AI models understand descriptive constraints like mood, hygiene, and authentic localized tastes.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-orange-600 font-bold text-base mb-1">⚡ Vector Indexing</div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Powered by Qdrant cloud services to search massive culinary databases within milliseconds.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-orange-600 font-bold text-base mb-1">🤝 Double Credit Tracking</div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Integrated with Spec-Kit Plus protocols for synchronous development metrics distribution.</p>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}