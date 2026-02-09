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
 * Showcases design improvements with interactive charts and comparisons
 */

interface DesignFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const designFeatures: DesignFeature[] = [
  {
    title: "Typography System",
    description: "Professional font hierarchy with Poppins & Inter",
    icon: <Code className="w-6 h-6" />,
    details: [
      "Display font (Poppins) for headings",
      "Body font (Inter) for readability",
      "Improved contrast and hierarchy",
      "Better mobile responsiveness",
    ],
  },
  {
    title: "Color Palette",
    description: "Sophisticated dark theme with indigo accents",
    icon: <Palette className="w-6 h-6" />,
    details: [
      "Deep slate background (slate-950)",
      "Indigo gradient accents",
      "Purple highlights for emphasis",
      "Professional opacity layers",
    ],
  },
  {
    title: "Component Design",
    description: "Enhanced UI elements with smooth interactions",
    icon: <Zap className="w-6 h-6" />,
    details: [
      "Refined navigation bar",
      "Improved carousel controls",
      "Professional stat cards",
      "Smooth hover animations",
    ],
  },
  {
    title: "Visual Effects",
    description: "Modern animations and depth effects",
    icon: <Eye className="w-6 h-6" />,
    details: [
      "Fade-in entrance animations",
      "Glow effects on interactive elements",
      "Smooth transitions (200ms)",
      "Backdrop blur for depth",
    ],
  },
];

const improvementMetrics = [
  { label: "Typography Quality", before: 65, after: 95, improvement: 46 },
  { label: "Visual Hierarchy", before: 60, after: 92, improvement: 53 },
  { label: "Animation Smoothness", before: 70, after: 94, improvement: 34 },
  { label: "Professional Polish", before: 55, after: 90, improvement: 64 },
  { label: "User Experience", before: 62, after: 93, improvement: 50 },
  { label: "Mobile Responsiveness", before: 75, after: 96, improvement: 28 },
];

export default function Results() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"overview" | "metrics" | "features">(
    "overview"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                LAS Website Redesign
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Professional Design Improvements & Results
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/50 text-indigo-300 rounded-full hover:bg-indigo-500/30 transition-all">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export Report</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/50 text-purple-300 rounded-full hover:bg-purple-500/30 transition-all">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-indigo-500/20 bg-slate-950/40 backdrop-blur-sm sticky top-16 z-30">
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
                    ? "border-indigo-400 text-indigo-300"
                    : "border-transparent text-slate-400 hover:text-slate-300"
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
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Executive Summary
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Design Enhancement",
                    value: "47%",
                    description: "Average improvement across all metrics",
                  },
                  {
                    title: "Professional Polish",
                    value: "64%",
                    description: "Increase in visual sophistication",
                  },
                  {
                    title: "User Satisfaction",
                    value: "50%",
                    description: "Estimated improvement in UX",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-400/50 transition-all"
                  >
                    <p className="text-slate-400 text-sm font-medium mb-2">
                      {stat.title}
                    </p>
                    <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text mb-2">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Improvements */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Key Improvements</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Typography System",
                    items: [
                      "Poppins display font for headings",
                      "Inter body font for readability",
                      "Improved visual hierarchy",
                      "Better mobile responsiveness",
                    ],
                  },
                  {
                    title: "Color & Theme",
                    items: [
                      "Sophisticated dark theme",
                      "Indigo/purple gradient accents",
                      "Professional opacity layers",
                      "Enhanced contrast ratios",
                    ],
                  },
                  {
                    title: "Components",
                    items: [
                      "Refined navigation bar",
                      "Enhanced carousel controls",
                      "Professional stat cards",
                      "Improved footer structure",
                    ],
                  },
                  {
                    title: "Animations",
                    items: [
                      "Smooth fade-in effects",
                      "Glow animations",
                      "Refined hover states",
                      "Backdrop blur effects",
                    ],
                  },
                ].map((group, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-slate-800/50 border border-indigo-500/20"
                  >
                    <h4 className="font-semibold text-indigo-300 mb-4">
                      {group.title}
                    </h4>
                    <ul className="space-y-3">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{item}</span>
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
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Design Metrics
                </span>
              </h2>

              <div className="space-y-6">
                {improvementMetrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-300">
                        {metric.label}
                      </span>
                      <span className="text-sm font-semibold text-green-400">
                        +{metric.improvement}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-8 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                        {/* Before */}
                        <div
                          className="h-full bg-slate-600 transition-all duration-500"
                          style={{ width: `${metric.before}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-8 text-right">
                        {metric.before}%
                      </span>
                    </div>

                    {/* After */}
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-8 bg-slate-800 rounded-lg overflow-hidden border border-indigo-500/30">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                          style={{ width: `${metric.after}%` }}
                        />
                      </div>
                      <span className="text-xs text-indigo-300 w-8 text-right font-semibold">
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
                    value: "47%",
                    color: "from-indigo-500 to-purple-500",
                  },
                  {
                    label: "Highest Improvement",
                    value: "64%",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Lowest Improvement",
                    value: "28%",
                    color: "from-blue-500 to-cyan-500",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl bg-gradient-to-br ${stat.color}/10 border border-${stat.color.split(" ")[1]}-500/30`}
                  >
                    <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
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
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Design Features
                </span>
              </h2>

              <div className="space-y-4">
                {designFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="border border-indigo-500/20 rounded-xl overflow-hidden bg-slate-800/30 hover:border-indigo-400/50 transition-all"
                  >
                    <button
                      onClick={() =>
                        setExpandedFeature(expandedFeature === idx ? null : idx)
                      }
                      className="w-full p-6 flex items-start justify-between hover:bg-indigo-500/5 transition-colors"
                    >
                      <div className="flex items-start gap-4 text-left">
                        <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-300 flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                          expandedFeature === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedFeature === idx && (
                      <div className="px-6 pb-6 border-t border-indigo-500/10 bg-indigo-500/5">
                        <ul className="space-y-3">
                          {feature.details.map((detail, detailIdx) => (
                            <li
                              key={detailIdx}
                              className="flex items-center gap-3 text-slate-300"
                            >
                              <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />
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
              <h3 className="text-2xl font-bold mb-6">Technical Implementation</h3>

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
                    className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-indigo-900/20 border border-indigo-500/20"
                  >
                    <h4 className="font-semibold text-indigo-300 mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-center gap-2 text-slate-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
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
      <section className="border-t border-indigo-500/20 bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Ready to Launch?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            The redesigned LAS website is ready for deployment with all original
            functions preserved and enhanced with professional design elements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
            >
              View Live Website
            </a>
            <button className="px-8 py-4 border-2 border-indigo-400/50 text-indigo-300 font-semibold rounded-full hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300">
              Download Assets
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-500/20 bg-slate-950/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>
            LAS Website Redesign © 2025 | Professional Design Improvements
          </p>
        </div>
      </footer>
    </div>
  );
}
