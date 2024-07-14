//import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use the '@' symbol to alias the 'src' directory
      '@': resolve(__dirname, 'src'),
    },
  },
});
