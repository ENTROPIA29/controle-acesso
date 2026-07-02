import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          SUPABASE_URL: process.env.VITE_SUPABASE_URL,
          SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY,
        }
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
})
