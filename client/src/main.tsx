import { App } from '@/root';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
