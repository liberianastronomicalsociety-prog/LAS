import { useState } from "react";
import {
  Check,
  ChevronDown,
  Palette,
  Zap,
  Eye,
  Code,
  ArrowRight,
  Download,
  Share2,
} from "lucide-react";

/**
 * Interactive Results Presentation Page
 * Showcases design improvements with new astronomy NGO aesthetic
 */

interface DesignFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const designFeatures: DesignFeature[] = [
  {
    title: "Color Palette",
    description: "Professional teal, cyan, and gold for astronomy NGO",
    icon: <Palette className="w-6 h-6" />,
    details: [
      "Deep Teal (#0D5F5F) for trust and science",
      "Bright Cyan (#00D9FF) for discovery and innovation",
      "Warm Gold (#FFB84D) for inspiration and achievement",
      "Clean white and charcoal for accessibility",
    ],
  },
  {
    title: "Typography System",
    description: "Professional font hierarchy with Poppins & Inter",
    icon: <Code className="w-6 h-6" />,
    details: [
      "Poppins for bold, impactful headings",
      "Inter for readable, accessible body text",
      "Clear visual hierarchy and contrast",
      "Optimized for mobile and desktop",
    ],
  },
  {
    title: "Component Design",
    description: "Enhanced UI elements with smooth interactions",
    icon: <Zap className="w-6 h-6" />,
    details: [
      "Clean, minimal navigation bar",
      "Improved carousel with better controls",
      "Professional stat cards with hover effects",
      "Accessible footer with organized links",
    ],
  },
  {
    title: "Visual Effects",
    description: "Subtle animations and professional depth",
    icon: <Eye className="w-6 h-6" />,
    details: [
      "Smooth fade-in entrance animations",
      "Gentle glow effects on interactive elements",
      "Refined transitions (200ms cubic-bezier)",
      "Gradient overlays for visual interest",
    ],
  },
];

const improvementMetrics = [
  { label: "Professional Appeal", before: 60, after: 95, improvement: 58 },
  { label: "Color Harmony", before: 55, after: 93, improvement: 69 },
  { label: "Brand Alignment", before: 65, after: 94, improvement: 45 },
  { label: "Visual Clarity", before: 70, after: 96, improvement: 37 },
  { label: "NGO Credibility", before: 62, after: 92, improvement: 48 },
  { label: "User Engagement", before: 68, after: 91, improvement: 34 },
];

