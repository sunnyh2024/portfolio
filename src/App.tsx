import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Layout from "./pages/Layout";
import AboutPage from "./pages/About";
import WorkPage from "./pages/Work";
import ProjectPage from "./pages/Projects";
import NoPage from "./pages/NoPage";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="text-white font-mono">
      <Layout/>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
