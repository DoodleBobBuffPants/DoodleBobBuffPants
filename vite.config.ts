import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import prism from "remark-prism";
import checker from "vite-plugin-checker";

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
      rolldownOptions: {
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
        },
      },
    },
    plugins: [tailwindcss(), react(), mdx.default({ remarkPlugins: [prism] }), checker({ typescript: { root: "." } })],
    server: { host: "localhost", port: 3000, strictPort: true, open: true, base: process.env.BASE_PATH ?? "/" },
    test: { root: ".", include: ["**/*.tests.{ts,tsx}"], globals: true, environment: "jsdom", watch: false },
  };
});
