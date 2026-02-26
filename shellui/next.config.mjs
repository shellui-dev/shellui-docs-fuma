import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/v0.3.0-alpha.2",
        permanent: false,
      },
      {
        source: "/docs/v0.2.x/:path*",
        destination: "/docs/v0.2.1/:path*",
        permanent: true,
      },
      {
        source: "/docs/v0.3.0-alpha.1/:path*",
        destination: "/docs/v0.3.0-alpha.2/:path*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
