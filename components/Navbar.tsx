import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600 font-mono tracking-tight">
            🍔 BiteFinder AI
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button type="button" className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all">
            Ask AI Chatbot
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li><a href="/" className="block py-2 px-3 text-orange-600 rounded md:bg-transparent md:p-0">Home</a></li>
            <li><a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">About</a></li>
            <li><a href="/restaurants" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">Explore Places</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}