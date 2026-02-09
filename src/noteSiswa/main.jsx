import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NoteSiswaApp from './NoteSiswaApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteSiswaApp/>
  </StrictMode>,
)
