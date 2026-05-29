import React from 'react';
import Link from 'next/link'; // Standard Next.js Link router import

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
        
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Logo Section */}
          <span className="text-xl font-semibold text-orange-500 font-mono select-none">
            BiteFinder AI
          </span>
          
          {/* Links Section (Centered) */}
          <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-400 gap-6">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              {/* Link map with href="/contact" */}
              <Link href="/contact" className="hover:underline cursor-pointer">
                Contact Support
              </Link>
            </li>
          </ul>

        </div>

        {/* Divider Line */}
        <hr className="my-6 border-gray-700 mx-auto lg:my-8 w-full" />
        
        <span className="block text-sm text-gray-400 text-center">
          © 2026 BiteFinder AI. Developed for AI Project. All Rights Reserved.
        </span>

      </div>
    </footer>
  );
}