import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Navbar({ onGetStarted }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock/unlock scroll when sidebar opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/src/assets/logo.jpg" 
                alt="Get Thru logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                GetThru
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50"
              >
                About
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50"
              >
                Services
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50"
              >
                Contact
              </button>
              <button
                onClick={onGetStarted}
                className="ml-4 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                style={{
                  background:
                    "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                }}
              >
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  toggleMobileMenu();
                  e.currentTarget.blur();
                }}
                className="text-gray-700 hover:text-emerald-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Background */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 cursor-default"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={(e) => {
                closeMobileMenu();
                e.currentTarget.blur();
              }}
              className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 p-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 cursor-default">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  closeMobileMenu();
                }}
                className="group relative px-5 py-4 text-gray-700 hover:text-white font-semibold text-lg transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 hover:shadow-xl transform hover:scale-105 hover:-translate-x-1 cursor-pointer overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-white transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    About
                  </span>
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                  closeMobileMenu();
                }}
                className="group relative px-5 py-4 text-gray-700 hover:text-white font-semibold text-lg transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 hover:shadow-xl transform hover:scale-105 hover:-translate-x-1 cursor-pointer overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-white transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Services
                  </span>
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  closeMobileMenu();
                }}
                className="group relative px-5 py-4 text-gray-700 hover:text-white font-semibold text-lg transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 hover:shadow-xl transform hover:scale-105 hover:-translate-x-1 cursor-pointer overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-white transition-all duration-300 group-hover:scale-150"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Contact
                  </span>
                </div>
              </button>
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 bg-white/50 backdrop-blur-sm">
            <button
              onClick={() => {
                onGetStarted();
                closeMobileMenu();
              }}
              className="w-full text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
              }}
            >
              Get Started
            </button>
            <p className="text-center text-sm text-gray-600 mt-4 font-medium">
              Join 10K+ connected users
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
