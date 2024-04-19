import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.warn("Did this even run")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'docs'
  }
})
