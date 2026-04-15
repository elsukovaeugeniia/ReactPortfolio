import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Очищает папку dist перед сборкой
    sourcemap: false, // Отключает source maps для уменьшения размера
    rollupOptions: {
      external: [],
      output: {
        // Минимизируем имена чанков
        chunkFileNames: 'assets/chunk-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});
