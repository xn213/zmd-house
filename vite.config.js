import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, ".", dir);
// }

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      components: path.join(__dirname, "./src/components"),
      utils: path.join(__dirname, "./src/utils"),
    },
  },
  server: {
    host: true,
    strictPort: true,
    proxy: {
      "/houselist": {
        target: "https://map.ke.com/proxyApi/i.c-pc-webapi.ke.com/map/houselist",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/houselist/, ""),
      },
      "/110000-inspection": {
        target: "https://ke-image.ljcdn.com/110000-inspection",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/110000-inspection/, ""),
      },
    },
  },
});
