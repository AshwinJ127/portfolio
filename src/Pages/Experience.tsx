import React from 'react';

const ExperiencePage = () => (
  <section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Experience</h2>
    <ol className="mt-8 relative" style={{ borderLeft: '1px solid var(--heading)' }}>
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>ML Researcher</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>2022</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Engineered automated data pipelines to collect and preprocess over 50,000 financial news articles using BeautifulSoup, applying sentiment analysis with CoreNLP and Flair to extract market-relevant insights. Developed and evaluated a logistic regression model across multiple temporal windows to predict directional stock price movement, achieving up to 62% accuracy and benchmarking performance against baseline models
          </p>
        </div>
      </li>
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Chief Technology Officer</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>2025 — Present</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Led full-stack development of Flock, a real-time student rideshare application built with React, TailwindCSS, SQL, and WebSockets, designing and implementing key features such as ride posting, location-based search, and live in-app messaging to enable seamless communication between users
          </p>
        </div>
      </li>

    </ol>
  </section>
);

export default ExperiencePage;