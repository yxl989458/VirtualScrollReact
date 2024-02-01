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
    }
  }
})
