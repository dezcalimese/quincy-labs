/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
