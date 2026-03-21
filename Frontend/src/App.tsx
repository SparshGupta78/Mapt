import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"; // 👈 add this

import Pathway from "./components/Pathway/Pathway"
import Dashboard from "./components/Dashboard/Dashboard"
import Home from "./components/Home/Home"
import ModulesDocs from "./components/Module/ModuleDocs"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathway" element={<Pathway />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pathway/:id" element={<ModulesDocs />} />
      </Routes>

      <Toaster
        position="top-right"
        richColors
        expand
        duration={3000}
        closeButton
        theme="dark"
      />
    </>
  );
}

export default App