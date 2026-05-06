import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Layout className="text-gradient-accent" size={32} />, desc: 'React, Next.js, Vue, Tailwind CSS' },
    { name: 'Backend Development', icon: <Server className="text-gradient-accent" size={32} />, desc: 'Node.js, Express, Python, Django' },
    { name: 'Database Management', icon: <Database className="text-gradient-accent" size={32} />, desc: 'PostgreSQL, MongoDB, Redis' },
    { name: 'API Design', icon: <Code className="text-gradient-accent" size={32} />, desc: 'RESTful APIs, GraphQL' },
    { name: 'DevOps & CI/CD', icon: <Terminal className="text-gradient-accent" size={32} />, desc: 'Docker, GitHub Actions, AWS' },
    { name: 'Mobile App Dev', icon: <Smartphone className="text-gradient-accent" size={32} />, desc: 'React Native, Flutter' },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My <span className="text-gradient">Expertise</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive skill set covering the full spectrum of modern web and application development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={`glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '12px', 
                background: 'rgba(255,255,255,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
