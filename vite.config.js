import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import HelloWorld from './src/hello-world/HelloWorld'
import Counter from './src/counter/Counter'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/dataSiswa.html"
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        Hello_world: "hello-world.html",
        Contact: "contact.html",
        task : "task.html",
        list : "list.html",
        counter : "counter.html",
        note : "note.html",
        note_siswa : "dataSiswa.html"
      }
    }
  }
})
