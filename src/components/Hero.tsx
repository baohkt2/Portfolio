import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div style={{ flex: 1 }} className="animate-fade-in">
          <h2 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 500 }}>
            Hello, I am
          </h2>
          <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            <span className="text-gradient">Bao Nguyen</span><br />
            Full Stack Developer
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', lineHeight: 1.6 }}>
            I build exceptional and accessible digital experiences for the web. Turning complex problems into elegant, beautiful, and intuitive designs.
          </p>
          <div className="flex gap-4" style={{ marginBottom: '3rem' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/baohkt2" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
              <Github size={20} />
            </a>
            <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@nguyehoaibao.io.vn" style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="animate-fade-in delay-200">
          <div style={{ 
            width: '400px', 
            height: '400px', 
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.5) 0%, rgba(56, 189, 248, 0.5) 100%)',
            boxShadow: '0 0 50px rgba(124, 58, 237, 0.3)',
            animation: 'morph 8s ease-in-out infinite',
            position: 'relative',
            overflow: 'hidden'
          }}>
             <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coding" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.8 }} />
          </div>
          <style>{`
            @keyframes morph {
              0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
              50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
              100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;
