import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Netlify serves the site from the domain root; GitHub Pages serves it from the repo sub-path.
  base: process.env.NETLIFY ? "/" : "/Subscription-Management-System/",
  server: {
    port: 5173,
    open: true,
  },
});
