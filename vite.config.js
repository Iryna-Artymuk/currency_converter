import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@page': '/src/page',
    },
  },
  plugins: [react()],
  base: '/currency_converter/',
  define: {
  
  },
});
