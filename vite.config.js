import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Настройки сборки
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Кастомизация имен файлов
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.png') || assetInfo.name.endsWith('.jpg')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
