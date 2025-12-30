
const ExperiencePage = () => (
  <section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Experience</h2>
    <ol className="mt-8 relative" style={{ borderLeft: '1px solid var(--heading)' }}>
      
      {/* Experience 2: UCLA BioCybernetics Lab (Added from Resume) */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Software Engineer Intern</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>Oct 2025 — Present</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Architecting the pThyrosim computational engine to simulate thyroid hormone treatments. Engineered the companion iOS application using Swift and SwiftUI, directly translating clinical feedback into a functional mobile interface.
          </p>
        </div>
      </li>

      {/* Experience 1: Flock (Most Recent/Important) */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Founder & CTO</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>Apr 2025 — Present</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Leading full-stack development of Flock, a real-time student rideshare app using React, TailwindCSS, SQL, and WebSockets. Successfully deployed the application to the App Store, optimizing performance and ensuring security compliance for 100s of active student users.
          </p>
        </div>
      </li>


      {/* Experience 3: Duke University */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>ML Researcher</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>May 2022 — Sep 2022</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Engineered automated data pipelines to process over 50,000 financial news articles using BeautifulSoup and Flair. Developed a logistic regression model to predict stock price movement, achieving up to 62% accuracy across multiple temporal windows.
          </p>
        </div>
      </li>

    </ol>
  </section>
);

export default ExperiencePage;