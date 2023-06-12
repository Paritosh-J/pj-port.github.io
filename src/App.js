import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar.js";
import Footer from "./Components/Layout/Footer.js";
import About from "./Components/Pages/About.js";
import Resume from "./Components/Pages/Resume.js";
import Projects from "./Components/Pages/Projects.js";
import Artwork from "./Components/Pages/Artwork.js";
import NotFound from "./Components/Pages/NotFound.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/artwork" element={<Artwork />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
