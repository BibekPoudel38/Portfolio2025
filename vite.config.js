import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        eesa: resolve(root, 'eesa/index.html'),
        research: resolve(root, 'research/index.html'),
        mst: resolve(root, 'research/mst/index.html'),
        clinicalTranslation: resolve(root, 'research/clinical-translation/index.html'),
      },
    },
  },
})
