
const AboutMePage = () => {
  const technologies = [
    'Python', 'TypeScript', 'Go', 'Rust', 'Java', 'React', 'Next.js',
    'Node.js', 'FastAPI', 'SQL', 'PostgreSQL', 'MongoDB', 'Docker',
    'AWS', 'TensorFlow', 'PyTorch', 'Kafka', 'Swift', 'TailwindCSS', 'Git'
  ];

  const courses = [
    'Data Structures & Algorithms', 'Computer Organization', 'Operating Systems',
    'Machine Learning', 'Database Management Systems',
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn overflow-visible">
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>
        About <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">Me</span>
      </h2>
      
      <div className="mt-8 grid md:grid-cols-12 gap-6 items-start">
        
        <div className="md:col-span-5 rounded-2xl p-6 md:p-8 thin-border" style={{ background: 'var(--card)', maxHeight: 'none' }}>
          <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
            I'm a Computer Science student at UCLA specializing in full-stack development and machine learning, currently interning at Tesla where I build AI agents and internal tooling for the traffic engineering team. I founded Flock, a real time student rideshare app that has grown to hundreds of active users on the App Store, and I lead its full stack development using React, TypeScript, and WebSockets. My background also spans clinical software engineering at the UCLA BioCybernetics Lab, where I built an iOS app that cut treatment evaluation time in half, and AI research applying scikit-learn and TensorFlow to financial data. I like building applications that carry real production weight, from architecture through deployment.
          </p>
        </div>

        <div className="md:col-span-4 rounded-2xl p-6 md:p-8 thin-border" style={{ background: 'var(--card)' }}>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--heading)' }}>
            Education
          </h3>
          <div className="mt-4">
            <p className="font-medium" style={{ color: 'var(--heading)' }}>
              University of California, Los Angeles
            </p>
            <p className="text-sm" style={{ color: 'var(--text)' }}>
              B.S. in Computer Science, GPA 3.85/4.0
            </p>
            <p className="text-sm" style={{ color: 'var(--text)' }}>
              Graduating 2028
            </p>

            <p className="text-sm font-medium mt-4" style={{ color: 'var(--heading)' }}>
              Relevant Coursework:
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {courses.map((course) => (
                <span 
                  key={course} 
                  className="rounded-full px-3 py-1 text-xs font-medium transition-all hover:shadow-md"
                  style={{ background: 'rgba(0, 0, 0, 0.04)', color: 'var(--text)' }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-3 rounded-2xl p-6 md:p-8 thin-border" style={{ background: 'var(--card)' }}>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--heading)' }}>
            Skills & Technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="rounded-full px-3 py-1 text-sm font-medium transition-transform hover:scale-105"
                style={{ background: 'var(--accent)', color: '#ffffff' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutMePage;