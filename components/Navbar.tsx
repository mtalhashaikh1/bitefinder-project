"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close state

  const centerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Venues', href: '/restaurants' },
    { name: 'About Project', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      {/* Main Navbar Row */}
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link href="/" className="text-xl font-black tracking-tight text-gray-900 select-none">
          BiteFinder<span className="text-orange-600">.AI</span>
        </Link>

        {/* Center: Desktop Links */}
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

        {/* Right Side: Ask AI & Hamburger (Ask AI desktop par dikhega) */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => {
              window.dispatchEvent(new Event('open-bitefinder-chat'));
            }}
            className="hidden sm:block bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm cursor-pointer outline-none border-none"
          >
            Ask AI Chatbot
          </button>

          {/* Hamburger Button (Sirf mobile view 'md:hidden' par dikhega) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-orange-600 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Cross (X) Icon jab menu khula ho
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger (3 Lines) Icon jab menu band ho
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Sirf tabhi khulega jab Hamburger par click hoga) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-4 space-y-3 shadow-inner">
          {centerLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Click hote hi menu band ho jaye
                className={`block text-sm font-medium py-2 ${
                  isActive ? 'text-orange-600 font-bold' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          {/* Ask AI Chatbot button mobile dropdown ke andar*/}
          <button 
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new Event('open-bitefinder-chat'));
            }}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold py-2.5 rounded-lg transition-all text-center block border-none outline-none"
          >
            Ask AI Chatbot
          </button>
        </div>
      )}
    </nav>
  );
}