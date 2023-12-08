import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [],
  allowedHosts: [".localhost"],
	server: { host: '0.0.0.0', port: 8000 },
	clearScreen: false,
})
