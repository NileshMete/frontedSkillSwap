'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-exchange-line text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SkillSwap
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The premier platform for skill exchange and collaborative learning. Connect, learn, and grow with our global community.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/browse" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Browse Skills</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors cursor-pointer">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/success-stories" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Success Stories</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-3">
              <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Community Hub</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Events</Link></li>
              <li><Link href="/forums" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Forums</Link></li>
              <li><Link href="/mentorship" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mentorship</Link></li>
              <li><Link href="/ambassador" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Ambassador Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link href="/safety" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Safety Guidelines</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SkillSwap. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}