import { Metadata } from 'next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ViewDeletedReddit - Free Tool to View Deleted Reddit Posts',
  description: 'Learn about ViewDeletedReddit, the free tool that helps you view deleted Reddit posts and comments. Our mission, technology, and commitment to user privacy.',
  openGraph: {
    title: 'About ViewDeletedReddit - Free Tool to View Deleted Reddit Posts',
    description: 'Learn about our mission to help users recover deleted Reddit content.',
    url: 'https://viewdeletedreddit.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            About ViewDeletedReddit
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            We're on a mission to preserve and provide access to deleted Reddit content, 
            helping users recover valuable discussions and information.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
          <p className="text-white/80 mb-6">
            Reddit is home to millions of valuable discussions, insights, and communities. Unfortunately, 
            content gets deleted for various reasons - sometimes taking important information with it. 
            ViewDeletedReddit exists to help users recover this lost content when it's needed most.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">How We Work</h2>
          <p className="text-white/80 mb-6">
            Our platform aggregates data from multiple public archives to provide the most comprehensive 
            view of deleted Reddit content:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">📚 Archive Integration</h3>
              <p className="text-white/80">
                We search multiple public archives including Pushshift and Wayback Machine 
                to find deleted content.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-400">🔍 Smart Search</h3>
              <p className="text-white/80">
                Our intelligent search system can handle both Reddit URLs and usernames, 
                automatically finding the best results.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">⚡ Real-time Results</h3>
              <p className="text-white/80">
                Get instant results without waiting. Our system queries multiple sources 
                simultaneously for fast responses.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">🏷️ Source Attribution</h3>
              <p className="text-white/80">
                Every result shows its source, so you know exactly where the archived 
                content came from.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Our Principles</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">🆓 Always Free</h3>
              <p className="text-white/80">
                ViewDeletedReddit will always be free to use. We believe access to public 
                information shouldn't be behind a paywall.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">🔒 Privacy Focused</h3>
              <p className="text-white/80">
                We don't track users, store search queries, or collect personal data. 
                Your searches are private and anonymous.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">📖 Transparency</h3>
              <p className="text-white/80">
                We're open about our methods and sources. All archived content is clearly 
                labeled with its origin and timestamp.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">⚖️ Ethical Use</h3>
              <p className="text-white/80">
                We encourage responsible use of our tool and respect for user privacy, 
                even when content is publicly archived.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Technology</h2>
          <p className="text-white/80 mb-6">
            ViewDeletedReddit is built with modern web technologies to ensure fast, 
            reliable performance:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li><strong>Next.js:</strong> For optimal SEO and performance</li>
            <li><strong>Real-time API:</strong> Instant search across multiple archives</li>
            <li><strong>Responsive Design:</strong> Works perfectly on all devices</li>
            <li><strong>Zero Storage:</strong> We don't store any Reddit content ourselves</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Contact & Support</h2>
          <p className="text-white/80 mb-6">
            Have questions, suggestions, or need help? We'd love to hear from you:
          </p>
          
          <div className="bg-white/5 rounded-lg p-6">
            <div className="space-y-3">
              <p className="text-white/80">
                <strong>Email:</strong> <a href="mailto:hello@viewdeletedreddit.com" className="text-purple-400 hover:text-purple-300">hello@viewdeletedreddit.com</a>
              </p>
              <p className="text-white/80">
                <strong>GitHub:</strong> <a href="https://github.com/viewdeletedreddit" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">github.com/viewdeletedreddit</a>
              </p>
              <p className="text-white/80">
                <strong>Response Time:</strong> We typically respond within 24 hours
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6">
              Try ViewDeletedReddit now and recover deleted Reddit content instantly.
            </p>
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
            >
              Start Searching →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
