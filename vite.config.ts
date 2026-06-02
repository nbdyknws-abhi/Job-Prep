import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers
    target: 'es2020',
    // Disable source maps in production for security & smaller bundles
    sourcemap: false,
    // Raise chunk size warning limit (our data files are intentionally large)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // React core — changes rarely
          'vendor-react': ['react', 'react-dom'],
          // Animation lib — heavy, isolate it
          'vendor-framer': ['framer-motion'],
          // Icon lib
          'vendor-icons': ['lucide-react'],
        },
        // Asset file naming with content hash for long-term caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Minify with esbuild (default, fast)
    minify: 'esbuild',
  },
  // Optimize deps during dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
