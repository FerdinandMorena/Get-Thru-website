import {
  Wifi,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Laptop,
  Calendar,
  MapPin,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

export default function Home({ onGetStarted }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <Navbar onGetStarted={onGetStarted} />

      {/* Hero Section with Background */}
      <div className="relative overflow-hidden min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          }}
        ></div>

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-blue-900/85 to-purple-900/90"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Connecting South Africa
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Stay Connected,
                <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mt-2">
                  Stay Empowered
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-xl">
                Affordable internet access and digital skills training for
                everyone. Breaking barriers, building futures.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  onClick={onGetStarted}
                  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transform"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md">
                  Learn More
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-white mb-1 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-gray-300 text-sm">Connected Users</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-white mb-1 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-gray-300 text-sm">Communities</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-white mb-1 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-gray-300 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Digital Inclusion
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Empowering communities through connectivity and education
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Affordable data plans
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Free digital training
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        24/7 support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Digital Skills Training Section */}
      <div
        id="training"
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-bold mb-4 border border-red-200">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              FREE — 2026 Intake Now Open
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Free Digital Skills
            </h2>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl pb-4 lg:text-6xl font-extrabold leading-normal mb-4"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(to right, #059669, #2563eb)",
              }}
            >
              Training — Mpumalanga
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto  leading-relaxed">
              Gain practical <strong>Digital</strong>, <strong>ICT</strong> and{" "}
              <strong>Professional</strong> workplace skills. Build your digital
              future today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Details */}
            <div className="space-y-6">
              {/* Registration Deadline */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Registration Deadline
                    </h4>
                    <p className="text-red-600 font-bold text-xl">
                      20 March 2026 — At 2pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Who Can Apply */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200">
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    WHO CAN APPLY?
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">
                      Unemployed Youth (18+)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">
                      Community Members
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">
                      Graduates
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">
                      Informal Traders &amp; Small Business Owners
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-blue-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 sm:p-10 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-6 mx-auto">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                    Sign Up Now
                  </h3>
                  <p className="text-gray-600 mb-3 text-lg">
                    Register for{" "}
                    <span className="text-red-600 font-bold">FREE</span> Digital
                    Skills Training
                  </p>
                  <p className="text-gray-500 mb-6 text-sm flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Mpumalanga, South Africa
                  </p>
                  <button
                    onClick={onGetStarted}
                    className="w-full text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    Register Now — It's Free!
                  </button>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-gray-500">
                    <a
                      href="https://wa.me/27630270385"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 hover:text-emerald-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      063 027 0385
                    </a>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <a
                      href="mailto:info@getthru.co.za"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      info@getthru.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative py-24 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-blue-600 text-lg font-semibold inline-block px-4 py-1 bg-blue-50 rounded-full">
                  About Us
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto lg:mx-0">
                  Bridging the
                  <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2.5">
                    Digital Divide
                  </span>
                  in South Africa
                </h2>
              </div>
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl text-gray-600 leading-relaxed">
                  GetThru is committed to making internet access and digital
                  education accessible to all South Africans. We believe that
                  connectivity is a fundamental right, not a luxury.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our affordable internet plans and comprehensive
                  training programs, we're empowering communities to participate
                  fully in the digital economy.
                </p>
              </div>
              <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all duration-300 text-left">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">
                      Affordable Pricing
                    </h4>
                    <p className="text-gray-600">
                      Data plans designed for every budget, ensuring everyone
                      stays connected
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all duration-300 text-left">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">
                      Quality Education
                    </h4>
                    <p className="text-gray-600">
                      Expert-led courses in digital skills to boost your career
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100 hover:shadow-md transition-all duration-300 text-left">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)",
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">
                      Community Impact
                    </h4>
                    <p className="text-gray-600">
                      Building stronger, connected communities across South
                      Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-10">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 mx-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    <Laptop className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-8 text-center text-lg">
                    Join thousands of South Africans who are already connected
                    and empowered through GetThru.
                  </p>
                  <button
                    onClick={onGetStarted}
                    className="w-full text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    Sign Up Now
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    No credit card required • Free trial available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-lg font-semibold mb-3 inline-block px-4 py-1 bg-blue-50 rounded-full">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connecting Communities with
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Tailored Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore how Get Thru's diverse services are designed to bridge the
              digital divide and support community growth. From affordable
              internet access to comprehensive digital skills training.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={<Wifi className="w-8 h-8" />}
              title="Wi-Fi Hotspots"
              description="Providing affordable and reliable internet access in key public areas such as community centers and parks, supporting education, work, and social inclusion."
            />
            <ServiceCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Home Internet Solutions"
              description="Offering flexible and budget-friendly internet packages for households to ensure that everyone stays connected and enjoys seamless online experiences."
            />
            <ServiceCard
              icon={<Laptop className="w-8 h-8" />}
              title="Business Internet Solutions"
              description="Delivering high-speed internet tailored for small and medium enterprises, empowering businesses to succeed in a digital economy with enhanced connectivity."
            />
            <ServiceCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Digital Skills Training"
              description="Providing in-depth training programs to boost digital literacy and advanced skills, enabling individuals to improve their employability and participate fully in the digital economy."
            />
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-10 shadow-lg border border-emerald-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Digital Experience?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Explore our range of services designed to provide affordable
                internet access and enhance digital skills. From public Wi-Fi
                hotspots to comprehensive training programs, we offer solutions
                to connect and empower communities.
              </p>
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform w-full sm:w-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                }}
              >
                Explore All Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-white">
                  10K+
                </div>
                <div className="text-emerald-100 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                  Active Users
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-white">
                  50+
                </div>
                <div className="text-emerald-100 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                  Communities
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-white">
                  5K+
                </div>
                <div className="text-emerald-100 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                  Skills Trained
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-white">
                  24/7
                </div>
                <div className="text-emerald-100 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <div
        id="contact"
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-blue-600 text-sm sm:text-base md:text-lg font-semibold inline-block px-3 sm:px-4 py-1 bg-blue-50 rounded-full mb-3 sm:mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto mb-4 sm:mb-6 px-4">
              Let's Connect and
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2.5">
                Empower Together
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
              Have questions about our services? Want to learn more about
              digital empowerment? We're here to help you get connected.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Email
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm break-words">
                        info@getthru.co.za
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm break-words">
                        support@getthru.co.za
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        WhatsApp
                      </h4>
                      <a
                        href="https://wa.me/27630270385"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 text-xs sm:text-sm font-medium flex items-center gap-1"
                      >
                        063 027 0385
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Office
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        123 Digital Avenue
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Johannesburg, 2000
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">
                      Subject
                    </label>
                    <select
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="internet">Internet Services</option>
                      <option value="training">Digital Skills Training</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us how we can help you..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    Send Message
                  </button>
                  <p className="text-center text-xs sm:text-sm text-gray-500 pt-1">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-lg font-semibold mb-4 inline-block px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Digital Journey
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mt-2">
              Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get connected with affordable internet and gain the skills you need
            to thrive in the digital world. Join our community now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="group text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transform"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
              }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-xl text-lg font-semibold text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white p-8 rounded-3xl border-2 border-emerald-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-emerald-600">
      <div
        className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
        }}
      >
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
