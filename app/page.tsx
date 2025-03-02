'use client';
import { ThemeProvider} from 'next-themes';
import Homepage from './components/Homepage';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function Home() {

  return (
    <ThemeProvider attribute="class">
      <div className="bg-lightMode dark:bg-darkMode">
        <section id="home">
          <Homepage />
        </section>
        <section id="about-me">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
}
