'use client';

import { useState } from 'react';
import { 
  ShoppingCartIcon, 
  TruckIcon, 
  ShieldCheckIcon, 
  StarIcon,
  CheckIcon,
  XMarkIcon,
  Bars3Icon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import GullySportsLogo from '../components/GullySportsLogo';

// Color palette configurations
const colorPalettes = {
  palette1: {
    name: 'Red Theme',
    primary: '#DC2626',
    secondary: '#FEE2E2',
    accent: '#FEF2F2',
    text: '#1F2937',
    background: '#FFFFFF'
  },
  palette2: {
    name: 'Green Theme',
    primary: '#16A34A',
    secondary: '#DCFCE7',
    accent: '#F0FDF4',
    text: '#1F2937',
    background: '#FFFFFF'
  },
  palette3: {
    name: 'Teal Theme',
    primary: '#0D9488',
    secondary: '#CCFBF1',
    accent: '#F0FDFA',
    text: '#1F2937',
    background: '#FFFFFF'
  },
  palette4: {
    name: 'Gray Theme',
    primary: '#6B7280',
    secondary: '#F3F4F6',
    accent: '#F9FAFB',
    text: '#1F2937',
    background: '#FFFFFF'
  }
};

export default function HomePage() {
  const [selectedPalette, setSelectedPalette] = useState('palette1');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(null);

  const currentPalette = colorPalettes[selectedPalette as keyof typeof colorPalettes];

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
      {/* Color Palette Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Color Theme</h3>
        <div className="flex gap-2">
          {Object.entries(colorPalettes).map(([key, palette]) => (
            <button
              key={key}
              onClick={() => setSelectedPalette(key)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedPalette === key ? 'border-gray-800' : 'border-gray-300'
              }`}
              style={{ backgroundColor: palette.primary }}
              title={palette.name}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <GullySportsLogo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="#returns" className="text-gray-700 hover:text-gray-900 font-medium">Returns</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 text-white font-medium rounded-lg"
                      style={{ backgroundColor: currentPalette.primary }}>
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
                <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
                <a href="#returns" className="text-gray-700 hover:text-gray-900 font-medium">Returns</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
                <button className="px-6 py-2 text-white font-medium rounded-lg w-fit"
                        style={{ backgroundColor: currentPalette.primary }}>
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Banner Section */}
      <section id="home" className="relative bg-gradient-to-b from-blue-50 to-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Welcome to Gully Sports
          </h2>
          <div className="w-full flex justify-center">
            <img 
              src="/banner.png" 
              alt="Gully Sports - We Are Live! Your New Cricket & Sports Hub" 
              className="max-w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Jersey Sale Section */}
      <section className="relative bg-gradient-to-b from-gray-100 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-800">
            Premium Cricket Jerseys
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Authentic jerseys from IPL teams, Indian national team, and more. Available in all sizes with fast shipping across the US.
          </p>
          <div className="w-full flex justify-center">
            <img 
              src="/Jersey_sale.png" 
              alt="Gully Sports Jersey Sale - Premium Cricket Jerseys" 
              className="max-w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Custom Bat Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Custom Cricket Bats
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Handcrafted bats tailored to your profile and preferences. Try before you buy with our unique rental program.
          </p>
          <div className="w-full flex justify-center">
            <img 
              src="/custom_bat_banner.png" 
              alt="Gully Sports Custom Bats - Tailored to Your Profile & Preference" 
              className="max-w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Available Now Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentPalette.text }}>
              Available Now
            </h2>
            <p className="text-xl text-gray-600">
              Authentic cricket jerseys from top teams and players
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Official Jerseys */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <ShoppingCartIcon className="w-8 h-8" style={{ color: currentPalette.primary }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
                Official Jerseys
              </h3>
              <p className="text-gray-600 mb-6">
                Premium quality cricket jerseys from India, Australia, and international teams
              </p>
              <a href="#" className="font-semibold" style={{ color: currentPalette.primary }}>
                Browse Collection →
              </a>
            </div>

            {/* Multiple Sizes */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <div className="w-8 h-8" style={{ color: currentPalette.primary }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
                Multiple Sizes
              </h3>
              <p className="text-gray-600 mb-6">
                Available in S, M, L, XL, 2XL to ensure the perfect fit for every player
              </p>
              <a href="#" className="font-semibold" style={{ color: currentPalette.primary }}>
                Find Your Size →
              </a>
            </div>

            {/* Fast Shipping */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <TruckIcon className="w-8 h-8" style={{ color: currentPalette.primary }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
                Fast Shipping
              </h3>
              <p className="text-gray-600 mb-6">
                Quick and secure delivery to get your jersey ready for the next match
              </p>
              <a href="#" className="font-semibold" style={{ color: currentPalette.primary }}>
                Shop Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20" style={{ backgroundColor: currentPalette.accent }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
                 style={{ backgroundColor: '#F97316' }}>
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentPalette.text }}>
              Exciting Launches Ahead
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re expanding our collection with premium cricket accessories. Be the first to know when they launch!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Custom Cricket Bats */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#DBEAFE' }}>
                <div className="w-8 h-8" style={{ color: '#3B82F6' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
                Custom Cricket Bats
              </h3>
              <p className="text-gray-600 mb-4">
                Handcrafted bats customized to your specifications. Choose wood type, weight, grip, and personalized engravings.
              </p>
              <div className="text-sm font-semibold" style={{ color: '#3B82F6' }}>
                Launching December 2025
              </div>
            </div>

            {/* Cricket Lane Rentals */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#DCFCE7' }}>
                <div className="w-8 h-8" style={{ color: '#16A34A' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
                Cricket Lane Rentals
              </h3>
              <p className="text-gray-600 mb-4">
                Book premium cricket lanes by the hour. Perfect for practice sessions, tournaments, and friendly matches.
              </p>
              <div className="text-sm font-semibold" style={{ color: '#16A34A' }}>
                Launching March 2026
              </div>
            </div>

            {/* Training Equipment */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#F3E8FF' }}>
                <StarIcon className="w-8 h-8" style={{ color: '#8B5CF6' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: currentPalette.text }}>
                Training Equipment
              </h3>
              <p className="text-gray-600 mb-4">
                Cricket balls, stumps, coaching aids, and practice gear. Everything you need to improve your game.
              </p>
              <div className="text-sm font-semibold" style={{ color: '#8B5CF6' }}>
                Launching December 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentPalette.text }}>
              Why Choose Gully Sports?
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re different from other cricket equipment stores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <ShieldCheckIcon className="w-8 h-8" style={{ color: currentPalette.primary }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: currentPalette.text }}>
                100% Authentic
              </h3>
              <p className="text-gray-600 text-sm">
                All our products are genuine and authentic
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <TruckIcon className="w-8 h-8" style={{ color: currentPalette.primary }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: currentPalette.text }}>
                Fast Shipping
              </h3>
              <p className="text-gray-600 text-sm">
                Quick and secure delivery across the US
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <CheckIcon className="w-8 h-8" style={{ color: currentPalette.primary }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: currentPalette.text }}>
                Try Before Buy
              </h3>
              <p className="text-gray-600 text-sm">
                Test our bats before making a purchase
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: currentPalette.secondary }}>
                <StarIcon className="w-8 h-8" style={{ color: currentPalette.primary }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: currentPalette.text }}>
                Expert Knowledge
              </h3>
              <p className="text-gray-600 text-sm">
                Cricket specialists with years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Get Early Access Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Early Access
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our exclusive list and be the first to know when we launch new products
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Plus, get 10% off your first purchase of any new product!
          </p>

          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">What interests you most?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Custom Cricket Bats', 'Cricket Lane Rentals', 'Training Equipment', 'New Product Launches', 'Exclusive Discounts'].map((interest) => (
                <label key={interest} className="flex items-center space-x-2 text-left">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{interest}</span>
                </label>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            <button className="w-full py-4 px-8 font-semibold rounded-lg text-white text-lg"
                    style={{ backgroundColor: currentPalette.primary }}>
              Notify Me
            </button>
            
            <div className="mt-4 text-sm text-gray-400">
              ✓ Early access to new launches ✓ Exclusive discounts ✓ No spam, unsubscribe anytime
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
                <GullySportsLogo size="sm" showText={true} />
              </div>
              <p className="text-gray-300">
                Your premier destination for cricket and sports recreation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#shop" className="block text-gray-300 hover:text-white">Shop</a>
                <a href="#about" className="block text-gray-300 hover:text-white">About Us</a>
                <a href="#returns" className="block text-gray-300 hover:text-white">Return Policy</a>
                <a href="#contact" className="block text-gray-300 hover:text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>408 677 0734</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span>www.gullysports.store</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>San Jose, CA, USA</span>
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