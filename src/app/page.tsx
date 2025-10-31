'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCartIcon, 
  TruckIcon, 
  Bars3Icon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Adidas Dream 11 India Cricket ODI Fan Jersey",
      size: "Large",
      ageGroup: "Adult",
      price: 20,
      image: "/jersey.png"
    },
    {
      id: 2,
      name: "Adidas Dream 11 India Cricket ODI Fan Jersey",
      size: "Medium",
      ageGroup: "Adult",
      price: 20,
      image: "/jersey.png"
    },
    {
      id: 3,
      name: "Adidas Dream 11 India Cricket ODI Fan Jersey",
      size: "2XL",
      ageGroup: "Adult",
      price: 20,
      image: "/jersey.png"
    },
    {
      id: 4,
      name: "Adidas Official India T20 World Cup 2024 Fan Jersey",
      size: "Large",
      ageGroup: "Adult",
      price: 17,
      image: "/jersey.png"
    },
    {
      id: 5,
      name: "Adidas Official India T20 World Cup 2024 Fan Jersey",
      size: "Medium",
      ageGroup: "Adult",
      price: 17,
      image: "/jersey.png"
    },
    {
      id: 6,
      name: "Adidas Official India T20 World Cup 2024 Fan Jersey",
      size: "XL",
      ageGroup: "Adult",
      price: 17,
      image: "/jersey.png"
    }
  ];

  const productsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / productsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-3 flex-1">
              <img 
                src="/logo.webp" 
                alt="Gully Sports Logo" 
                className="h-12 w-12 rounded-full"
              />
              <span className="text-lg font-medium text-gray-800">Gully Sports</span>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <a href="#home" className="text-gray-900 font-bold">Home</a>
              <a href="#shop" className="text-gray-500 font-normal">Shop</a>
            </nav>

            {/* Sign In Button */}
            <div className="hidden md:flex items-center justify-end flex-1">
              <button className="px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Sign in
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-900 font-bold">Home</a>
                <a href="#shop" className="text-gray-500 font-normal">Shop</a>
                <button className="px-6 py-2 bg-black text-white font-medium rounded-lg w-fit">
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Banner */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-sm" style={{ backgroundColor: '#E0EDFF' }}>
                <span className="text-2xl">🎉</span>
                <span className="text-sm md:text-base font-bold" style={{ color: '#1A42A8' }}>Now Available: Premium Cricket Jerseys</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 leading-tight">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
                We are live!
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
                Your Premier Destination for
                <br />
                Cricket Accessories
              </span>
            </h1>

            {/* Description - Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">✓</span>
                <p className="text-base md:text-lg text-gray-700">Experience High-Quality Custom Bats & Official Jerseys!</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">✓</span>
                <p className="text-base md:text-lg text-gray-700">Shop authentic cricket jerseys today.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">✓</span>
                <p className="text-base md:text-lg text-gray-700">Get notified when we launch custom bats, protective gear</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">✓</span>
                <p className="text-base md:text-lg text-gray-700">and more premium cricket accessories.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#shop"
                className="px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Shop Jerseys Now
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 bg-white hover:bg-gray-50 text-black font-semibold border-2 border-black rounded-lg transition-colors duration-200"
              >
                Get Early Access
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Gully Sports Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Gully Sports?
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              We&apos;re not just another sports store. We&apos;re your cricket equipment partner with unique offerings you won&apos;t find anywhere else.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            {/* Top Row: Truly Custom Bats (Full Width Left) + Try Before You Buy (Right) */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Truly Custom Bats
                </h2>
                <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
                  Why settle for off-the-shelf? We build <strong className="text-blue-600 font-semibold">YOUR</strong> perfect bat from scratch.
                </p>
                <div className="space-y-5 text-base md:text-lg text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl font-bold mt-0.5">✓</span>
                    <p className="leading-relaxed"><strong className="text-gray-900">You choose:</strong> Profile, balance, weight, and handle (short, long, oval, or round)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl font-bold mt-0.5">✓</span>
                    <p className="leading-relaxed"><strong className="text-gray-900">Built-to-Order:</strong> Every bat is freshly made just for you. No pre-made inventory, just pure custom performance.</p>
                  </div>
                </div>
              </div>

              {/* Try Before You Buy - Right Side */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Try Before You Buy
                </h2>
                <p className="text-base md:text-lg font-semibold text-green-700 mb-4">
                  The ultimate game-changer!
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Rent a bat and test it in a real game or net session before you place your custom order. <strong className="text-gray-900">No more guessing</strong> if a bat feels right—experience it first!
                </p>
              </div>
            </div>

            {/* Bottom Row: Rep Your Team (Left) + Everything You Need (Full Width Right) */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Rep Your Team
                </h2>
                <div className="space-y-5 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 text-lg font-semibold mt-0.5">✓</span>
                    <p className="leading-relaxed"><strong className="text-gray-900">Authentic India Jerseys:</strong> Official fan gear for kids and adults in all sizes!</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 text-lg font-semibold mt-0.5">✓</span>
                    <p className="leading-relaxed"><strong className="text-gray-900">Custom Team Jerseys:</strong> Get your local club looking professional with our custom jersey designs.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 bg-orange-50 rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Everything You Need in One Place
                </h2>
                <div className="space-y-5 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-600 text-lg font-semibold mt-0.5">✓</span>
                    <p className="leading-relaxed"><strong className="text-gray-900">Kids&apos; Kit Bags:</strong> Complete, high-quality sets to get your young star started.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-600 text-lg font-semibold mt-0.5">✓</span>
                    <p className="leading-relaxed"><strong className="text-gray-900">Pro Accessories:</strong> Balls, batting gloves, keeping gloves, guards, and all other essential gear.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Now Section */}
      <section id="shop" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Available Now
            </h2>
            <p className="text-lg text-gray-600">
              Authentic cricket jerseys from top teams and players
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Official Jerseys Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <ShoppingCartIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Official Jerseys
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Premium quality cricket jerseys from India, Australia, and international teams.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                <span>Browse Collection</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Multiple Sizes Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Multiple Sizes
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Available in S, M, L, XL, 2XL to ensure the perfect fit for every player.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                <span>Find Your Size</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Fast Shipping Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Fast Shipping
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Quick and secure delivery to get your jersey ready for the next match.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                <span>Shop Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Shop Our Collection
            </h2>
            <p className="text-lg text-gray-600">
              Browse our authentic cricket jerseys
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                      {products
                        .slice(
                          slideIndex * productsPerSlide,
                          slideIndex * productsPerSlide + productsPerSlide
                        )
                        .map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                          >
                            {/* Product Image */}
                            <div className="relative bg-gray-100 aspect-square">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                              {/* Carousel indicators on image */}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                              </div>
                              {/* Arrow indicator */}
                              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-50">
                                <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                {product.name} - {product.size}
                              </h3>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                                  age group {product.ageGroup}
                                </span>
                                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                                  size {product.size}
                                </span>
                              </div>

                              {/* Price */}
                              <div className="mb-4">
                                <span className="text-2xl font-bold text-gray-900">
                                  ${product.price}
                                </span>
                              </div>

                              {/* Add to Cart Button */}
                              <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon className="w-6 h-6 text-gray-900" />
                </button>
              </>
            )}

            {/* Carousel Dots */}
            {totalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-gray-900 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Early Access Interest Form */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Early Access
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Join our exclusive list and be the first to know when we launch new products
            </p>
            <p className="text-lg text-gray-300">
              Plus, get 10% off your first purchase of any new product!
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 md:p-10 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">What interests you most?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Custom Cricket Bats', 'Cricket Lane Rentals', 'Training Equipment', 'New Product Launches', 'Exclusive Discounts'].map((interest) => (
                <label key={interest} className="flex items-center space-x-2 text-left cursor-pointer hover:text-blue-300 transition-colors">
                  <input type="checkbox" className="rounded cursor-pointer" />
                  <span className="text-sm text-gray-300">{interest}</span>
                </label>
              ))}
            </div>
            
            <div className="mb-6">
              <input
                type="text"
                placeholder="Something else"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button className="w-full py-4 px-8 font-semibold rounded-lg text-white text-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Notify Me
            </button>
            
            <div className="mt-6 text-sm text-gray-400 text-center">
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
                <a href="#shop" className="block text-gray-300 hover:text-white">Shop</a>
                <Link href="/faq" className="block text-gray-300 hover:text-white">FAQ</Link>
                <Link href="/returns" className="block text-gray-300 hover:text-white">Exchange & Returns</Link>
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