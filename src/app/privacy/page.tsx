import { Metadata } from 'next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | ViewDeletedReddit',
  description: 'ViewDeletedReddit privacy policy. Learn how we protect your privacy when using our deleted Reddit content recovery tool.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-white/70 mb-8">Last updated: January 1, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
            <p className="text-white/80">
              ViewDeletedReddit is committed to protecting your privacy. This policy explains how we handle information when you use our service to view deleted Reddit content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Don't Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>We don't require user registration or accounts</li>
              <li>We don't store your search queries</li>
              <li>We don't track your browsing behavior</li>
              <li>We don't collect personal information</li>
              <li>We don't use cookies for tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <p className="text-white/80 mb-4">
              Like most websites, we may automatically collect certain technical information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>IP addresses (for security and rate limiting only)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
            </ul>
            <p className="text-white/80 mt-4">
              This information is used solely for maintaining service security and performance. It is not linked to any personal identity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-white/80 mb-4">
              Our service queries public archives to find deleted Reddit content:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Pushshift API (when available)</li>
              <li>Internet Archive Wayback Machine</li>
              <li>Other public Reddit archives</li>
            </ul>
            <p className="text-white/80 mt-4">
              These services have their own privacy policies. We don't share any personal information with them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-white/80">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of information. Since we don't store personal data, your privacy risk is minimized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-white/80">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/80">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@viewdeletedreddit.com" className="text-purple-400 hover:text-purple-300">
                privacy@viewdeletedreddit.com
              </a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
