
import { createRoot } from 'react-dom/client'
import App from './App.js'  // Garantindo que a extensão .js seja incluída
import './index.css'

// Monta o aplicativo no elemento root
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
