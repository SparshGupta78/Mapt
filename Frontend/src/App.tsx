import { Routes, Route } from "react-router-dom";
import Pathway from "./components/Pathway/Pathway";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ModulesDocs from "./components/Module/ModuleDocs";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/pathway" element={<Pathway />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pathway/:id" element={<ModulesDocs />} />
    </Routes>
  )
}

export default App