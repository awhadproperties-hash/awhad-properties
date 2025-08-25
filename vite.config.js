import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/awhad-properties/",
  plugins: [react(), sentryVitePlugin({
    org: "thamir-siddik",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})
