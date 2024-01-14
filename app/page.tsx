import type { NextPage, Metadata } from "next";

import AboutV2 from "../components/about-v2";
import ExperienceV2 from "../components/experience-v2";
import Projects from "../components/projects";

export const metadata: Metadata = {
  title: "Yuta Kusuno Portfolio",
};

const Home: NextPage = () => {
  return (
    <>
      <section id="about">
        <AboutV2 />
      </section>
      <section id="experience">
        <ExperienceV2 />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
};

export default Home;
