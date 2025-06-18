import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist'
	},
	resolve: {
		alias: {
			'@services': path.resolve(__dirname, './src/services'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@views': path.resolve(__dirname, './src/views'),
			'@components': path.resolve(__dirname, './src/components'),
		},
  server: {
    host: true,
    allowedHosts: ['f71d-2804-214-4011-fc0-1de-5e33-6f0b-cf62.ngrok-free.app'],
    }
	}
})
