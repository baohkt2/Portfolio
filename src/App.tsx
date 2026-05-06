import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    // Add title and meta tags for SEO
    document.title = "Bao Nguyen | Professional Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio of Bao Nguyen, showcasing skills, projects, and contact information.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional portfolio of Bao Nguyen, showcasing skills, projects, and contact information.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} Bao Nguyen. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
