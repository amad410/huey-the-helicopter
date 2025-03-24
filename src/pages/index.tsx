import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <Products />
      <CallToAction />
      <ContactSection />
    </main>
  );
}
