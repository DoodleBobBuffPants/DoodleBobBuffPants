import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from 'vite-tsconfig-paths';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
      outDir: "../dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
          output: {
              entryFileNames: "[name].js",
              chunkFileNames: "[name][extension]",
              assetFileNames: asset => `${(asset.name?.endsWith(".md") ? "posts/" : asset.name?.endsWith(".gif") ? "gifs/" : "")}[name][extname]`,
          },
      },
  },
  assetsInclude: ["**/*.md"],
  clearScreen: false,
  plugins: [react(), viteTsconfigPaths()],
  server: { host: "localhost", port: 3000, open: true },
  test: { root: ".", globals: true, environment: "jsdom", watch: false },
});
