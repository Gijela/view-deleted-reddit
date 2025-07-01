"use client";
import { useState } from "react";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { SearchResults } from "@/components/SearchResults";
import { SearchingAnimation } from "@/components/LoadingSpinner";

interface RedditPost {
  id: string;
  title: string;
  selftext: string;
  author: string;
  created_utc: number;
  subreddit: string;
  url: string;
  score: number;
  num_comments: number;
  permalink: string;
  is_deleted: boolean;
  source: 'pushshift' | 'wayback' | 'reddit';
}

interface RedditComment {
  id: string;
  body: string;
  author: string;
  created_utc: number;
  subreddit: string;
  score: number;
  parent_id: string;
  link_id: string;
  permalink: string;
  is_deleted: boolean;
  source: 'pushshift' | 'wayback' | 'reddit';
}

interface SearchData {
  posts: RedditPost[];
  comments: RedditComment[];
  total_found: number;
  query_type: 'url' | 'username';
  query_value: string;
}

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setError(null);

    try {
      const response = await fetch('/api/lookup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (data.success) {
        setSearchResults(data.data);
        // Scroll to results
        setTimeout(() => {
          const resultsElement = document.getElementById('search-results');
          if (resultsElement) {
            resultsElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setError(data.error || 'Search failed');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <main>
      <Header />
      <Hero onSearch={handleSearch} />

      {/* Loading State */}
      {isSearching && (
        <div className="bg-black">
          <SearchingAnimation />
        </div>
      )}

      {/* Error Display */}
      {error && !isSearching && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 text-center">
            <div className="text-red-400 text-lg font-semibold mb-2">Search Failed</div>
            <p className="text-red-300 mb-4">{error}</p>
            <button
              onClick={() => setError(null)}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-red-300 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchResults && !isSearching && (
        <div id="search-results" className="bg-black">
          <SearchResults
            posts={searchResults.posts}
            comments={searchResults.comments}
            queryType={searchResults.query_type}
            queryValue={searchResults.query_value}
            totalFound={searchResults.total_found}
          />
        </div>
      )}

      {/* Show info section only when no search results */}
      {!searchResults && !isSearching && (
        <>
          <section className="py-12 md:py-20 bg-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  How It Works
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                  Our tool searches multiple archives to recover deleted Reddit content
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Search</h3>
                  <p className="text-white/70 leading-relaxed">
                    Enter a Reddit URL or username to start searching for deleted content
                  </p>
                </div>

                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Archive</h3>
                  <p className="text-white/70 leading-relaxed">
                    We search multiple archives including Pushshift and Wayback Machine
                  </p>
                </div>

                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors sm:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Recover</h3>
                  <p className="text-white/70 leading-relaxed">
                    View recovered deleted posts and comments with source attribution
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
