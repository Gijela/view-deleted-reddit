import { Metadata } from 'next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ultimate Guide: How to View Deleted Reddit Posts in 2025 | ViewDeletedReddit',
  description: 'Complete guide on how to view deleted Reddit posts and comments. Learn the best methods, tools, and techniques to recover deleted Reddit content in 2025.',
  keywords: [
    'how to view deleted reddit posts',
    'see deleted reddit comments',
    'reddit deleted content guide',
    'undelete reddit posts',
    'reddit archive guide',
    'pushshift reddit guide',
    'wayback machine reddit'
  ],
  openGraph: {
    title: 'Ultimate Guide: How to View Deleted Reddit Posts in 2025',
    description: 'Complete guide on viewing deleted Reddit posts and comments. Best methods and tools.',
    url: 'https://viewdeletedreddit.com/guide',
  },
};

export default function GuidePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            The Ultimate 2025 Guide: How To View Deleted Reddit Posts
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Discover the most effective methods to recover and view deleted Reddit posts and comments. 
            This comprehensive guide covers all available tools and techniques.
          </p>
          <div className="mt-6 text-sm text-white/60">
            Last updated: January 2025 • 10 min read
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why Do Reddit Posts Get Deleted?</h2>
          <p className="text-white/80 mb-6">
            Before diving into recovery methods, it's important to understand why Reddit content gets deleted:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li><strong>User deletion:</strong> Users delete their own posts or comments</li>
            <li><strong>Moderator removal:</strong> Subreddit moderators remove content that violates rules</li>
            <li><strong>Admin removal:</strong> Reddit administrators remove content for policy violations</li>
            <li><strong>Automated removal:</strong> Bots and filters automatically remove spam or rule-breaking content</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Method 1: Using ViewDeletedReddit (Recommended)</h2>
          <p className="text-white/80 mb-6">
            Our tool is the easiest and most comprehensive way to view deleted Reddit content:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-white/80">
            <li>Go to <Link href="/" className="text-purple-400 hover:text-purple-300">ViewDeletedReddit.com</Link></li>
            <li>Enter either a Reddit URL or username in the search box</li>
            <li>Click "Search" to find archived content</li>
            <li>Browse through recovered posts and comments with source attribution</li>
          </ol>
          
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">✨ Pro Tip</h3>
            <p className="text-white/80">
              Our tool searches multiple archives simultaneously, including Pushshift and Wayback Machine, 
              giving you the best chance of finding deleted content.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Method 2: Manual Archive Searching</h2>
          <p className="text-white/80 mb-6">
            For advanced users who want to search archives manually:
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Pushshift API</h3>
          <p className="text-white/80 mb-4">
            Pushshift was the most comprehensive Reddit archive, though it's currently experiencing issues:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>Archived Reddit data from 2005 to 2023</li>
            <li>Searchable by username, subreddit, or keywords</li>
            <li>Currently facing access limitations</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Wayback Machine</h3>
          <p className="text-white/80 mb-4">
            The Internet Archive's Wayback Machine occasionally captures Reddit pages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>Visit <code className="bg-white/10 px-2 py-1 rounded">web.archive.org</code></li>
            <li>Enter the Reddit URL you want to check</li>
            <li>Browse available snapshots by date</li>
            <li>Limited coverage compared to specialized tools</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">What You Can Recover</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-400">✅ Usually Recoverable</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Post titles and content</li>
                <li>• Comment text</li>
                <li>• Author usernames</li>
                <li>• Timestamps and scores</li>
                <li>• Subreddit information</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-400">❌ Rarely Recoverable</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Images and videos</li>
                <li>• Real-time edits</li>
                <li>• Very recent deletions</li>
                <li>• Private subreddit content</li>
                <li>• Shadowbanned content</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Legal and Ethical Considerations</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-3 text-yellow-300">⚠️ Important Notice</h3>
            <p className="text-white/80 mb-4">
              While viewing deleted Reddit content is generally legal, please consider:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Respect user privacy and intentions</li>
              <li>Don't use recovered content for harassment</li>
              <li>Be aware of copyright implications</li>
              <li>Follow your local laws and regulations</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Can I recover my own deleted posts?</h3>
              <p className="text-white/80">
                Yes! Simply enter your username in our search tool to find your deleted posts and comments.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">How far back can I search?</h3>
              <p className="text-white/80">
                Our archives go back to 2005, though coverage varies by time period and subreddit.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Is this service free?</h3>
              <p className="text-white/80">
                Yes, ViewDeletedReddit is completely free to use with no registration required.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Get Started Now</h2>
          <p className="text-white/80 mb-6">
            Ready to recover deleted Reddit content? Try our tool now:
          </p>
          
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-8 my-8">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
            >
              Start Searching Deleted Reddit Content →
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
