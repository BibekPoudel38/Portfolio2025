import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({

  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ], server: {

    // port: 3000  // Specify your desired port here

  }
})
