import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Solutions from './components/Solutions';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthPages from './components/auth/AuthPages';

function App() {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <AuthPages onClose={() => setShowAuth(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAuthClick={() => setShowAuth(true)} />
      <Hero />
      <Features />
      <Technology />
      <Solutions />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App