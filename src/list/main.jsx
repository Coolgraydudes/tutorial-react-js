import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Task from './tes'
import List from './List'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List/>
  </StrictMode>,
)
