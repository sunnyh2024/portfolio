import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Work from "./pages/work/work";
import Gallery from "./pages/gallery/gallery";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Layout from "./components/pageLayout/layout";

function App() {
  const { scrollY } = useScroll();
  const { height } = useWindowDimensions();
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const offset = latest + height / 2;
    if (offset <= height && location.hash !== "#home") {
      navigate("#home");
    } else if (
      offset > height &&
      offset <= height * 2 &&
      location.hash !== "#about"
    ) {
      navigate("#about");
    } else if (
      offset > height * 2 &&
      offset <= height * 3 &&
      location.hash !== "#work"
    ) {
      navigate("#work");
    } else if (
      offset > height * 3 &&
      offset <= height * 4 &&
      location.hash !== "#projects"
    ) {
      navigate("#projects");
    } else if (
      offset > height * 4 &&
      offset <= height * 5 &&
      location.hash !== "#gallery"
    ) {
      navigate("#gallery");
    }
  });

  return (
      <div>
        <div id="#home">
          <Landing />
        </div>
        <Layout>
          <div id="#about">
            <About />
          </div>
          <div id="#work">
            <Work />
          </div>
          <div id="#projects">
            <Projects />
          </div>
          <div id="#gallery">
            <Gallery />
          </div>
        </Layout>
      </div>
  );
}

export default App;
