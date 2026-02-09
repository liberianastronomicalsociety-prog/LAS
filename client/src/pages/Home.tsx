import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

/**
 * Design Philosophy: Modern Astronomy Portal
 * - Sophisticated dark theme with deep space aesthetic
 * - Premium typography with clear hierarchy
 * - Smooth animations and refined interactions
 * - Professional spacing and visual balance
 */

interface CarouselSlide {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];
  fallback: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Campus Astronomy Class",
    date: "Ongoing",
    description:
      "Our President, Daniel A. Obajemu, shares his passion for the cosmos by teaching hands-on astronomy classes on campus.",
    images: [
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/Ex%202.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/Ex%201.jpg",
    ],
    fallback: "https://placehold.co/600x400/1a1f3a/9ca3af?text=Campus+Class",
  },
  {
    id: 2,
    title: "IASC Certificates",
    date: "May 19, 2025",
    description:
      "Proudly showcasing certificates earned by our members for their contributions to the International Astronomical Search Collaboration (IASC).",
    images: [
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/C1.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/C2.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/C3.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/C4.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/C5.jpg",
    ],
    fallback: "https://placehold.co/600x400/1a1f3a/9ca3af?text=IASC+Certs",
  },
  {
    id: 3,
    title: "Astrophotography Projects",
    date: "Oct 12, 2025",
    description:
      "Showcasing processed images of Horsehead Nebula, Lagoon Nebula, Heart Nebula, Whirlpool Galaxy, and Andromeda Galaxy.",
    images: [
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/BARNARD%2033_2.png",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/Andonmara%20Galaxy.png",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/Heart%20Nebulae%202.png",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/Lagoon%20Galaxy.png",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/M51_2.png",
    ],
    fallback: "https://placehold.co/600x400/1a1f3a/9ca3af?text=Astrophotography",
  },
  {
    id: 4,
    title: "Outreach in Kakata",
    date: "Oct 20, 2025",
    description:
      "Our outreach expanded to Kakata, Margibi County, engaging students at Booker Washington Institute (BWI).",
    images: [
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/received_2301996913642555.jpeg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/received_829395132782547.jpeg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/received_835182659055931.jpeg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/received_24782856664668488.jpeg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/received_1894301934767661.jpeg",
    ],
    fallback: "https://placehold.co/600x400/1a1f3a/9ca3af?text=Kakata+Outreach",
  },
  {
    id: 5,
    title: "Outreach in Grand Bassa",
    date: "Nov 25, 2025",
    description:
      "Expanding our mission to Grand Bassa County, bringing astronomy education to more young Liberians.",
    images: [
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/IMG_20251125_110138_670%40-655489296.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/IMG_20251125_110226_143%401133313777.jpg",
      "https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/IMG_20251125_110354_320%40-218257970.jpg",
    ],
    fallback: "https://placehold.co/600x400/1a1f3a/9ca3af?text=Grand+Bassa",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
    setCurrentImageIndex(0);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselSlides.length - 1 ? 0 : prev + 1
    );
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    const slide = carouselSlides[currentSlide];
    setCurrentImageIndex((prev) =>
      prev === 0 ? slide.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    const slide = carouselSlides[currentSlide];
    setCurrentImageIndex((prev) =>
      prev === slide.images.length - 1 ? 0 : prev + 1
    );
  };

  const currentSlideData = carouselSlides[currentSlide];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center z-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-3 border-indigo-400/30 border-t-indigo-400 rounded-full animate-spin"></div>
          <p className="text-indigo-300 text-sm font-medium">
            Loading LAS Portal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-indigo-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-3 group">
              <img
                src="https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/LAS%20official%20logo.png"
                alt="LAS Logo"
                className="h-10 w-10 rounded-full ring-2 ring-indigo-400/50 group-hover:ring-indigo-400 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/40x40/1e293b/a5b4fc?text=LAS";
                }}
              />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                LAS
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "about.html" },
                { label: "Activities", href: "portfolio.html" },
                { label: "Team", href: "team.html" },
                { label: "Blog", href: "blog.html" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors duration-200 rounded-lg hover:bg-indigo-500/10"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="login.html"
                className="px-4 py-2 text-sm font-semibold text-indigo-300 border-2 border-indigo-400/50 rounded-full hover:bg-indigo-400/10 hover:border-indigo-400 transition-all duration-300"
              >
                Member Login
              </a>
              <a
                href="#donate"
                className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
              >
                Donate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-indigo-500/20 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-indigo-500/20 pt-4">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "about.html" },
                { label: "Activities", href: "portfolio.html" },
                { label: "Team", href: "team.html" },
                { label: "Blog", href: "blog.html" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="login.html"
                  className="flex-1 px-4 py-2 text-sm font-semibold text-indigo-300 border-2 border-indigo-400/50 rounded-full hover:bg-indigo-400/10 text-center transition-all"
                >
                  Login
                </a>
                <a
                  href="#donate"
                  className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-center transition-all"
                >
                  Donate
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-400/50 rounded-full">
              <p className="text-sm font-semibold text-indigo-300">
                🚀 Unlocking the Cosmos from Liberia
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Liberian Astronomical
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Society
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Promoting astronomy education and engaging young Liberians in
              space science through workshops, outreach programs, and research
              initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="getinvolve.html"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
              >
                Get Involved
              </a>
              <a
                href="#activities"
                className="px-8 py-4 border-2 border-indigo-400/50 text-indigo-300 font-semibold rounded-full hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
              >
                Explore Activities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Carousel Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Our Activities
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our latest projects, outreach programs, and astronomical
              achievements
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/50 text-indigo-300 hover:text-indigo-200 transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/50 text-indigo-300 hover:text-indigo-200 transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Container */}
            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 rounded-2xl border border-indigo-500/20 overflow-hidden backdrop-blur-sm shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Gallery */}
                <div className="relative group">
                  <div className="relative h-96 rounded-xl overflow-hidden bg-slate-900/50">
                    <img
                      key={`${currentSlide}-${currentImageIndex}`}
                      src={
                        currentSlideData.images[currentImageIndex] ||
                        currentSlideData.fallback
                      }
                      alt={`${currentSlideData.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          currentSlideData.fallback;
                      }}
                    />

                    {/* Image Navigation */}
                    {currentSlideData.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {currentSlideData.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? "bg-indigo-400 w-6"
                                  : "bg-white/40 hover:bg-white/60"
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/50 rounded-full mb-4">
                      <p className="text-xs font-semibold text-indigo-300">
                        {currentSlideData.date}
                      </p>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {currentSlideData.title}
                    </h3>

                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {currentSlideData.description}
                    </p>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex gap-2">
                    {carouselSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentSlide(idx);
                          setCurrentImageIndex(0);
                        }}
                        className={`h-1 transition-all ${
                          idx === currentSlide
                            ? "bg-gradient-to-r from-indigo-400 to-purple-400 w-8"
                            : "bg-slate-600 w-2 hover:bg-slate-500"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-indigo-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Members", value: "50+" },
              { label: "Outreach Events", value: "15+" },
              { label: "Students Reached", value: "1000+" },
              { label: "Years Active", value: "3+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Interested in astronomy? Have questions? We'd love to hear from you!
          </p>
          <a
            href="mailto:contact@las.org"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-500/20 bg-slate-950/50 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">LAS</h3>
              <p className="text-slate-400 text-sm">
                Promoting astronomy education across Liberia
              </p>
            </div>
            {[
              {
                title: "Quick Links",
                links: [
                  { label: "About Us", href: "about.html" },
                  { label: "Activities", href: "portfolio.html" },
                  { label: "Blog", href: "blog.html" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Our Team", href: "team.html" },
                  { label: "Get Involved", href: "getinvolve.html" },
                  { label: "President", href: "president.html" },
                ],
              },
              {
                title: "Connect",
                links: [
                  { label: "Email", href: "mailto:contact@las.org" },
                  { label: "Member Login", href: "login.html" },
                  { label: "Donate", href: "#donate" },
                ],
              },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-slate-300 font-semibold mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-indigo-300 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-indigo-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Liberian Astronomical Society. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-4 md:mt-0">
              Unlocking the cosmos from Liberia 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
