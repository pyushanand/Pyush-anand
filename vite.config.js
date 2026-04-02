import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), tailwindcss(),
  visualizer({
    open: true, // Auto-open stats.html
    filename: 'bundle-stats.html',
    gzipSize: true,
    brotliSize: true,
  })
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("react-icons")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
});