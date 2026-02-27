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
      {
        source: "/docs/installation/:path*",
        destination: "/docs/v0.3.0-alpha.2/installation/:path*",
        permanent: false,
      },
      {
        source: "/docs/quickstart",
        destination: "/docs/v0.3.0-alpha.2/quickstart",
        permanent: false,
      },
      {
        source: "/docs/components/:path*",
        destination: "/docs/v0.3.0-alpha.2/components/:path*",
        permanent: false,
      },
      {
        source: "/docs/theming",
        destination: "/docs/v0.3.0-alpha.2/theming",
        permanent: false,
      },
      {
        source: "/docs/contributing",
        destination: "/docs/v0.3.0-alpha.2/contributing",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
