"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const centerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Venues', href: '/restaurants' },
    { name: 'About Project', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="text-xl font-black tracking-tight text-gray-900 select-none">
          BiteFinder<span className="text-orange-600">.AI</span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          {centerLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive 
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600' 
                    : 'text-gray-500 hover:text-orange-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Ask AI */}
        {/* Right Side: Ask AI */}
<button 
  onClick={() => {
    window.dispatchEvent(new Event('open-bitefinder-chat'));
  }}
  className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm cursor-pointer outline-none border-none"
>
  Ask AI Chatbot
</button>
      </div>
    </nav>
  );
}