import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Fleet from './components/Home/Fleet';
import Safety from './components/Home/Safety';
import Contact from './components/Home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Safety />
      <Contact />
    </div>
  );
}
