import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // root path is fine for main domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
