import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";
import ScrollManager from "./components/ScrollManager";
import ScrollToTopButton from "./components/ScrollToTopButton";

const HomePage = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <ScrollToTopButton />
  </>
);

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
}

export default App;
