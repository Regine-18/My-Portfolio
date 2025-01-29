'use client';
import { ThemeProvider} from 'next-themes';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function Home() {

  return (
    <ThemeProvider attribute="class">
      {/* Apply dynamic background color based on the current theme */}
      <div className="bg-light-mode dark:bg-dark-mode">
        {/* Section Components */}
        <Homepage />
        <section id="about-me">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="section">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
}