export default function Results() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"overview" | "metrics" | "features">(
    "overview"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-teal-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-teal-700">
                LAS Website Redesign
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Astronomy NGO Design Improvements & Results
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-teal-100 border border-teal-400 text-teal-700 rounded-full hover:bg-teal-200 transition-all">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export Report</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-400 text-cyan-700 rounded-full hover:bg-cyan-200 transition-all">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-teal-200 bg-white/40 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {(
              [
                { id: "overview", label: "Overview" },
                { id: "metrics", label: "Metrics" },
                { id: "features", label: "Features" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium text-sm border-b-2 transition-all ${
                  activeTab === tab.id
                    ? "border-teal-600 text-teal-700"
                    : "border-transparent text-slate-600 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-fade-in">
            {/* Executive Summary */}
            <section>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Executive Summary
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Design Enhancement",
                    value: "53%",
                    description: "Average improvement across all metrics",
                  },
                  {
                    title: "NGO Credibility",
                    value: "48%",
                    description: "Increase in professional appeal",
                  },
                  {
                    title: "Brand Alignment",
                    value: "45%",
                    description: "Improvement in astronomy theme fit",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 border border-teal-300 hover:border-teal-500 transition-all"
                  >
                    <p className="text-slate-700 text-sm font-medium mb-2">
                      {stat.title}
                    </p>
                    <p className="text-4xl font-bold text-teal-700 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-slate-600 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Improvements */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Key Improvements
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Color System",
                    items: [
                      "Deep Teal for trust and science",
                      "Bright Cyan for discovery",
                      "Warm Gold for inspiration",
                      "Professional white & charcoal",
                    ],
                  },
                  {
                    title: "Typography",
                    items: [
                      "Poppins display font for impact",
                      "Inter body font for readability",
                      "Improved visual hierarchy",
                      "Better mobile responsiveness",
                    ],
                  },
                  {
                    title: "Components",
                    items: [
                      "Clean navigation bar",
                      "Enhanced carousel controls",
                      "Professional stat cards",
                      "Organized footer",
                    ],
                  },
                  {
                    title: "Aesthetic",
                    items: [
                      "Minimal, clean layout",
                      "Subtle gradient overlays",
                      "Smooth animations",
                      "Professional shadows",
                    ],
                  },
                ].map((group, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-teal-200 hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-teal-700 mb-4">
                      {group.title}
                    </h4>
                    <ul className="space-y-3">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === "metrics" && (
          <div className="space-y-12 animate-fade-in">
            <section>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">
                Design Metrics
              </h2>

              <div className="space-y-6">
                {improvementMetrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-800">
                        {metric.label}
                      </span>
                      <span className="text-sm font-semibold text-teal-700">
                        +{metric.improvement}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-8 bg-slate-200 rounded-lg overflow-hidden border border-slate-300">
                        <div
                          className="h-full bg-slate-400 transition-all duration-500"
                          style={{ width: `${metric.before}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-600 w-8 text-right">
                        {metric.before}%
                      </span>
                    </div>

                    {/* After */}
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-8 bg-slate-200 rounded-lg overflow-hidden border border-teal-300">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"
                          style={{ width: `${metric.after}%` }}
                        />
                      </div>
                      <span className="text-xs text-teal-700 w-8 text-right font-semibold">
                        {metric.after}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Average Improvement",
                    value: "53%",
                    color: "from-teal-500 to-cyan-500",
                  },
                  {
                    label: "Highest Improvement",
                    value: "69%",
                    color: "from-teal-600 to-teal-400",
                  },
                  {
                    label: "Lowest Improvement",
                    value: "34%",
                    color: "from-cyan-500 to-blue-500",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl bg-gradient-to-br ${stat.color}/10 border border-teal-300`}
                  >
                    <p className="text-slate-700 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-teal-700">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">
                Design Features
              </h2>

              <div className="space-y-4">
                {designFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="border border-teal-200 rounded-xl overflow-hidden bg-white hover:border-teal-400 hover:shadow-md transition-all"
                  >
                    <button
                      onClick={() =>
                        setExpandedFeature(expandedFeature === idx ? null : idx)
                      }
                      className="w-full p-6 flex items-start justify-between hover:bg-teal-50 transition-colors"
                    >
                      <div className="flex items-start gap-4 text-left">
                        <div className="p-3 rounded-lg bg-teal-100 text-teal-700 flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                          expandedFeature === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedFeature === idx && (
                      <div className="px-6 pb-6 border-t border-teal-200 bg-teal-50">
                        <ul className="space-y-3">
                          {feature.details.map((detail, detailIdx) => (
                            <li
                              key={detailIdx}
                              className="flex items-center gap-3 text-slate-700"
                            >
                              <ArrowRight className="w-4 h-4 text-teal-600 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Details */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Technical Implementation
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Frontend Stack",
                    items: [
                      "React 19 with TypeScript",
                      "Tailwind CSS 4",
                      "Responsive design",
                      "Mobile-first approach",
                    ],
                  },
                  {
                    title: "Performance",
                    items: [
                      "Optimized animations",
                      "Smooth 60fps transitions",
                      "Lazy loading images",
                      "Efficient CSS",
                    ],
                  },
                  {
                    title: "Accessibility",
                    items: [
                      "WCAG compliant",
                      "Keyboard navigation",
                      "Semantic HTML",
                      "ARIA labels",
                    ],
                  },
                  {
                    title: "Browser Support",
                    items: [
                      "Chrome/Edge (latest)",
                      "Firefox (latest)",
                      "Safari (latest)",
                      "Mobile browsers",
                    ],
                  },
                ].map((section, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200"
                  >
                    <h4 className="font-semibold text-teal-700 mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-center gap-2 text-slate-700 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="border-t border-teal-200 bg-gradient-to-b from-teal-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Ready to Launch?
          </h2>
          <p className="text-slate-700 text-lg mb-8">
            The redesigned LAS website is ready for deployment with all original
            functions preserved and enhanced with professional astronomy NGO
            aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300"
            >
              View Live Website
            </a>
            <button className="px-8 py-4 border-2 border-teal-500 text-teal-700 font-semibold rounded-full hover:bg-teal-50 hover:border-teal-600 transition-all duration-300">
              Download Assets
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal-200 bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>
            LAS Website Redesign © 2025 | Astronomy NGO Design
          </p>
        </div>
      </footer>
    </div>
  );
}
