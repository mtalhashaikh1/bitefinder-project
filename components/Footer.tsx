import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xl font-semibold text-orange-500 font-mono">BiteFinder AI</span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2026 BiteFinder AI. Developed for AI Practical Project Assignment. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}