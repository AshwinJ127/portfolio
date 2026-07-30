
const FuturePlansPage = () => (
  <section id="future" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Future Plans</h2>
    <div className="mt-8 rounded-2xl p-6 md:p-10 thin-border" style={{ background: 'var(--card)' }}>
      <div className="max-w-3xl space-y-6" style={{ color: 'var(--text)' }}>
        <p>
          I am currently deepening my expertise in <strong style={{ color: 'var(--accent)' }}>Systems Programming (Rust/C++)</strong> and <strong style={{ color: 'var(--accent)' }}>Distributed Infrastructure</strong>, aiming to architect lower-latency, high-performance applications.
        </p>
        <p>
          I am actively seeking <strong style={{ color: 'var(--accent)' }}>Software Engineering Internships for Summer 2027</strong>, where I can apply what I built at Tesla, Flock, and the UCLA BioCybernetics Lab to backend systems and security engineering at scale.
        </p>
      </div>
    </div>
  </section>
);

export default FuturePlansPage;