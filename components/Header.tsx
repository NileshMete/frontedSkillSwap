'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-exchange-line text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SkillSwap
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">
              How It Works
            </Link>
            <Link href="#community" className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">
              Community
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">
              Sign In
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap cursor-pointer">
              Get Started
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
            <Link href="#features" className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              How It Works
            </Link>
            <Link href="#community" className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Community
            </Link>
            <Link href="/login" className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Sign In
            </Link>
            <Link href="/register" className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all text-center cursor-pointer">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}