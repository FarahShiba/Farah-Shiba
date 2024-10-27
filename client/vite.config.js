import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"; //The vanillaExtractPlugin() is added to the Vite configuration to enable support for Vanilla Extract, a CSS-in-JS library that compiles styles to static CSS files at build time.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    port: 3005,
  },
});
