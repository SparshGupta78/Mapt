import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { OutputProvider } from "@/context/CourseContext";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <OutputProvider>
      <App />
    </OutputProvider>
  </BrowserRouter>
)