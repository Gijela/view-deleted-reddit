/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // 静态导出用于 Cloudflare Pages
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Cloudflare Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
