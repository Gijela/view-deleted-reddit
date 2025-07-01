"use client";
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

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

interface SearchResultsProps {
  posts: RedditPost[];
  comments: RedditComment[];
  queryType: 'url' | 'username';
  queryValue: string;
  totalFound: number;
}

const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const getSourceBadge = (source: string) => {
  const badges = {
    pushshift: { color: 'bg-blue-500', text: 'Pushshift' },
    wayback: { color: 'bg-green-500', text: 'Wayback' },
    reddit: { color: 'bg-orange-500', text: 'Reddit' }
  };
  
  const badge = badges[source as keyof typeof badges] || { color: 'bg-gray-500', text: source };
  
  return (
    <span className={`inline-block px-2 py-1 text-xs rounded-full text-white ${badge.color}`}>
      {badge.text}
    </span>
  );
};

export const SearchResults: React.FC<SearchResultsProps> = ({
  posts,
  comments,
  queryType,
  queryValue,
  totalFound
}) => {
  const [filter, setFilter] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'posts' | 'comments'>('all');

  // Filter results based on search term
  const filteredPosts = useMemo(() => {
    if (!filter) return posts;
    return posts.filter(post => 
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.selftext.toLowerCase().includes(filter.toLowerCase()) ||
      post.author.toLowerCase().includes(filter.toLowerCase())
    );
  }, [posts, filter]);

  const filteredComments = useMemo(() => {
    if (!filter) return comments;
    return comments.filter(comment => 
      comment.body.toLowerCase().includes(filter.toLowerCase()) ||
      comment.author.toLowerCase().includes(filter.toLowerCase())
    );
  }, [comments, filter]);

  const allItems = useMemo(() => {
    const items = [
      ...filteredPosts.map(post => ({ ...post, type: 'post' as const })),
      ...filteredComments.map(comment => ({ ...comment, type: 'comment' as const }))
    ];
    return items.sort((a, b) => b.created_utc - a.created_utc);
  }, [filteredPosts, filteredComments]);

  const getDisplayItems = () => {
    switch (activeTab) {
      case 'posts': return filteredPosts.map(post => ({ ...post, type: 'post' as const }));
      case 'comments': return filteredComments.map(comment => ({ ...comment, type: 'comment' as const }));
      default: return allItems;
    }
  };

  const displayItems = getDisplayItems();

  if (totalFound === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
          <p className="text-white/70">
            No deleted content found for {queryType === 'url' ? 'this URL' : `user "${queryValue}"`}.
            Try a different search term.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Results Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Search Results
        </h2>
        <p className="text-white/70">
          Found {totalFound} deleted {totalFound === 1 ? 'item' : 'items'} for {' '}
          {queryType === 'url' ? (
            <span className="text-purple-400">Reddit URL</span>
          ) : (
            <span className="text-purple-400">u/{queryValue}</span>
          )}
        </p>
      </div>

      {/* Filter Input */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter results..."
            className="w-full px-4 py-3 pl-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
            🔍
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-white/10 rounded-lg p-1 w-fit">
        {[
          { key: 'all', label: `All (${allItems.length})` },
          { key: 'posts', label: `Posts (${filteredPosts.length})` },
          { key: 'comments', label: `Comments (${filteredComments.length})` }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-purple-500 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {displayItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
              <div className="flex items-center flex-wrap gap-2">
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  item.type === 'post' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
                }`}>
                  {item.type === 'post' ? 'POST' : 'COMMENT'}
                </span>
                {item.is_deleted && (
                  <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-300 font-medium">
                    DELETED
                  </span>
                )}
                {getSourceBadge(item.source)}
              </div>
              <span className="text-xs text-white/50 sm:text-right">
                {formatDate(item.created_utc)}
              </span>
            </div>

            {item.type === 'post' ? (
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                  {(item as any).title}
                </h3>
                {(item as any).selftext && (
                  <p className="text-white/80 mb-4 line-clamp-3 leading-relaxed">
                    {(item as any).selftext}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <span className="text-purple-400">r/</span>{item.subreddit}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-blue-400">u/</span>{item.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">↑</span>{item.score}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-orange-400">💬</span>{(item as any).num_comments}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {(item as any).body}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <span className="text-purple-400">r/</span>{item.subreddit}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-blue-400">u/</span>{item.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">↑</span>{item.score}
                  </span>
                </div>
              </div>
            )}

            {/* View Original Link */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <a
                  href={`https://reddit.com${item.permalink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors hover:underline"
                >
                  <span>View on Reddit</span>
                  <span>→</span>
                </a>
                <div className="text-xs text-white/40">
                  Archived from {item.source}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {displayItems.length === 0 && filter && (
        <div className="text-center py-8">
          <p className="text-white/70">
            No results match your filter "{filter}". Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
};
