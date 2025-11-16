import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  experimental: {
    renderBuiltUrl(filename: string, { type }: { type: 'public' | 'asset' }) {
      if (type === 'public') return
      return `/loginApp/${filename}`
    },
  },
  build: {
    outDir: './build',}
})
