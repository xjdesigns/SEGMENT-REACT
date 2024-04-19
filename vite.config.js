import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    open: true,
    port: 4001
  },

  build: {
    minify: true,
    copyPublicDir: false,
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, 'src/lib/index.jsx'),
      formats: ['es'],
    },

    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',

    coverage: {
      include: ['src/lib/{elements,components}/*.jsx'],
      provider: 'v8',
      reporter: ['lcov', 'html', 'json', 'clover']
    },
  }
})
