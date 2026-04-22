import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages: troque 'portfolio' pelo nome do seu repositório
  // Se usar domínio customizado (ex: vitorem.dev), mude para '/'
  base: '/portfolio/',
})
