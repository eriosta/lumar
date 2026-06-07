import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

let lastUpdated: string
try {
  lastUpdated = execSync('git log -1 --format=%cI -- src/data/events.ts').toString().trim()
} catch {
  lastUpdated = new Date().toISOString()
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  define: {
    __LAST_UPDATED__: JSON.stringify(lastUpdated),
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
