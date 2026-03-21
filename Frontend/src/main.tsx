import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { CourseProvider } from "@/context/CourseContext";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CourseProvider>
      <App />
    </CourseProvider>
  </BrowserRouter>
)