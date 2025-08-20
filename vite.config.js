import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // ✅ Configuración React simplificada
    tailwindcss()
  ],

  // ✅ Optimizaciones de Build
  build: {
    // Chunk splitting mejorado
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks separados
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion']
        }
      }
    },
    // Compresión
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // ✅ Eliminar console.logs
        drop_debugger: true
      }
    },
    // Sourcemaps solo en desarrollo
    sourcemap: false,
    // Target moderno
    target: 'esnext'
  },

  // ✅ Optimizaciones de dependencias
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react'],
    exclude: []
  },

  // ✅ Performance del servidor de desarrollo
  server: {
    hmr: {
      overlay: false
    }
  }
})
