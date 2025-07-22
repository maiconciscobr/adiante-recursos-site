import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Simulator from './components/Simulator/Simulator';
import Differentials from './components/Differentials/Differentials';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Simulator />
        <Differentials />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

