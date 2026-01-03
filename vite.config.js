import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base: '/hana/',
  build : {
    rollupOptions :  {
      output: {
        manualChunks: {
          vendor : ['react', 'react-dom']
        }
      }
    }
  },
  resolve: {
        alias: {
          '@': resolve(process.cwd(), 'src'),
        },
      },
})
