import About from "./About"
import Contact from "./Contact"
import Facts from "./Facts";
import Projects from "./Projects"
import Section from "./Section"
import Services from "./Services"

function Home() {
  return (
    <>
      <Section />
      <About />
      <Facts />
      <Services />
      <Contact />
      <Projects />
    </>
  );
}

export default Home;