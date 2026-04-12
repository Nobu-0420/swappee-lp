/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/urban-pass.html' },
      ],
    };
  },
};

export default nextConfig;
