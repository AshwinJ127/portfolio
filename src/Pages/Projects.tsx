import React from 'react';

const projects = [
  {
    id: 1,
    title: "Python Code Quality Analyzer",
    description: "Engineered a command-line tool to evaluate Python code quality using metrics like cyclomatic complexity. It integrates AST analysis and the Radon library to parse and score code files.",
    tags: ["Python", "AST", "Radon", "CLI"]
    //
  },
  {
    id: 2,
    title: "NBA Games Website",
    description: "Designed and built a responsive website featuring three interactive NBA games. I implemented all dynamic gameplay logic using vanilla JavaScript and styled the UI with CSS for a clean, modern user experience.",
    tags: ["JavaScript", "HTML", "CSS", "Netlify"]
    //
  },
  {
    id: 3,
    title: "AI-Enhanced Cybersecurity Threat Detector",
    description: "Currently developing a cybersecurity tool that leverages machine learning to identify and mitigate potential threats in real-time network traffic. Utilizing TensorFlow for model training and GitHub Actions for continuous integration and deployment.",
    tags: ["Python", "Machine Learning", "Cybersecurity", "TensorFlow", "GitHub Actions", "CI/CD"]
    //
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