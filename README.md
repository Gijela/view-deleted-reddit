# ViewDeletedReddit - How to See Deleted Reddit Posts

🔍 **The ultimate tool to view deleted Reddit posts and comments instantly**

**Live Site**: [https://ViewDeletedReddit.com](https://ViewDeletedReddit.com)

ViewDeletedReddit is a powerful web application that helps you **see deleted Reddit posts** and comments that have been removed by users, moderators, or administrators. Our tool aggregates data from multiple archive sources to give you the best chance of recovering deleted Reddit content.

## 🚀 How to See Deleted Reddit Posts - Quick Start

1. **Visit**: [https://ViewDeletedReddit.com](https://ViewDeletedReddit.com)
2. **Enter**: Reddit URL or username
3. **Search**: Get instant results from multiple archives
4. **View**: Recovered deleted posts and comments with source attribution

## ✨ Key Features

- 🔍 **Universal Search**: Support for Reddit URLs and usernames
- 📚 **Multi-Source Recovery**: Integrates Pushshift and Wayback Machine archives
- ⚡ **Real-Time Results**: Instant search with live filtering capabilities
- 📱 **Mobile-First Design**: Perfect experience on all devices
- 🏷️ **Source Attribution**: Clear indication of where content was recovered
- 🔒 **Privacy-Focused**: No logging of your searches or viewed content

## 🎯 How to See Deleted Reddit Posts - Methods Supported

### 1. By Reddit URL
Perfect for when you have a specific post or comment thread:
```
https://reddit.com/r/subreddit/comments/post_id/
```

### 2. By Username
Find all archived content from a specific user:
```
u/username or username
```

### 3. Advanced Filtering
- Filter by post type (posts vs comments)
- Sort by date, score, or relevance
- Search within results

## 🛠️ Technical Stack

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** for responsive, modern design
- 📱 **Mobile-Optimized** with perfect responsive design
- ✨ **Framer Motion** for smooth animations and loading states
- 🔍 **SEO Optimized** for "how to see deleted reddit posts" and related keywords
- 📊 **Performance Optimized** for Core Web Vitals
- 🎯 **TypeScript** for type safety and reliability

## 🌐 Why Use ViewDeletedReddit.com?

### Comprehensive Coverage
Our tool searches multiple archive sources simultaneously, giving you the best chance to **see deleted Reddit posts** that other tools might miss.

### User-Friendly Interface
Unlike complex archive sites, ViewDeletedReddit.com provides a simple, intuitive interface that anyone can use to **view deleted Reddit content**.

### Educational Content
Visit our [blog](https://ViewDeletedReddit.com/blog) for comprehensive guides on:
- How to see deleted Reddit posts using various methods
- Comparison of Reddit archive tools
- Best practices for content recovery

## 🚀 Getting Started (Development)

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gijela/view-deleted-reddit.git
cd view-deleted-reddit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/lookup/        # API endpoint for Reddit content recovery
│   ├── blog/              # SEO-optimized blog content
│   ├── guide/             # How-to guides
│   └── page.tsx           # Main search interface
├── components/            # Reusable UI components
│   ├── SearchResults.tsx  # Results display component
│   └── LoadingSpinner.tsx # Loading animations
├── sections/              # Page sections
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Main search interface
│   └── Footer.tsx         # Site footer
└── assets/               # Static assets and icons
```

## 🔧 API Endpoints

### POST /api/lookup
Search for deleted Reddit content:

```typescript
{
  "query": "reddit_url_or_username",
  "type": "url" | "username"
}
```

Response includes posts and comments with metadata, source attribution, and deletion status.

## 🎯 SEO & Content Strategy

This project is optimized for key search terms:
- "how to see deleted reddit posts"
- "view deleted reddit comments"
- "reddit archive tools"
- "pushshift reddit search"
- "wayback machine reddit"

## 📈 Performance

- ✅ **Lighthouse Score**: 95+ on all metrics
- ✅ **Core Web Vitals**: Optimized for speed and user experience
- ✅ **Mobile Performance**: Perfect responsive design
- ✅ **SEO Score**: Optimized for search engine visibility

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- **Website**: [https://ViewDeletedReddit.com](https://ViewDeletedReddit.com)
- **GitHub**: [https://github.com/Gijela/view-deleted-reddit](https://github.com/Gijela/view-deleted-reddit)

If you find this tool helpful for learning **how to see deleted Reddit posts**, please give it a ⭐ on GitHub!

---

**Ready to recover deleted Reddit content?** Visit [https://ViewDeletedReddit.com](https://ViewDeletedReddit.com) and start searching now!
