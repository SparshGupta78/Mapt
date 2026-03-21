import { Routes, Route } from "react-router-dom";
import Pathway from "./components/Pathway/Pathway";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ModulesDocs from "./components/Module/ModuleDocs";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { Toaster } from "sonner";
import JobDetail from "./components/JobDetail/JobDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/job-details" element={<JobDetail />} />
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