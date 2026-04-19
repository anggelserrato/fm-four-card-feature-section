import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FourCardSection from './components/FourCardSection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FourCardSection />
  </StrictMode>
);
