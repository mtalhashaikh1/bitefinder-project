import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10 mb-6 animate-pulse">
              🚀 Smart Vector Search Engine Live
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-sans">
              Find the Best Dishes dynamically with <span className="text-orange-600">BiteFinder AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
              An intelligent, context-aware food exploration platform powered by FastAPI backend, OpenAI, and Qdrant vector cloud index storage.
            </p>
            
            {/* AI Search Hub Component */}
            <div className="mt-10 max-w-xl mx-auto bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                placeholder="Try: 'Spicy chicken biryani near Karachi with clean seating'..." 
                className="w-full px-4 py-3 text-gray-700 bg-transparent rounded-lg focus:outline-none placeholder-gray-400 text-sm sm:text-base"
              />
              <button className="w-full sm:w-auto rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors shrink-0">
                Search AI
              </button>
            </div>

            {/* Quick Suggestions Matrix */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span className="font-medium text-gray-700">Popular queries:</span>
              <button className="hover:text-orange-600 border border-gray-200 px-2 py-0.5 rounded bg-gray-50">Cheesy Pizza</button>
              <button className="hover:text-orange-600 border border-gray-200 px-2 py-0.5 rounded bg-gray-50">Hyderabadi Haleem</button>
              <button className="hover:text-orange-600 border border-gray-200 px-2 py-0.5 rounded bg-gray-50">Outdoor Dining</button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights Matrix */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-orange-600 font-bold text-lg mb-2">🔍 Context-Aware</div>
            <p className="text-sm text-gray-600 leading-relaxed">Our AI models understand descriptive constraints like mood, hygiene, and authentic localized tastes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-orange-600 font-bold text-lg mb-2">⚡ Vector Indexing</div>
            <p className="text-sm text-gray-600 leading-relaxed">Powered by Qdrant cloud services to search massive culinary databases within milliseconds.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-orange-600 font-bold text-lg mb-2">🤝 Double Credit Tracking</div>
            <p className="text-sm text-gray-600 leading-relaxed">Integrated with Spec-Kit Plus protocols for synchronous development metrics distribution.</p>
          </div>
        </div>
      </section>
    </div>
  );
}