import type { NextPage } from "next";
import Head from "next/head";

import About from "../components/about";
import Projects from "../components/projects";
import Experience from "../components/experience";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yuta Kusuno Portfolio</title>
      </Head>
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
