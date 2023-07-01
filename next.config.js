const withMDX = require("@next/mdx")({ extension: /\.mdx?$/, options: { remarkPlugins: [require("remark-prism")] } });

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  reactStrictMode: false,
  images: { unoptimized: true, domains: ["covers.openlibrary.org"] },
});
