import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-beige dark:bg-brand-charcoal overflow-x-hidden transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <AppointmentSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;