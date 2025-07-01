import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Blog & Resources - ViewDeletedReddit",
  description: "Learn how to view deleted Reddit posts and comments with our comprehensive guides, tips, and tutorials.",
  keywords: "deleted reddit posts, reddit archive, reddit recovery, reddit tips, reddit guides",
  openGraph: {
    title: "Blog & Resources - ViewDeletedReddit",
    description: "Learn how to view deleted Reddit posts and comments with our comprehensive guides, tips, and tutorials.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Resources - ViewDeletedReddit",
    description: "Learn how to view deleted Reddit posts and comments with our comprehensive guides, tips, and tutorials.",
  },
};

const blogPosts = [
  {
    id: "ultimate-guide-view-deleted-reddit-posts",
    title: "Ultimate Guide to View Deleted Reddit Posts in 2024",
    excerpt: "Discover the most effective methods to recover and view deleted Reddit posts and comments using various tools and techniques.",
    date: "2024-07-01",
    readTime: "8 min read",
    category: "Guide",
    featured: true,
  },
  {
    id: "reddit-archive-tools-comparison",
    title: "Reddit Archive Tools: Pushshift vs Wayback Machine vs Others",
    excerpt: "Compare the best Reddit archiving tools and learn which one works best for different types of content recovery.",
    date: "2024-06-28",
    readTime: "6 min read",
    category: "Tools",
    featured: true,
  },
  {
    id: "why-reddit-posts-get-deleted",
    title: "Why Do Reddit Posts Get Deleted? Understanding Moderation",
    excerpt: "Learn about Reddit's moderation system, why posts get removed, and how to avoid having your content deleted.",
    date: "2024-06-25",
    readTime: "5 min read",
    category: "Education",
    featured: false,
  },
  {
    id: "reddit-privacy-and-deleted-content",
    title: "Reddit Privacy: What Happens to Your Deleted Content?",
    excerpt: "Understand Reddit's privacy policies and what really happens when you delete posts or comments.",
    date: "2024-06-22",
    readTime: "7 min read",
    category: "Privacy",
    featured: false,
  },
  {
    id: "best-practices-reddit-archiving",
    title: "Best Practices for Reddit Content Archiving",
    excerpt: "Learn how to properly archive Reddit content for research, journalism, or personal use while respecting privacy.",
    date: "2024-06-20",
    readTime: "6 min read",
    category: "Best Practices",
    featured: false,
  },
  {
    id: "reddit-api-changes-impact",
    title: "How Reddit API Changes Affect Content Recovery",
    excerpt: "Understand the impact of Reddit's API changes on third-party tools and content archiving services.",
    date: "2024-06-18",
    readTime: "4 min read",
    category: "News",
    featured: false,
  },
];

const categories = ["All", "Guide", "Tools", "Education", "Privacy", "Best Practices", "News"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Blog & Resources
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Learn everything about viewing deleted Reddit content, archiving tools, and best practices
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-white/50">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/50">{post.date}</span>
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white/70 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-500/20 text-gray-300 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/50">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">{post.date}</span>
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors text-sm">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-white/70 mb-6">
                Get the latest tips and guides about Reddit content recovery delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
