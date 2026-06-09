import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Reddit Privacy and Deleted Content - ViewDeletedReddit",
  description: "Understand Reddit privacy, what happens when posts or comments are deleted, and how to use archived Reddit content responsibly.",
  keywords: "reddit privacy deleted content, what happens to deleted reddit posts, reddit deleted content archive, reddit privacy archive",
  alternates: {
    canonical: "/blog/reddit-privacy-and-deleted-content",
  },
  openGraph: {
    title: "Reddit Privacy and Deleted Content",
    description: "Learn what Reddit deletion means, what public archives may preserve, and how to use recovered content responsibly.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Privacy and Deleted Content",
    description: "Learn what Reddit deletion means, what public archives may preserve, and how to use recovered content responsibly.",
  },
};

export default function RedditPrivacyAndDeletedContentPage() {
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
                <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-300 rounded-full">
                  Privacy
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Reddit Privacy: What Happens to Deleted Content?
              </h1>
              <div className="flex items-center gap-6 text-white/60 mb-8">
                <span>June 9, 2026</span>
                <span>7 min read</span>
                <span>Privacy Guide</span>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                Deleting a Reddit post or account does not always mean every public copy disappears. This guide explains the difference between Reddit deletion and public archival.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-yellow-300 font-semibold mb-2">Use archived content responsibly</h3>
                <p className="text-white/80 mb-0">
                  Public archives can be useful for research, moderation context, journalism, and personal reference. They should not be used for harassment, doxxing, or exposing sensitive personal information.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">What Reddit deletion usually means</h2>
              <p className="text-white/80 mb-6">
                When someone deletes a Reddit post or comment, it is removed from normal Reddit viewing. If they delete their account, Reddit may replace the username with [deleted] while some content or discussion context remains visible.
              </p>
              <p className="text-white/80 mb-8">
                Public archives are different. They may have captured a copy before deletion, especially if the content was public, popular, or available for long enough to be indexed.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">Why deleted content may still appear in archives</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li><strong>Public availability:</strong> Reddit posts and comments are often publicly visible when first published.</li>
                <li><strong>External crawling:</strong> Archive tools can capture snapshots or metadata independently from Reddit.</li>
                <li><strong>Quoting and replies:</strong> Other users may quote or reference deleted content in visible comments.</li>
                <li><strong>Search indexing:</strong> Some titles, snippets, or cached metadata may persist outside Reddit.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white">What archives should not be used for</h2>
              <ul className="text-white/80 mb-8 space-y-3">
                <li>Harassing or identifying users who tried to remove personal content.</li>
                <li>Sharing sensitive information without a legitimate reason.</li>
                <li>Circumventing privacy settings or private community boundaries.</li>
                <li>Presenting partial archive data as complete context.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white">Responsible reasons to check deleted Reddit content</h2>
              <p className="text-white/80 mb-6">
                There are legitimate cases for checking archived Reddit content: preserving public research discussions, verifying quoted information, understanding moderation decisions, recovering your own lost writing, or checking context around a public claim.
              </p>
              <p className="text-white/80 mb-8">
                Even in legitimate cases, treat archived content as historical context. It may be incomplete, outdated, or missing the reason it was deleted.
              </p>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-purple-300 font-semibold mb-4">Search with context</h3>
                <p className="text-white/80 mb-4">
                  If you need to verify public Reddit content, search by URL, username, subreddit, or title phrase and check the archive source before relying on a result.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Search Public Archives →
                </Link>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Does deleting a Reddit post remove it from all archives?</h3>
              <p className="text-white/80 mb-6">
                Not necessarily. Reddit deletion affects Reddit’s live platform, but external archives may already have saved public copies.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Is it legal to view deleted Reddit content?</h3>
              <p className="text-white/80 mb-6">
                Publicly archived content is often accessible, but legality and acceptable use depend on your jurisdiction and purpose. Avoid misuse and respect privacy.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Can private Reddit content be recovered?</h3>
              <p className="text-white/80 mb-8">
                ViewDeletedReddit focuses on public archive sources. Private messages and private community content should not be expected to appear.
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
                  <p className="text-white/70 text-sm">Learn what may remain after account deletion.</p>
                </Link>
                <Link href="/blog/ultimate-guide-view-deleted-reddit-posts" className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300">Ultimate Guide to Deleted Reddit Posts</h3>
                  <p className="text-white/70 text-sm">Review practical recovery methods and limits.</p>
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
