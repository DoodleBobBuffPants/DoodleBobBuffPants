import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import prism from "remark-prism";

// noinspection JSUnusedGlobalSymbols
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    root: "src",
    publicDir: "../public",
    base: process.env.BASE_PATH ?? "/",
    build: {
      outDir: "../out",
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
        },
      },
    },
    clearScreen: false,
    plugins: [react(), viteTsconfigPaths(), mdx.default({ remarkPlugins: [prism] })],
    server: { host: "localhost", port: 3000, strictPort: true, open: true, base: process.env.BASE_PATH ?? "/" },
    test: { root: ".", include: ["**/*.tests.{ts,tsx}"], globals: true, environment: "jsdom", watch: false },
  };
});
