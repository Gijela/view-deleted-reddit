import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Reddit Archive Tools Comparison: Pushshift vs Wayback Machine vs Others - ViewDeletedReddit",
  description: "Compare the best Reddit archiving tools including Pushshift, Wayback Machine, and ViewDeletedReddit. Learn which tool works best for different scenarios.",
  keywords: "reddit archive tools, pushshift, wayback machine, reddit recovery tools, deleted reddit posts tools",
  openGraph: {
    title: "Reddit Archive Tools Comparison: Pushshift vs Wayback Machine vs Others",
    description: "Compare the best Reddit archiving tools and learn which one works best for different types of content recovery.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Archive Tools Comparison: Pushshift vs Wayback Machine vs Others",
    description: "Compare the best Reddit archiving tools and learn which one works best for different types of content recovery.",
  },
};

const tools = [
  {
    name: "ViewDeletedReddit",
    description: "Our comprehensive tool that combines multiple archive sources",
    pros: [
      "Combines multiple archive sources",
      "User-friendly interface",
      "Real-time search",
      "Source attribution",
      "No technical knowledge required"
    ],
    cons: [
      "Newer tool with growing database",
      "Dependent on source availability"
    ],
    bestFor: "General users who want the easiest and most comprehensive solution",
    rating: 5,
    free: true,
    url: "/"
  },
  {
    name: "Pushshift",
    description: "The most comprehensive Reddit archive with historical data from 2005",
    pros: [
      "Most comprehensive archive",
      "Historical data from 2005",
      "API access available",
      "Real-time updates (when operational)",
      "Advanced search capabilities"
    ],
    cons: [
      "Technical knowledge required",
      "API limitations",
      "Occasional downtime",
      "Complex for casual users"
    ],
    bestFor: "Researchers, developers, and power users who need comprehensive data",
    rating: 4,
    free: true,
    url: "https://pushshift.io"
  },
  {
    name: "Wayback Machine",
    description: "Internet Archive's tool for viewing historical snapshots of web pages",
    pros: [
      "Reliable and stable",
      "Long history of operation",
      "Captures full page context",
      "Free and accessible",
      "No rate limits"
    ],
    cons: [
      "Limited Reddit coverage",
      "Snapshot-based (not real-time)",
      "May miss recent content",
      "Requires manual navigation"
    ],
    bestFor: "Viewing specific posts with full context and historical perspective",
    rating: 3,
    free: true,
    url: "https://web.archive.org"
  },
  {
    name: "Unddit (formerly Removeddit)",
    description: "Browser-based tool for viewing removed Reddit content",
    pros: [
      "Simple to use",
      "Browser-based",
      "Shows removal reasons",
      "Good for recent content"
    ],
    cons: [
      "Limited historical data",
      "Dependent on external APIs",
      "Inconsistent availability",
      "Limited search capabilities"
    ],
    bestFor: "Quick checks of recently removed content",
    rating: 3,
    free: true,
    url: "https://unddit.com"
  }
];

export default function ToolsComparisonPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">
        {/* Article Header */}
        <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
                  ← Back to Blog
                </Link>
                <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full">
                  Tools
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Reddit Archive Tools: Complete Comparison Guide
              </h1>
              <div className="flex items-center gap-6 text-white/60 mb-8">
                <span>June 28, 2024</span>
                <span>6 min read</span>
                <span>Tool Comparison</span>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                Compare the best Reddit archiving tools and learn which one works best for different types of content recovery. We'll help you choose the right tool for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Quick Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white/5 border border-white/10 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 font-semibold">Tool</th>
                      <th className="text-center p-4 font-semibold">Ease of Use</th>
                      <th className="text-center p-4 font-semibold">Coverage</th>
                      <th className="text-center p-4 font-semibold">Speed</th>
                      <th className="text-center p-4 font-semibold">Free</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tools.map((tool, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="p-4 font-medium">{tool.name}</td>
                        <td className="text-center p-4">
                          <div className="flex justify-center">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}>★</span>
                            ))}
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex justify-center">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}>★</span>
                            ))}
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="flex justify-center">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}>★</span>
                            ))}
                          </div>
                        </td>
                        <td className="text-center p-4">
                          {tool.free ? (
                            <span className="text-green-400">✓</span>
                          ) : (
                            <span className="text-red-400">✗</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Tool Reviews */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Detailed Tool Reviews</h2>
              
              <div className="space-y-12">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                        <p className="text-white/70">{tool.description}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}>★</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">✓ Pros</h4>
                        <ul className="space-y-2">
                          {tool.pros.map((pro, i) => (
                            <li key={i} className="text-white/80 text-sm">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-3">✗ Cons</h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="text-white/80 text-sm">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-purple-300 mb-2">Best For:</h4>
                      <p className="text-white/80 text-sm">{tool.bestFor}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 text-xs rounded-full ${tool.free ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                          {tool.free ? 'Free' : 'Paid'}
                        </span>
                      </div>
                      <Link 
                        href={tool.url}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                        target={tool.url.startsWith('http') ? '_blank' : '_self'}
                        rel={tool.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {tool.name === 'ViewDeletedReddit' ? 'Try Now' : 'Visit Site'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our Recommendations</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-300">🏆 Best Overall</h3>
                  <p className="text-white/80 mb-4">
                    <strong>ViewDeletedReddit</strong> - Combines the best of all tools with an easy-to-use interface.
                  </p>
                  <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
                    Try it now →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-green-300">🔬 Best for Research</h3>
                  <p className="text-white/80 mb-4">
                    <strong>Pushshift</strong> - Most comprehensive data for academic and professional research.
                  </p>
                  <a href="https://pushshift.io" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">
                    Learn more →
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-300">📚 Best for Context</h3>
                  <p className="text-white/80 mb-4">
                    <strong>Wayback Machine</strong> - See full page context and historical perspective.
                  </p>
                  <a href="https://web.archive.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                    Visit site →
                  </a>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-yellow-300 font-semibold mb-4">💡 Pro Tip</h3>
                <p className="text-white/80">
                  For the best results, try multiple tools. Different archives may have different content, and combining results gives you the most comprehensive view of deleted Reddit content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
