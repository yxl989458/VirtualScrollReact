import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, join } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      '@modules': join(__dirname, 'src/modules/'),
      '@constants': join(__dirname, 'src/constants/'),
      '@components': join(__dirname, 'src/components/'),
      '@stores': join(__dirname, 'src/stores/'),
      '@types': join(__dirname, 'src/types/'),
      '@hooks': join(__dirname, 'src/hooks/')
    }
  },
  build:{
    chunkSizeWarningLimit:1000,
    rollupOptions:{
      output:{
        manualChunks(path){
          if(path.includes('node_modules')){
            return 'vendor'
          }
        }
      }
    }
  }
})
