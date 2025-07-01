import { Metadata } from 'next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | ViewDeletedReddit',
  description: 'ViewDeletedReddit terms of service. Understand the terms and conditions for using our deleted Reddit content recovery tool.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-white/70 mb-8">Last updated: January 1, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-white/80">
              By using ViewDeletedReddit, you agree to these terms of service. If you don't agree with any part of these terms, please don't use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Description</h2>
            <p className="text-white/80">
              ViewDeletedReddit is a free tool that helps users find and view deleted Reddit posts and comments by searching public archives. We aggregate data from various publicly available sources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-white/80 mb-4">You agree to use our service only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Use the service to harass, stalk, or threaten others</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to overwhelm our servers with excessive requests</li>
              <li>Use automated tools to scrape our service</li>
              <li>Republish recovered content in ways that violate copyright</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Content and Copyright</h2>
            <p className="text-white/80">
              All content displayed through our service originates from public Reddit archives. We don't claim ownership of any Reddit content. Users are responsible for respecting copyright and intellectual property rights when using recovered content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <p className="text-white/80">
              We provide our service "as is" without guarantees of availability, accuracy, or completeness. Archive availability depends on third-party services beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy and Data</h2>
            <p className="text-white/80">
              We don't store your search queries or personal information. See our Privacy Policy for details on how we handle data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-white/80">
              ViewDeletedReddit is provided free of charge. We're not liable for any damages arising from your use of the service, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-white/80">
              We reserve the right to terminate or suspend access to our service at any time, without notice, for any reason including violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-white/80">
              We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-white/80">
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@viewdeletedreddit.com" className="text-purple-400 hover:text-purple-300">
                legal@viewdeletedreddit.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-white/80">
              These terms are governed by the laws of the jurisdiction where our service is operated, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
