import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Pathway from "./components/Pathway/Pathway";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pathway" element={<Pathway />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App