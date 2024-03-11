import type { NextPage, Metadata } from 'next';

import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';

export const metadata: Metadata = {
  title: 'Yuta Kusuno',
};

const Home: NextPage = () => {
  return (
    <>
      <section id='about'>
        <About />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='projects'>
        <Projects />
      </section>
    </>
  );
};

export default Home;
