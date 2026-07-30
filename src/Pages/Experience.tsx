
const ExperiencePage = () => (
  <section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Experience</h2>
    <ol className="mt-8 relative" style={{ borderLeft: '1px solid var(--heading)' }}>

      {/* Experience 1: Tesla */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Software Engineer Intern, Tesla</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>Jun 2026 — Sep 2026</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Built an AI agent for the traffic engineering team that enriches infrastructure alerts with contextual data and routes them to the correct on-call team, reducing manual triage across services. Developed an internal Go API that auto-generates monitoring alerts from service configurations at deploy time, standardizing coverage across 4,000+ services including L4 VIPs, Kubernetes VIPs, Varnish CDN, and DNS pools.
          </p>
        </div>
      </li>

      {/* Experience 2: The Bruin Group - Tixr */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Associate Consultant, The Bruin Group — Tixr</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>Jan 2026 — Present</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Built a feedback aggregation pipeline for Tixr, a live event ticketing platform, using the Claude API to parse and enrich Intercom, Reddit, and App Store conversations into structured tickets stored in PostgreSQL. Designed a classification system combining a deterministic keyword rubric with Claude based reasoning to auto categorize and route tickets, cutting redundant tickets by 60%.
          </p>
        </div>
      </li>

      {/* Experience 3: UCLA BioCybernetics Lab */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Software Engineer Intern, UCLA BioCybernetics Lab</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>Oct 2025 — Present</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Collaborating with clinical research leads to develop and refine pThyrosim, a computational engine that predicts and simulates the effects of thyroid hormone treatments, improving model accuracy by 30%. Engineered the companion iOS application using Swift and SwiftUI, letting patients and doctors view simulated medication effects and cutting treatment evaluation time by 50%.
          </p>
        </div>
      </li>

      {/* Experience 4: Flock */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Founder & Software Engineer, Flock</h3>
            <span className="text-xs" style={{ color: 'var(--text)' }}>Apr 2025 — Present</span>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
            Leading full-stack development of Flock, a real time student rideshare splitting app built with React, TailwindCSS, SQL, WebSockets, and TypeScript, including core features like secure ride posting, optimized ride search, and concurrent live messaging. Deployed the iOS app to the App Store, growing adoption to hundreds of student users while cutting transport costs by up to 75%. Built a full testing suite spanning unit, end to end, and API tests with Jest and Playwright, and ran A/B tests on core user flows that improved ride posting and matching by 40%.
          </p>
        </div>
      </li>

      {/* Experience 5: Duke University */}
      <li className="relative pl-6 py-6">
        <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>ML Researcher, Duke University</h3>
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