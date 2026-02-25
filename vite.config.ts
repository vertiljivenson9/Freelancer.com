import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // 'base' debe ser '/' si tu sitio está en la raíz de un dominio,
  // o './' si está en una subcarpeta. Para Cloudflare Pages, normalmente '/' funciona bien.
  base: '/',
  plugins: [react()], // Solo el plugin oficial de React
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})