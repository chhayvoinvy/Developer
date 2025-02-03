import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../public/core.css';
import Game from './_Game.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
