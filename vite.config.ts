import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  assetsInclude: ["**/*.md"],
  plugins: [react()],
  test: { root: ".", include: ["**/*.tests.{ts,tsx}"], globals: true, environment: "jsdom", watch: false },
});
