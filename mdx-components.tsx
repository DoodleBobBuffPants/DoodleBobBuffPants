import type { MDXComponents } from "mdx/types";

// noinspection JSUnusedGlobalSymbols
const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
});

export { useMDXComponents };
