import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '@styles': path.resolve(__dirname, 'app/styles'),
      '@assets': path.resolve(__dirname, 'app/assets'),
      '@types': path.resolve(__dirname, 'types'),
    }
  },
  server: {
    port: 3030,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  }
});
