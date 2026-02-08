import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      {/* Hero Carousel Section */}
      <HeroCarousel />
      
      {/* home page content bg-[#2B1E1A] */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium font-roboto text-[#AE9364] text-center">
            Welcome to Bisht Homestay
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl text-center">
            Your peaceful retreat in the mountains awaits.
          </p>
          <p className="text-base md:text-lg text-black/70 max-w-2xl text-center">
            Escape from the hustle and hassle of your everyday routine and come away to the Bisht Homestay, where a serene world awaits you. Throw off all your worries and slip into the scenic, relaxed atmosphere and be pampered and rejuvenated.
          </p>
          <button className="mt-4 px-8 py-3 cursor-pointer bg-none border-[#AE9364] border-2 text-brand hover:text-white font-light rounded-lg hover:bg-brand transition-all duration-300 hover:scale-105 opacity-100 translate-y-8 animate-slideUp"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          onClick={() => navigate("/rooms")}
          >
            Explore Rooms
          </button>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white flex justify-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel'] text-brand text-center">
              Our Amenities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl text-center">
              Experience comfort and convenience with our thoughtfully provided amenities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#FAF7F3] text-brand text-3xl md:text-4xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                📶
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center text-gray-800">Free WiFi</h3>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#FAF7F3] text-brand text-3xl md:text-4xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                🅿️
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center text-gray-800">Free Parking</h3>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#FAF7F3] text-brand text-3xl md:text-4xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                🍽️
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center text-gray-800">Restaurant</h3>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#FAF7F3] text-brand text-3xl md:text-4xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                🏔️
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center text-gray-800">Mountain View</h3>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#FAF7F3] text-brand text-3xl md:text-4xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                🌳
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center text-gray-800">Garden</h3>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#FAF7F3] text-brand text-3xl md:text-4xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                🚿
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center text-gray-800">Hot Water</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-[#FAF7F3] flex justify-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel'] text-brand text-center">
              Local Places for Exploration
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 text-center">
              Discover the beauty around Bisht Homestay
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 w-full'>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src="./src/assets/kainchi-dham.jpg" alt="Kainchi Dham" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">Kainchi Dham</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sacred Temple</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src="./src/assets/ranikhet-binsar.jpg" alt="Ranikhet Binsar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">Ranikhet Binsar</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scenic Beauty</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src="./src/assets/dhokaney-waterfall.jpg" alt="Dhokaney Waterfall" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">Dhokaney Waterfall</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Natural Wonder</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src="./src/assets/chitai-temple-golu-devta.jpg" alt="Chitai Temple" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">Chitai Temple</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Golu Devta</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src="./src/assets/museum.jpg" alt="Museum" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">Local Museum</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cultural Heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white flex justify-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cinzel'] text-brand text-center">
              What Our Guests Say
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl text-center">
              Real experiences from our valued guests
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="bg-[#FAF7F3] p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                "An absolutely wonderful stay! The hospitality was exceptional, and the mountain views were breathtaking. The rooms were clean and comfortable. Highly recommend!"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-semibold">
                  RS
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rajesh Sharma</h4>
                  <p className="text-sm text-gray-600">Delhi, India</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF7F3] p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                "Perfect getaway from city life. The peaceful environment, delicious local food, and warm hosts made our trip memorable. Will definitely visit again!"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-semibold">
                  PK
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Priya Kapoor</h4>
                  <p className="text-sm text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF7F3] p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                "Amazing experience! The location is perfect for nature lovers. The staff went above and beyond to make us feel at home. Great value for money!"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-semibold">
                  AM
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Amit Mehta</h4>
                  <p className="text-sm text-gray-600">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Hero Carousel Component
const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "./src/assets/hero-carausel-01.jpg",
      alt: "Room interior",
      title: "Experience Tranquility",
      subtitle: "A peaceful retreat in the heart of the mountains"
    },
    {
      image: "./src/assets/hero-carausel-02.jpg",
      alt: "Affordable homestay",
      title: "Affordable Luxury",
      subtitle: "Comfortable stays that fit your budget"
    },
    {
      image: "./src/assets/hero-carausel-03.jpg",
      alt: "Comfortable homestay",
      title: "Feel like Home",
      subtitle: "Warm hospitality and cozy accommodations"
    },
    {
      image: "./src/assets/hero-carausel-04.jpg",
      alt: "Affordable homestay",
      title: "Nature's Embrace",
      subtitle: "Wake up to breathtaking mountain views"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {/* Image */}
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-lg"
                  style={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    transform: currentIndex === index ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out 0.2s'
                  }}>
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md"
                 style={{ 
                   opacity: currentIndex === index ? 1 : 0,
                   transform: currentIndex === index ? 'translateY(0)' : 'translateY(30px)',
                   transition: 'all 0.8s ease-out 0.4s'
                 }}>
                {slide.subtitle}
              </p>
              <button 
                onClick={() => navigate('/rooms')}
                className="mt-8 px-8 py-3 bg-[#D8A23A] text-[#2B1E1A] font-medium rounded-lg hover:bg-[#c4932f] transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  transform: currentIndex === index ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                Book Your Stay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Navigation Pills */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-3 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'w-10 bg-[#D8A23A]' 
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Progress indicator for active slide */}
            {index === currentIndex && !isPaused && (
              <span className="absolute inset-0 rounded-full bg-[#D8A23A]/30 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-white/80 font-medium">
        <span className="text-2xl text-[#D8A23A]">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="text-white/50">/</span>
        <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default Home;