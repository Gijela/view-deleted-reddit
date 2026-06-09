import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Deleted Subreddit Archive - ViewDeletedReddit",
  description: "Learn how deleted subreddit archives work, how to search removed subreddit posts, and why private or banned communities may have limited coverage.",
  keywords: "deleted subreddit archive, deleted subreddit viewer, reddit archive deleted, reddit archive deleted posts, view deleted subreddit posts",
  alternates: {
    canonical: "/blog/deleted-subreddit-archive",
  },
  openGraph: {
    title: "Deleted Subreddit Archive",
    description: "Search for archived posts from deleted, banned, private, or removed Reddit communities.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deleted Subreddit Archive",
    description: "Search for archived posts from deleted, banned, private, or removed Reddit communities.",
  },
};

export default function DeletedSubredditArchivePage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">
        <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
                  ← Back to Blog
                </Link>
                <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full">
                  Subreddits
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Deleted Subreddit Archive: How to Find Removed Community Posts
              </h1>
              <div className="flex items-center gap-6 text-white/60 mb-8">
                <span>June 9, 2026</span>
                <span>6 min read</span>
                <span>Subreddit Archives</span>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                If a subreddit was deleted, banned, made private, or heavily moderated, public archives may still contain older posts and snapshots from the community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-purple-300 font-semibold mb-2">Search a subreddit archive</h3>
                <p className="text-white/80 mb-4">
                  Enter a subreddit name, Reddit URL, or post title to look for archived community content.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Search Reddit Archives →
                </Link>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">What is a deleted subreddit archive?</h2>
              <p className="text-white/80 mb-6">
                A deleted subreddit archive is not usually a complete copy of a community. It is a collection of public records captured by external services while the subreddit and its posts were still accessible.
              </p>
              <p className="text-white/80 mb-8">
                Depending on the source, you may find post titles, author names, timestamps, comments, cached pages, or Wayback Machine snapshots.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">How to find deleted subreddit posts</h2>
              <ol className="text-white/80 mb-8 space-y-3">
                <li><strong>1. Search the subreddit name.</strong> Try both the plain name and the full r/subreddit format.</li>
                <li><strong>2. Use a known post URL.</strong> A direct Reddit URL gives archives the strongest lookup signal.</li>
                <li><strong>3. Search unique title phrases.</strong> Distinct words from a post title can locate archived copies.</li>
                <li><strong>4. Check Wayback snapshots.</strong> Community homepages and popular threads may have saved snapshots.</li>
                <li><strong>5. Combine subreddit and username.</strong> This helps when looking for posts from a specific user inside one community.</li>
              </ol>

              <h2 className="text-3xl font-bold mb-6 text-white">Why deleted subreddit coverage varies</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li><strong>Small communities:</strong> Low-traffic subreddits may have been crawled less often.</li>
                <li><strong>Private subreddits:</strong> Archives generally cannot access posts behind private permissions.</li>
                <li><strong>Banned communities:</strong> Older public posts may exist, but later pages can disappear quickly.</li>
                <li><strong>Moderation removals:</strong> Posts removed shortly after submission may never enter an archive.</li>
              </ul>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-blue-300 font-semibold mb-4">Useful query combinations</h3>
                <ul className="text-white/80 mb-0 space-y-2">
                  <li>r/subreddit + post title</li>
                  <li>subreddit name + username</li>
                  <li>subreddit name + deleted Reddit posts</li>
                  <li>reddit.com/r/subreddit + Wayback snapshot</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Can I view a deleted subreddit?</h3>
              <p className="text-white/80 mb-6">
                You usually cannot view the live community if it was deleted, banned, or made private. You may still find archived public posts or snapshots.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Can archives show private subreddit posts?</h3>
              <p className="text-white/80 mb-6">
                Generally no. Archives work with content that was publicly accessible when crawled.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Is a deleted subreddit archive complete?</h3>
              <p className="text-white/80 mb-8">
                Rarely. Archive coverage is usually partial and depends on crawl frequency, post visibility, and timing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/reddit-archive-tools-comparison" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">Reddit Archive Tools Comparison</h3>
                  <p className="text-white/70 text-sm">Compare tools for Reddit archive searches.</p>
                </Link>
                <Link href="/blog/how-to-see-deleted-reddit-posts-2026" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">How to See Deleted Reddit Posts in 2026</h3>
                  <p className="text-white/70 text-sm">Use the current recovery workflow for deleted posts.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
