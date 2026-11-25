import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /Far-From-Home/, not the domain root.
export default defineConfig({
  base: '/Far-From-Home/',
  plugins: [react()],
})
