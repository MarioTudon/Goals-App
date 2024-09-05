import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname,'src'),
  base:'',
  plugins: [react(),createHtmlPlugin({minify:true})]
})
