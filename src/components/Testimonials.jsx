import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Thabo Mabaso",
    role: "Small Business Owner",
    location: "Soweto, Johannesburg",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "GetThru has transformed my business. With affordable internet, I can now manage my online store and reach customers across South Africa. The digital skills training helped me understand e-commerce and social media marketing."
  },
  {
    id: 2,
    name: "Nomsa Dlamini",
    role: "Student",
    location: "Durban, KwaZulu-Natal",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "As a student, having reliable and affordable internet is crucial. GetThru made it possible for me to attend online classes, research for assignments, and stay connected with my classmates. The support team is always helpful!"
  },
  {
    id: 3,
    name: "Sipho Ndlovu",
    role: "Freelance Developer",
    location: "Cape Town, Western Cape",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "The combination of fast internet and free coding courses from GetThru helped me transition into freelance web development. I'm now earning a sustainable income and working with international clients. Thank you GetThru!"
  },
  {
    id: 4,
    name: "Zanele Khumalo",
    role: "Community Leader",
    location: "Pretoria, Gauteng",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "GetThru brought internet access to our entire community center. Now our youth can access educational resources, apply for jobs online, and learn valuable digital skills. This is truly bridging the digital divide."
  },
  {
    id: 5,
    name: "Mandla Sithole",
    role: "Entrepreneur",
    location: "Port Elizabeth, Eastern Cape",
    image: "https://i.pravatar.cc/150?img=51",
    rating: 5,
    text: "I started my online tutoring business thanks to GetThru's affordable data plans and business training programs. The platform has been a game-changer for entrepreneurs like me who want to make a difference in education."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setDirection(-1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setDirection(1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    setIsDragging(false);
  };

  // Mouse drag support for desktop
  const onMouseDown = (e) => {
    setTouchEnd(0);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 text-base sm:text-lg font-semibold mb-3 inline-block px-4 py-1 bg-blue-50 rounded-full">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">What Our Users Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real stories from real people who are thriving with GetThru
          </p>
        </div>

        {/* Testimonial Container with proper spacing for buttons */}
        <div className="relative max-w-4xl mx-auto">
          {/* Add padding on mobile to prevent button overlap */}
          <div 
            className="px-8 sm:px-10 md:px-0"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            {/* Main Testimonial Card */}
            <div className={`bg-white rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden min-h-[400px] sm:min-h-[380px] md:min-h-[350px] flex flex-col justify-center transition-all duration-500 ${
              isDragging ? 'cursor-grabbing scale-[0.98]' : 'cursor-grab'
            } ${
              isAnimating 
                ? direction === 1 
                  ? 'animate-slideOutLeft' 
                  : 'animate-slideOutRight'
                : 'animate-slideIn'
            }`}>
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 opacity-10 hidden sm:block pointer-events-none">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-emerald-600" />
              </div>

              {/* Content with fade animation */}
              <div className={`relative z-10 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-emerald-100 shadow-lg flex-shrink-0"
                    draggable="false"
                  />
                  <div className="text-center md:text-left w-full">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-0.5 text-xs sm:text-sm md:text-base">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                    <div className="flex gap-1 mt-1.5 sm:mt-2 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed italic select-none">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - positioned outside the padded container */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:left-2 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 text-gray-800 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-2 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 text-gray-800 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  index === currentIndex
                    ? 'bg-emerald-600 w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Below Testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto px-4">
          <div className="text-center p-4 rounded-xl hover:bg-white transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">4.9/5</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Average Rating</div>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-white transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">2,500+</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Happy Reviews</div>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-white transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">98%</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Would Recommend</div>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-white transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">10K+</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  );
}
