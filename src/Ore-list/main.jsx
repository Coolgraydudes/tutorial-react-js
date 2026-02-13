import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import OreList from './OreList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OreList/>
  </StrictMode>,
);