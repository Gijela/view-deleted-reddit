"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
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

interface LookupResponse {
  success: boolean;
  data?: SearchData;
  error?: string;
}

export default function SuccessPage() {
  const [searchResults, setSearchResults] = useState<SearchData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    if (!sessionId) {
      setError('Payment session is missing. Please start a new search.');
      setIsLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch('/api/lookup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ session_id: sessionId }),
        });

        const data = await response.json() as LookupResponse;

        if (data.success && data.data) {
          setSearchResults(data.data);
        } else {
          setError(data.error || 'Unable to load search results');
        }
      } catch (err) {
        setError('Network error occurred while loading results');
        console.error('Paid lookup error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {isLoading && <SearchingAnimation />}

      {error && !isLoading && (
        <section className="container mx-auto px-4 py-20">
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 text-center max-w-2xl mx-auto">
            <div className="text-red-400 text-lg font-semibold mb-2">Unable to Load Results</div>
            <p className="text-red-300 mb-4">{error}</p>
            <a
              href="/"
              className="inline-flex px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-red-300 transition-colors"
            >
              Start a New Search
            </a>
          </div>
        </section>
      )}

      {searchResults && !isLoading && (
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

      <Footer />
    </main>
  );
}
