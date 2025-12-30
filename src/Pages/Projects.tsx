import React from "react";
const projects = [
  {
    id: 1,
    title: "AI Cybersecurity Threat Detector",
    description: "Built an AI-driven system identifying malicious network behavior with 90+% precision. Designed a real-time pipeline using Kafka and FastAPI capable of processing 12,000+ events/sec, visualized on a React dashboard.",
    tags: ["Python", "LightGBM", "Kafka", "FastAPI", "React"]
  },
  {
    id: 2,
    title: "rfx Modern Git Client",
    description: "Architected a version control tool featuring a Rust CLI and React/Tauri GUI. implemented a shared FFI backend to achieve a <2MB binary footprint and a Smart Sync system to prevent atomic merge conflicts.",
    tags: ["Rust", "Tauri", "TypeScript", "React", "Git"]
  },
  {
    id: 3,
    title: "Python Code Quality Analyzer",
    description: "Engineered a CLI tool to evaluate Python code quality using AST parsing and Radon metrics. Features stylized terminal output using Rich and seamless CI/CD integration for automated pull request quality checks.",
    tags: ["Python", "AST", "Radon", "Rich", "CI/CD"]
  }
];

const ProjectsPage = () => (
  <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>
      Selected <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">Projects</span>
    </h2>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <article key={project.id} className="group rounded-2xl thin-border transition overflow-hidden" style={{ background: 'var(--card)' }}>
          <div className="h-32" style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(230,57,70,0.12))' }} />
          <div className="p-5">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>{project.title}</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs" style={{ color: 'var(--text)' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded-md" style={{ background: '#ffffff', border: '1px solid #1111111a' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsPage;