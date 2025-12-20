// Cloudflare Pages Functions
// This will handle /api/lookup requests

interface Env {
  // Add any environment variables here
}

// Types for our API responses
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

interface APIResponse {
  success: boolean;
  data: {
    posts: RedditPost[];
    comments: RedditComment[];
    total_found: number;
    query_type: 'url' | 'username';
    query_value: string;
  };
  error?: string;
}

// Helper function to detect if input is a Reddit URL or username
function parseQuery(query: string): { type: 'url' | 'username'; value: string; postId?: string; subreddit?: string } {
  const cleanQuery = query.trim();
  
  const redditUrlRegex = /(?:https?:\/\/)?(?:www\.)?reddit\.com\/r\/([^\/]+)\/comments\/([^\/]+)/i;
  const match = cleanQuery.match(redditUrlRegex);
  
  if (match) {
    return {
      type: 'url',
      value: cleanQuery,
      subreddit: match[1],
      postId: match[2]
    };
  }
  
  const username = cleanQuery.replace(/^u\//, '');
  return {
    type: 'username',
    value: username
  };
}

// Query Wayback Machine for archived Reddit content
async function queryWaybackMachine(queryInfo: ReturnType<typeof parseQuery>): Promise<{ posts: RedditPost[]; comments: RedditComment[] }> {
  const posts: RedditPost[] = [];
  const comments: RedditComment[] = [];
  
  try {
    if (queryInfo.type === 'url') {
      const waybackUrl = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(queryInfo.value)}&output=json&limit=10`;
      
      const response = await fetch(waybackUrl, {
        signal: AbortSignal.timeout(10000)
      });
      
      if (response.ok) {
        const data = await response.json();
        
        if (data && data.length > 1) {
          const archives = data.slice(1);
          
          for (const archive of archives.slice(0, 3)) {
            const timestamp = archive[1];
            const archivedUrl = `https://web.archive.org/web/${timestamp}/${queryInfo.value}`;
            
            posts.push({
              id: `wayback_${timestamp}`,
              title: `Archived Reddit Post (${new Date(timestamp.slice(0, 4) + '-' + timestamp.slice(4, 6) + '-' + timestamp.slice(6, 8)).toLocaleDateString()})`,
              selftext: `This post was archived by the Wayback Machine. View the archived version at: ${archivedUrl}`,
              author: '[archived]',
              created_utc: parseInt(timestamp),
              subreddit: queryInfo.subreddit || 'unknown',
              url: archivedUrl,
              score: 0,
              num_comments: 0,
              permalink: archivedUrl,
              is_deleted: true,
              source: 'wayback'
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Wayback Machine API error:', error);
  }
  
  return { posts, comments };
}

// Mock data generator for demonstration
function generateMockData(queryInfo: ReturnType<typeof parseQuery>): { posts: RedditPost[]; comments: RedditComment[] } {
  const posts: RedditPost[] = [];
  const comments: RedditComment[] = [];
  
  if (queryInfo.type === 'url') {
    posts.push({
      id: 'mock_post_1',
      title: '[RECOVERED] Example deleted Reddit post',
      selftext: 'This is an example of what a recovered deleted post might look like. The original content was removed by the user or moderators, but was preserved in our archives.',
      author: '[deleted]',
      created_utc: Date.now() / 1000 - 86400,
      subreddit: queryInfo.subreddit || 'AskReddit',
      url: queryInfo.value,
      score: 42,
      num_comments: 15,
      permalink: `/r/${queryInfo.subreddit || 'AskReddit'}/comments/${queryInfo.postId}/`,
      is_deleted: true,
      source: 'pushshift'
    });
    
    for (let i = 1; i <= 3; i++) {
      comments.push({
        id: `mock_comment_${i}`,
        body: `[RECOVERED] This is an example of a recovered deleted comment #${i}. The original comment was removed but preserved in archives.`,
        author: i === 1 ? '[deleted]' : `user${i}`,
        created_utc: Date.now() / 1000 - (3600 * i),
        subreddit: queryInfo.subreddit || 'AskReddit',
        score: 10 - i,
        parent_id: i === 1 ? `t3_${queryInfo.postId}` : `t1_mock_comment_${i-1}`,
        link_id: `t3_${queryInfo.postId}`,
        permalink: `/r/${queryInfo.subreddit || 'AskReddit'}/comments/${queryInfo.postId}/_/mock_comment_${i}/`,
        is_deleted: i <= 2,
        source: 'pushshift'
      });
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      posts.push({
        id: `mock_user_post_${i}`,
        title: `[RECOVERED] Deleted post by u/${queryInfo.value} #${i}`,
        selftext: `This is an example of a recovered deleted post by user ${queryInfo.value}. Content was preserved before deletion.`,
        author: '[deleted]',
        created_utc: Date.now() / 1000 - (86400 * i),
        subreddit: `subreddit${i}`,
        url: `https://reddit.com/r/subreddit${i}/comments/example${i}/`,
        score: 25 - (i * 5),
        num_comments: 8 - i,
        permalink: `/r/subreddit${i}/comments/example${i}/`,
        is_deleted: true,
        source: 'pushshift'
      });
    }
    
    for (let i = 1; i <= 4; i++) {
      comments.push({
        id: `mock_user_comment_${i}`,
        body: `[RECOVERED] Deleted comment by u/${queryInfo.value}: This is example content #${i} that was preserved before deletion.`,
        author: '[deleted]',
        created_utc: Date.now() / 1000 - (7200 * i),
        subreddit: `subreddit${i % 2 + 1}`,
        score: 15 - (i * 2),
        parent_id: `t3_example${i}`,
        link_id: `t3_example${i}`,
        permalink: `/r/subreddit${i % 2 + 1}/comments/example${i}/_/mock_user_comment_${i}/`,
        is_deleted: true,
        source: 'pushshift'
      });
    }
  }
  
  return { posts, comments };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as { query: string };
    const { query } = body;
    
    if (!query || typeof query !== 'string') {
      return new Response(JSON.stringify({
        success: false,
        error: 'Query parameter is required and must be a string'
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const queryInfo = parseQuery(query);
    
    // Run queries in parallel
    const [waybackResults] = await Promise.all([
      queryWaybackMachine(queryInfo)
    ]);
    
    // For demonstration, also include mock data
    const mockResults = generateMockData(queryInfo);
    
    // Combine and deduplicate results
    const allPosts = [...waybackResults.posts, ...mockResults.posts];
    const allComments = [...waybackResults.comments, ...mockResults.comments];
    
    // Remove duplicates based on ID
    const uniquePosts = allPosts.filter((post, index, self) => 
      index === self.findIndex(p => p.id === post.id)
    );
    const uniqueComments = allComments.filter((comment, index, self) => 
      index === self.findIndex(c => c.id === comment.id)
    );
    
    const response: APIResponse = {
      success: true,
      data: {
        posts: uniquePosts,
        comments: uniqueComments,
        total_found: uniquePosts.length + uniqueComments.length,
        query_type: queryInfo.type,
        query_value: queryInfo.value
      }
    };
    
    return new Response(JSON.stringify(response), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const query = url.searchParams.get('query');
  
  if (!query) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Query parameter is required'
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Redirect to POST handler
  return onRequestPost({
    ...context,
    request: new Request(context.request.url, {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: { 'Content-Type': 'application/json' }
    })
  });
};

