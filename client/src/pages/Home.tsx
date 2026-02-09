import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

/**
 * Design Philosophy: Astronomy NGO Portal
 * - Scientific credibility with cosmic inspiration
 * - Teal, cyan, and gold color palette
 * - Professional yet approachable aesthetic
 * - Accessible and inclusive design
 * - Astronomical backgrounds for immersive experience
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
    fallback: "https://placehold.co/600x400/f0f9ff/0d5f5f?text=Campus+Class",
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
    fallback: "https://placehold.co/600x400/f0f9ff/0d5f5f?text=IASC+Certs",
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
    fallback: "https://placehold.co/600x400/f0f9ff/0d5f5f?text=Astrophotography",
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
    fallback: "https://placehold.co/600x400/f0f9ff/0d5f5f?text=Kakata+Outreach",
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
    fallback: "https://placehold.co/600x400/f0f9ff/0d5f5f?text=Grand+Bassa",
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
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-3 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
          <p className="text-teal-700 text-sm font-medium">
            Loading LAS Portal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-teal-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-3 group">
              <img
                src="https://raw.githubusercontent.com/liberianastronomicalsociety-prog/las-web/main/LAS%20official%20logo.png"
                alt="LAS Logo"
                className="h-10 w-10 rounded-full ring-2 ring-teal-400/50 group-hover:ring-teal-500 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/40x40/f0f9ff/0d5f5f?text=LAS";
                }}
              />
              <span className="text-xl font-bold text-teal-700">LAS</span>
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
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors duration-200 rounded-lg hover:bg-teal-50"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="login.html"
                className="px-4 py-2 text-sm font-semibold text-teal-600 border-2 border-teal-400 rounded-full hover:bg-teal-50 hover:border-teal-600 transition-all duration-300"
              >
                Member Login
              </a>
              <a
                href="#donate"
                className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                Donate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-teal-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-teal-200 pt-4">
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
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="login.html"
                  className="flex-1 px-4 py-2 text-sm font-semibold text-teal-600 border-2 border-teal-400 rounded-full text-center hover:bg-teal-50 transition-all"
                >
                  Login
                </a>
                <a
                  href="#donate"
                  className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-center transition-all"
                >
                  Donate
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Astronomical Background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/32ZuFWbSfwVMisoEWJT3nk/sandbox/Tdz799sqIzgcYWPPqqX3C4-img-1_1770660769000_na1fn_aGVyby1zcGFjZS1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMzJadUZXYlNmd1ZNaXNvRVdKVDNuay9zYW5kYm94L1Rkejc5OXNxSXpnY1lXUFBxcVgzQzQtaW1nLTFfMTc3MDY2MDc2OTAwMF9uYTFmbl9hR1Z5YnkxemNHRmpaUzFpWVdOclozSnZkVzVrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=W8hy3824mIT1tFOCSmnTPlQKBjdmsfAgOAhP25fucPqdSMDTtabDR6hNyhYGyhmf~BiLl6oAnL2nhZfBC7gBrCZ~qBccjd6iGjXgzFzh9A63cc0BpEyXnNvVH8ikKZe2Uu~7VCg60bMknOdgCZ65r7V6xINTff7FLfCT7mF0MAWCiSpN0MZLAagDf~6y-QPNL9~tng6sbNrAHVyYElnV2mR3xFD1UhW1PhGjQnt-oHeujL-ODH4qPSc-EeP8jnJ3ONbXfbFJRf1OdeR2QhXHvWLKdrtTVpU12e0dHJSyn-NcMPqHNXobDJxHo-K7Q6okCLHiwD8hO9C22xNOEGMtSA__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-cyan-900/30 to-teal-900/50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-cyan-300/50 rounded-full">
              <p className="text-sm font-semibold text-white">
                🚀 Unlocking the Cosmos from Liberia
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Liberian Astronomical
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-200 via-cyan-100 to-orange-300 bg-clip-text">
                Society
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Promoting astronomy education and engaging young Liberians in
              space science through workshops, outreach programs, and research
              initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="getinvolve.html"
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Get Involved
              </a>
              <a
                href="#activities"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Explore Activities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Carousel Section with Pattern Background */}
      <section
        id="activities"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/32ZuFWbSfwVMisoEWJT3nk/sandbox/Tdz799sqIzgcYWPPqqX3C4-img-2_1770660762000_na1fn_c2VjdGlvbi1zcGFjZS1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMzJadUZXYlNmd1ZNaXNvRVdKVDNuay9zYW5kYm94L1Rkejc5OXNxSXpnY1lXUFBxcVgzQzQtaW1nLTJfMTc3MDY2MDc2MjAwMF9uYTFmbl9jMlZqZEdsdmJpMXpjR0ZqWlMxd1lYUjBaWEp1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UzU9oRAq7s8b7grcKDDvF6O540EwgGSKVlvDz1z-seGfel67OXQ8~i2pbpXTGBB1ZJjp1yHObBT1Yje9yGVOadQzUU25DhoteZMRMxzQXePG85uFJhoTjHGHMZ9Fo12YzUhY7IV18MvFdb-p224Eo-STjRNFiEtL8LbUsfcPyxUcN34l0Oe0h6GzNJh3DwB4UlR09aRGlLz4WpFcnk5kn2e8vCV6b9~MOFPj3QZ1zLVSquwFh02EieqIDHcMmR-GMdxGOgeLeudpcTXIBJFt8DObTTF3fT~Bkd-OY69yUNFWeyYSIrh1ikwp3uUzltXWWMMrdbG9hibj6H6Hq~GAlA__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Our Activities
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore our latest projects, outreach programs, and astronomical
              achievements
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-teal-100 hover:bg-teal-200 border border-teal-400 text-teal-700 hover:text-teal-900 transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-teal-100 hover:bg-teal-200 border border-teal-400 text-teal-700 hover:text-teal-900 transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Container */}
            <div className="bg-white rounded-2xl border border-teal-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Gallery */}
                <div className="relative group">
                  <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100">
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
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-teal-700 transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-teal-700 transition-all"
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
                                  ? "bg-teal-600 w-6"
                                  : "bg-white/60 hover:bg-white"
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
                    <div className="inline-block px-3 py-1 bg-orange-100 border border-orange-300 rounded-full mb-4">
                      <p className="text-xs font-semibold text-orange-700">
                        {currentSlideData.date}
                      </p>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {currentSlideData.title}
                    </h3>

                    <p className="text-slate-700 text-lg leading-relaxed mb-6">
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
                            ? "bg-gradient-to-r from-teal-600 to-cyan-500 w-8"
                            : "bg-slate-300 w-2 hover:bg-slate-400"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50">
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
                className="text-center p-6 rounded-xl bg-white border border-teal-200 hover:border-teal-400 hover:shadow-md transition-all duration-300"
              >
                <p className="text-4xl font-bold text-teal-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Get in Touch
          </h2>
          <p className="text-slate-700 text-lg mb-8">
            Interested in astronomy? Have questions? We'd love to hear from you!
          </p>
          <a
            href="mailto:contact@las.org"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer with Space Gradient Background */}
      <footer
        className="border-t border-teal-200 py-12 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/32ZuFWbSfwVMisoEWJT3nk/sandbox/Tdz799sqIzgcYWPPqqX3C4-img-3_1770660766000_na1fn_Zm9vdGVyLXNwYWNlLWdyYWRpZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMzJadUZXYlNmd1ZNaXNvRVdKVDNuay9zYW5kYm94L1Rkejc5OXNxSXpnY1lXUFBxcVgzQzQtaW1nLTNfMTc3MDY2MDc2NjAwMF9uYTFmbl9abTl2ZEdWeUxYTndZV05sTFdkeVlXUnBaVzUwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=g8W63I03CmapG~WUlysARxfH00cZqG~loev43A2JG4alMqIqL-ad5DWGZv53H3mLBBvXCwgh0t6e9NsL5z9IISIQmiZV-Oy5r0Aib0aylKjHUQHntYazIkge7L8BEufnne-6d3jvQZ4BExJvhcrviKGfx0F1trwH~p80ZpOKjp4KsdcFp33ZXC4Kicu~FTj7EJj-14RdXtCqPr6RBu4BQwSKSKx6YX~zYWnliQiLwUgLti~GeywUgnu32xQQYizSDset8ltOzJ~YBN4bBwjLAwJuMys0WbDVfJFkk5Z2O~oYdxxewDgDReUVkDHOqsEA7tb7LmCcnl40vk-pGNjekA__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-950/85"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">LAS</h3>
              <p className="text-slate-300 text-sm">
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
                <h4 className="text-slate-200 font-semibold mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
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
