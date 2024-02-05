import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/",
=======
  base: "/PORTO-MAUL/",
>>>>>>> 05b61e6bfc1dd9e9c93d18526ba5d37c4ce1301c
  define: {
    'process.env': {}
  }
})
