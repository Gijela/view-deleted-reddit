import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Find Deleted Reddit Posts by User - ViewDeletedReddit",
  description: "Learn how to find deleted Reddit posts by user or username, what archives can recover, and why some deleted user content cannot be found.",
  keywords: "find deleted reddit posts by user, search deleted reddit posts by user, view deleted reddit posts by user, find deleted reddit posts by username",
  alternates: {
    canonical: "/blog/find-deleted-reddit-posts-by-user",
  },
  openGraph: {
    title: "Find Deleted Reddit Posts by User",
    description: "Search deleted Reddit posts by username and understand what archived user content can and cannot be recovered.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Deleted Reddit Posts by User",
    description: "Search deleted Reddit posts by username and understand what archived user content can and cannot be recovered.",
  },
};

export default function FindDeletedRedditPostsByUserPage() {
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
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                  User Search
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                How to Find Deleted Reddit Posts by User
              </h1>
              <div className="flex items-center gap-6 text-white/60 mb-8">
                <span>June 9, 2026</span>
                <span>7 min read</span>
                <span>Username Search</span>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                Searching by username is one of the fastest ways to find archived Reddit posts from a specific user, but results depend on what was public and archived before deletion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-purple-300 font-semibold mb-2">Search by username</h3>
                <p className="text-white/80 mb-4">
                  Enter a Reddit username or profile URL to look for archived posts and comments connected to that public account.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Search Deleted Reddit Posts →
                </Link>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">What username search can find</h2>
              <p className="text-white/80 mb-6">
                A search for deleted Reddit posts by user works best when the content was public long enough to be captured by an archive. That can include posts submitted by the user, comments in public threads, titles, timestamps, subreddit names, and archive source links.
              </p>
              <p className="text-white/80 mb-8">
                It cannot guarantee recovery of private messages, content from private subreddits, posts removed before any archive saw them, or content that was never publicly indexed.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">How to search deleted Reddit posts by username</h2>
              <ol className="text-white/80 mb-8 space-y-3">
                <li><strong>1. Copy the username.</strong> Use the exact Reddit username, without extra spaces or display-name text.</li>
                <li><strong>2. Try the profile URL.</strong> A URL like reddit.com/user/example can help match the right account.</li>
                <li><strong>3. Search posts and comments separately.</strong> Some archives index posts better than comments, so check both result types.</li>
                <li><strong>4. Filter by subreddit or date.</strong> Narrowing the query can reveal older results that broad searches miss.</li>
                <li><strong>5. Verify the source.</strong> Check whether the result comes from Pushshift, Wayback Machine, or another public archive.</li>
              </ol>

              <h2 className="text-3xl font-bold mb-6 text-white">Why results may be incomplete</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li><strong>Archive timing:</strong> If a post was deleted quickly, it may never have been captured.</li>
                <li><strong>API limitations:</strong> Reddit and archive tools have changed access rules over time.</li>
                <li><strong>Username changes in context:</strong> Deleted accounts may show as [deleted], which makes attribution harder.</li>
                <li><strong>Subreddit privacy:</strong> Private, quarantined, or banned communities may have limited archive coverage.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white">Best workflow for user-based recovery</h2>
              <p className="text-white/80 mb-6">
                Start with the username, then try a known post URL, subreddit name, or phrase from the deleted post title. If you only know the account, use broader user search first and then open individual results to inspect the archive source and timestamp.
              </p>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-blue-300 font-semibold mb-4">Related searches to try</h3>
                <ul className="text-white/80 mb-0 space-y-2">
                  <li>deleted Reddit posts by username</li>
                  <li>deleted Reddit comments by user</li>
                  <li>Reddit deleted account archive</li>
                  <li>search deleted Reddit posts by user</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Can I view all deleted posts from a Reddit user?</h3>
              <p className="text-white/80 mb-6">
                No tool can guarantee every deleted post. You can only find content that was public and captured by an archive before it disappeared.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Can I search a deleted Reddit account by username?</h3>
              <p className="text-white/80 mb-6">
                Sometimes. If archives stored the username before deletion, user-based results may appear. If the account is now only shown as [deleted], matching content becomes harder.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Is it okay to share recovered user content?</h3>
              <p className="text-white/80 mb-8">
                Use caution. Even if content was public when archived, avoid harassment, doxxing, or reposting sensitive personal information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/deleted-reddit-account-viewer" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">Deleted Reddit Account Viewer</h3>
                  <p className="text-white/70 text-sm">Understand what remains visible after an account is deleted.</p>
                </Link>
                <Link href="/blog/how-to-see-deleted-reddit-comments" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">How to See Deleted Reddit Comments</h3>
                  <p className="text-white/70 text-sm">Learn how comment recovery differs from post recovery.</p>
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
