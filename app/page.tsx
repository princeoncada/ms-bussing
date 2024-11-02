import Hero from '@/components/home-components/Hero';
import About from '@/components/home-components/About';
import Services from '@/components/home-components/Services';
import Fleet from '@/components/home-components/Fleet';
import Contact from '@/components/home-components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Contact />
    </div>
  );
}
