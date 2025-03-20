
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Enable compression in development
    open: true,
  },
  plugins: [
    react(),
    // Only use component tagger in development
    mode === "development" && componentTagger(),
    // Add bundle visualizer in build mode
    mode === "production" && visualizer({ 
      open: false, 
      gzipSize: true, 
      brotliSize: true 
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification and code splitting
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom', 
            'framer-motion'
          ],
          ui: [
            '@radix-ui/react-slot',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ]
        },
      },
    },
    // Enable source maps in development only
    sourcemap: mode === "development",
    // Enable proper chunk loading
    chunkSizeWarningLimit: 1000,
  },
  // CSS optimization
  css: {
    devSourcemap: mode === "development",
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}));
