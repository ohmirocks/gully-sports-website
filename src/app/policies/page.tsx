'use client';

import { useState } from 'react';
import { 
  ShoppingCartIcon,
  XMarkIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const colorPalettes = {
  palette1: {
    name: 'Red Theme',
    primary: '#DC2626',
    secondary: '#FEE2E2',
    accent: '#FEF2F2',
    text: '#1F2937',
    background: '#FFFFFF'
  }
};

export default function PoliciesPage() {
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(null);
  const currentPalette = colorPalettes.palette1;

  const faqs = [
    {
      question: "Why should I buy from Gully Sports?",
      answer: "We specialize in authentic cricket equipment with custom bats and jerseys. Our 'Try Bats Before You Buy' policy ensures you get the perfect fit. We offer IPL, Indian team, and custom jerseys with fast shipping across the US."
    },
    {
      question: "What makes Gully Sports different from other stores?",
      answer: "We're not just another sports store. We specialize exclusively in cricket equipment, offer custom bat personalization, have a try-before-you-buy policy, and provide expert cricket knowledge. Our focus is on quality and customer satisfaction."
    },
    {
      question: "Do you offer custom cricket bats?",
      answer: "Yes! We specialize in custom cricket bats where you can choose wood type, weight, grip, and personalized engravings. Our handcrafted bats are made to your exact specifications."
    },
    {
      question: "What sizes are available for jerseys?",
      answer: "We offer jerseys in sizes S, M, L, XL, and 2XL to ensure the perfect fit for every player. Our jerseys are available for IPL teams, Indian national team, and custom designs."
    },
    {
      question: "Do you ship across the US?",
      answer: "Yes! We ship across the entire United States with fast and secure delivery to get your cricket equipment ready for your next match."
    },
    {
      question: "Can I try bats before purchasing?",
      answer: "Absolutely! Our unique 'Try Bats Before You Buy' policy allows you to test our cricket bats to ensure you get the perfect one for your playing style."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.webp" 
                alt="Gully Sports Logo" 
                className="h-12 w-auto rounded-full"
              />
            </Link>
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: currentPalette.accent }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentPalette.text }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Gully Sports
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setIsFaqOpen(isFaqOpen === index ? null : index)}
                >
                  <span className="font-semibold" style={{ color: currentPalette.text }}>
                    {faq.question}
                  </span>
                  {isFaqOpen === index ? (
                    <XMarkIcon className="w-5 h-5" style={{ color: currentPalette.primary }} />
                  ) : (
                    <div className="w-5 h-5" style={{ color: currentPalette.primary }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13H5v-2h14v2z"/>
                      </svg>
                    </div>
                  )}
                </button>
                {isFaqOpen === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Policy Section */}
      <section id="returns" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentPalette.text }}>
              Return & Exchange Policy
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to your satisfaction with clear return guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jersey Returns */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{ borderLeftColor: currentPalette.primary }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                     style={{ backgroundColor: currentPalette.secondary }}>
                  <ShoppingCartIcon className="w-6 h-6" style={{ color: currentPalette.primary }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: currentPalette.text }}>
                  Jersey Returns & Exchanges
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: currentPalette.primary }} />
                  <div>
                    <p className="font-semibold text-gray-900">Size Exchange Only</p>
                    <p className="text-gray-600 text-sm">We only accept exchanges for size issues, not for style changes or general returns.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: currentPalette.primary }} />
                  <div>
                    <p className="font-semibold text-gray-900">Original Tags Required</p>
                    <p className="text-gray-600 text-sm">Jerseys must be returned with all original tags attached and in unworn condition.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: currentPalette.primary }} />
                  <div>
                    <p className="font-semibold text-gray-900">Return Shipping</p>
                    <p className="text-gray-600 text-sm">Return shipping costs are the responsibility of the buyer.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: currentPalette.primary }} />
                  <div>
                    <p className="font-semibold text-gray-900">Time Limit</p>
                    <p className="text-gray-600 text-sm">Exchange requests must be made within 14 days of delivery.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Bats Policy */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{ borderLeftColor: '#DC2626' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-red-100">
                  <XMarkIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: currentPalette.text }}>
                  Custom Cricket Bats
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <XMarkIcon className="w-5 h-5 mt-1 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">No Returns Accepted</p>
                    <p className="text-gray-600 text-sm">Custom-made cricket bats are personalized to your specifications and cannot be returned.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Try Before You Buy</p>
                    <p className="text-gray-600 text-sm">Take advantage of our &quot;Try Bats Before You Buy&quot; policy to ensure the perfect fit.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Custom Specifications</p>
                    <p className="text-gray-600 text-sm">Each bat is handcrafted to your exact requirements - weight, wood type, grip, and engravings.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Quality Assurance</p>
                    <p className="text-gray-600 text-sm">We ensure the highest quality craftsmanship before shipping your custom bat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
              Important Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: currentPalette.text }}>Processing Time</h4>
                <p className="text-gray-600 text-sm">Exchange requests are processed within 3-5 business days after receiving the returned item.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: currentPalette.text }}>Contact Us</h4>
                <p className="text-gray-600 text-sm">For any questions about returns or exchanges, contact us at 408 677 0734 or www.gullysports.store</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.webp" 
                  alt="Gully Sports Logo" 
                  className="h-8 w-auto rounded-full"
                />
                <span className="text-xl font-bold text-white">Gully Sports</span>
              </div>
              <p className="text-gray-300">
                Your premier destination for cricket and sports recreation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
                <Link href="/#shop" className="block text-gray-300 hover:text-white">Shop</Link>
                <Link href="/policies" className="block text-gray-300 hover:text-white">FAQ & Policies</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>408 677 0734</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>www.gullysports.store</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>©2025 Gully Sports LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

