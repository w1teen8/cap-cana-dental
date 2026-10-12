/** Base path of the deployment ("" on a server, "/repo-name" on GitHub Pages). */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a file from /public. next/link adds the base path itself; next/image does not. */
export const asset = (path: string) => `${base}${path}`;

/** Absolute-path URL of a page, for places Next does not rewrite (hreflang links).
    The static export serves directories, so its page URLs end in a slash. */
export const pageUrl = (path: string) =>
  `${base}${path}${process.env.NEXT_PUBLIC_STATIC_EXPORT ? "/" : ""}`;
