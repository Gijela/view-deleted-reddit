import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Deleted Reddit Account Viewer - ViewDeletedReddit",
  description: "Learn how deleted Reddit account viewers work, what public archived account content may still be visible, and the limits of deleted user recovery.",
  keywords: "deleted reddit account viewer, reddit deleted account archive, reddit deleted account viewer, view deleted reddit account, deleted reddit user archive",
  alternates: {
    canonical: "/blog/deleted-reddit-account-viewer",
  },
  openGraph: {
    title: "Deleted Reddit Account Viewer",
    description: "Understand what can still be found from deleted Reddit accounts through public archives.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deleted Reddit Account Viewer",
    description: "Understand what can still be found from deleted Reddit accounts through public archives.",
  },
};

export default function DeletedRedditAccountViewerPage() {
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
                <span className="px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-300 rounded-full">
                  Accounts
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Deleted Reddit Account Viewer: What You Can Still Find
              </h1>
              <div className="flex items-center gap-6 text-white/60 mb-8">
                <span>June 9, 2026</span>
                <span>6 min read</span>
                <span>Account Archives</span>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                When a Reddit account is deleted, some public posts and comments may still appear in archives. This guide explains what deleted account viewers can show and where the limits are.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-purple-300 font-semibold mb-2">Look for public archived account content</h3>
                <p className="text-white/80 mb-4">
                  Search by username, profile URL, post URL, or subreddit to check public archives for deleted Reddit account history.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Try Account Archive Search →
                </Link>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">What happens when a Reddit account is deleted?</h2>
              <p className="text-white/80 mb-6">
                Reddit account deletion usually removes the profile identity from Reddit’s live interface. Posts and comments may remain visible as content from a deleted user, or they may disappear depending on moderation, user deletion, and Reddit’s own systems.
              </p>
              <p className="text-white/80 mb-8">
                Public archives are separate from Reddit. If a post or comment was captured while it was public, an archived copy may still exist even after the account is gone.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">What a deleted Reddit account viewer can show</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li><strong>Archived posts:</strong> Titles, body text, subreddit, score, and timestamps when available.</li>
                <li><strong>Archived comments:</strong> Comment text and thread context if the archive captured the discussion.</li>
                <li><strong>Source attribution:</strong> Whether the record came from Pushshift, Wayback Machine, or another source.</li>
                <li><strong>Partial histories:</strong> Some results may show only titles, metadata, or fragments.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white">What it cannot show</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li>Private messages or non-public account activity.</li>
                <li>Content that was never captured before deletion.</li>
                <li>Private subreddit posts that archives could not access.</li>
                <li>A guaranteed full account history.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white">How to search a deleted Reddit account archive</h2>
              <ol className="text-white/80 mb-8 space-y-3">
                <li><strong>1. Start with the username.</strong> Use the exact spelling if you know it.</li>
                <li><strong>2. Try old profile URLs.</strong> A saved link can help archives match the account.</li>
                <li><strong>3. Search known subreddits.</strong> If the user posted in a specific community, combine the subreddit and username.</li>
                <li><strong>4. Search known titles or phrases.</strong> Exact phrases can find posts even when the username no longer appears.</li>
                <li><strong>5. Compare archive sources.</strong> One archive may have comments while another only has post metadata.</li>
              </ol>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-yellow-300 font-semibold mb-4">Important limitation</h3>
                <p className="text-white/80 mb-0">
                  Deleted account search is often incomplete because Reddit may replace usernames with [deleted]. Treat archived results as partial evidence, not a complete profile reconstruction.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Can I view a deleted Reddit account profile?</h3>
              <p className="text-white/80 mb-6">
                Usually not as a live Reddit profile. You may be able to find archived public posts or comments that were associated with the username before deletion.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Why do some results say [deleted]?</h3>
              <p className="text-white/80 mb-6">
                Reddit often replaces the author name after account deletion. Archives may preserve older username data, but not always.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Is deleted account recovery always possible?</h3>
              <p className="text-white/80 mb-8">
                No. Recovery depends on public archive coverage, timing, and whether the original content was accessible before it was removed.
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
                  <p className="text-white/70 text-sm">Search archived Reddit content by username.</p>
                </Link>
                <Link href="/blog/reddit-privacy-and-deleted-content" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">Reddit Privacy & Deleted Content</h3>
                  <p className="text-white/70 text-sm">Understand privacy and ethical limits around archived content.</p>
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
