import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "How to See Deleted Reddit Comments - ViewDeletedReddit",
  description: "Learn how to see deleted Reddit comments using thread URLs, usernames, and public archives, plus why some deleted comments cannot be recovered.",
  keywords: "see deleted reddit comments, how to see deleted comments on reddit, view deleted reddit comments, find deleted reddit comments by user",
  alternates: {
    canonical: "/blog/how-to-see-deleted-reddit-comments",
  },
  openGraph: {
    title: "How to See Deleted Reddit Comments",
    description: "A practical guide to finding deleted Reddit comments through public archives and thread searches.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to See Deleted Reddit Comments",
    description: "A practical guide to finding deleted Reddit comments through public archives and thread searches.",
  },
};

export default function HowToSeeDeletedRedditCommentsPage() {
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
                <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full">
                  Comments
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                How to See Deleted Reddit Comments
              </h1>
              <div className="flex items-center gap-6 text-white/60 mb-8">
                <span>June 9, 2026</span>
                <span>6 min read</span>
                <span>Comment Recovery</span>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                Deleted Reddit comments can be harder to recover than posts, but thread URLs, usernames, and archive searches can still reveal public comments that were captured before removal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-purple-300 font-semibold mb-2">Search deleted comments</h3>
                <p className="text-white/80 mb-4">
                  Paste a Reddit thread URL, comment URL, or username to look for archived comment records.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Find Deleted Reddit Comments →
                </Link>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">Why deleted comments are different from deleted posts</h2>
              <p className="text-white/80 mb-6">
                Reddit posts have their own pages and titles, which makes them easier for archives to discover. Comments live inside threads, can be deeply nested, and may be removed before an archive captures the full discussion.
              </p>
              <p className="text-white/80 mb-8">
                That means comment recovery often works best when you have extra context: the thread URL, subreddit, username, date, or a phrase from the comment.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">Best ways to view deleted Reddit comments</h2>
              <ol className="text-white/80 mb-8 space-y-3">
                <li><strong>1. Search the thread URL.</strong> If the original discussion was archived, deleted comments may appear with surrounding context.</li>
                <li><strong>2. Search by username.</strong> A user search can reveal archived comments across multiple subreddits.</li>
                <li><strong>3. Search exact phrases.</strong> If you remember part of the comment, use that phrase to narrow the result set.</li>
                <li><strong>4. Check Wayback snapshots.</strong> Full-page snapshots may preserve comment threads at a specific time.</li>
                <li><strong>5. Compare archives.</strong> Comment coverage varies, so one source may have a result another source missed.</li>
              </ol>

              <h2 className="text-3xl font-bold mb-6 text-white">What information helps recovery?</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li>The Reddit thread URL or comment permalink.</li>
                <li>The username that posted the comment.</li>
                <li>The subreddit where the discussion happened.</li>
                <li>An approximate date or time window.</li>
                <li>A quoted phrase from the missing comment.</li>
              </ul>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-blue-300 font-semibold mb-4">Tip for long threads</h3>
                <p className="text-white/80 mb-0">
                  If a thread has thousands of comments, search the username or a unique phrase instead of browsing snapshots manually. It is usually faster and more accurate.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">Why a deleted comment might not appear</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li>The comment was deleted before being archived.</li>
                <li>The thread was not crawled during the right time window.</li>
                <li>The subreddit restricted access or became private.</li>
                <li>The archive stored only post metadata, not full comments.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Can I see deleted Reddit comments from 2025 or 2026?</h3>
              <p className="text-white/80 mb-6">
                Sometimes. Recent comments are recoverable only if an archive captured them while they were still public. Current-year content can be more inconsistent than older indexed data.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Can I find deleted comments by user?</h3>
              <p className="text-white/80 mb-6">
                Yes, if the archive preserved the username and comment data. Use the exact username and combine it with a subreddit or date when possible.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Are removed comments the same as deleted comments?</h3>
              <p className="text-white/80 mb-8">
                Not always. A user deletes their own comment, while moderators or Reddit admins remove comments. Archives may capture either type if the comment was public first.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/find-deleted-reddit-posts-by-user" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">Find Deleted Posts by User</h3>
                  <p className="text-white/70 text-sm">Use usernames to search archived Reddit activity.</p>
                </Link>
                <Link href="/blog/how-to-see-deleted-reddit-posts-2026" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">How to See Deleted Reddit Posts in 2026</h3>
                  <p className="text-white/70 text-sm">Current workflow for deleted Reddit post recovery.</p>
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
