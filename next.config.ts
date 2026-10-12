import type { NextConfig } from "next";

/**
 * Two build modes.
 * - default: a Next server (dev, `next start`, Vercel and the like).
 * - GITHUB_PAGES=true: a static export for GitHub Pages, served from
 *   PAGES_BASE_PATH (the repository name, or "" behind a custom domain).
 */
const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? (process.env.PAGES_BASE_PATH ?? "") : "";

const nextConfig: NextConfig = {
  // No cacheComponents / partial prerendering: every page is fully static, and a
  // static export cannot use them. Keeping them off gives both modes one code path.
  // next/image does not add the base path to `src`; components read it from here.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_STATIC_EXPORT: pages ? "1" : "",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(pages
    ? {
        output: "export" as const,
        basePath,
        // /es/ → es/index.html, which is what a static host resolves reliably.
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        // The site lives under /es and /en; Spanish is the default.
        // (Config redirects need a server; the export gets a static index.html instead.)
        async redirects() {
          return [{ source: "/", destination: "/es", permanent: false }];
        },
      }),
};

export default nextConfig;
