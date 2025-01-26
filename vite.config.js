import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    host: "0.0.0.0", // Listen on all IP addresses
  },
});
