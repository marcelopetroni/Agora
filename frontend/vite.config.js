import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    host: true,
    allowedHosts: ['f71d-2804-214-4011-fc0-1de-5e33-6f0b-cf62.ngrok-free.app'],
  }
})
