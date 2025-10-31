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
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentPalette = colorPalettes[selectedPalette as keyof typeof colorPalettes];

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
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.webp" 
                alt="Gully Sports Logo" 
                className="h-12 w-auto rounded-full"
              />
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
              We're not just another sports store. We're your cricket equipment partner with unique offerings you won't find anywhere else.
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
                    <p className="leading-relaxed"><strong className="text-gray-900">Kids' Kit Bags:</strong> Complete, high-quality sets to get your young star started.</p>
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