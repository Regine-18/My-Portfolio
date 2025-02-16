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
      <div className="bg-lightMode dark:bg-darkMode">
          <Homepage />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Contact />
      </div>
    </ThemeProvider>
  );
}
