import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://school-backend-2-qiyf.onrender.com/api',
      '/uploads': 'https://school-backend-2-qiyf.onrender.com/uploads',
    },
  },
})
