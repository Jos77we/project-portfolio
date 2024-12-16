import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// Replicate `__dirname` in ESM
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Explicitly set the output directory
    emptyOutDir: true, // Clean the output directory before building
  },
  // Configure the public directory to include root files like `_headers` and `_redirects`
  publicDir: path.resolve(__dirname),
});
