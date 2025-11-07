import React from 'react';
import profileImage from '../assets/profile.JPG';

const HomePage = () => (
  <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--card)] thin-border px-3 py-1 text-xs md:text-sm text-[var(--heading)]/80">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Open to opportunities
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold tracking-tight" style={{ color: 'var(--heading)' }}>
            UCLA Computer Science Student
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl" style={{ color: 'var(--text)' }}>
            Strong background in programming fundamentals, DSA, web dev, and AI. 
            Passion for building projects with an impact on daily lives.
            Committed to learning and growing as a developer every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg text-white font-semibold px-4 py-2 hover-energize"
               style={{ background: 'var(--accent)' }}>
              View Projects
            </a>
            <a href="#contact" className="rounded-lg font-semibold px-4 py-2 thin-border btn-outline"
               style={{ background: 'var(--card)', color: 'var(--heading)' }}>
              Get in touch
            </a>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="relative max-w-sm mx-auto rounded-2xl ring-glow overflow-hidden bg-white">
            <img
              src={profileImage}
              alt="Profile"
              className="object-contain w-full h-auto rounded-2xl"
            />
          </div>  
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;