import createMDX from "@next/mdx";
import rehypeMermaid from "rehype-mermaid";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypeMermaid, { strategy: "inline-svg" }]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
