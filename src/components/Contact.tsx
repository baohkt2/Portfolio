import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in <span className="text-gradient">Touch</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Ready to start your next project with me? That's great! Give me a call or send me an email and I will get back to you as soon as possible!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel animate-fade-in delay-100">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5fd' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                  <p>contact@nguyehoaibao.io.vn</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5fd' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</h4>
                  <p>+84 (123) 456-789</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5fd' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Location</h4>
                  <p>Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel animate-fade-in delay-200">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }} placeholder="Your Name" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }} placeholder="your@email.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none', resize: 'vertical' }} placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
            </form>
            <style>{`
              input:focus, textarea:focus {
                border-color: rgba(124, 58, 237, 0.5) !important;
                box-shadow: 0 0 10px rgba(124, 58, 237, 0.2);
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
