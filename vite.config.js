import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'https://github.com/alejandroperez1103/Proyecto_Cliente'; 

export default defineConfig({
  base: `/${repoName}/`, 
  
  build: {
    outDir: 'docs' 
  },
  
  plugins: [react()],
})