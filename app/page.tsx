import type { NextPage, Metadata } from "next";

import About from "../components/about";
import Projects from "../components/projects";
import Experience from "../components/experience";

export const metadata: Metadata = {
  title: "Yuta Kusuno Portfolio",
};

const Home: NextPage = () => {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      {/* <section id="skills">
        <Skills />
      </section> */}
      <section id="projects">
        <Projects />
      </section>
    </>
  );
};

export default Home;
