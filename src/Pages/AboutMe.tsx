import React from 'react';

const AboutMePage = () => {
  const technologies = [
    'Python', 'Java', 'SQL', 'TypeScript', 'React', 'Node.js',
    'Git', 'Pandas', 'scikit-learn', 'AWS', 'TensorFlow', 
    'Docker'
  ];

  const courses = [
    'Data Structures & Algorithms', 'Computer Organization', 'Logic Design',
    'Machine Learning', 'Web Applications', 'Database Management',
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn overflow-visible">
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>
        About <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">Me</span>
      </h2>
      
      <div className="mt-8 grid md:grid-cols-12 gap-6 items-start">
        
        <div className="md:col-span-5 rounded-2xl p-6 md:p-8 thin-border" style={{ background: 'var(--card)', maxHeight: 'none' }}>
          <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
            I'm a Computer Science student at UCLA specializing in full-stack development and machine learning. As the current CTO of Flock, I lead the end-to-end development of a real-time rideshare application, architecting the system using React, Node.js, and SQL. My background also includes AI research, where I engineered Python data pipelines and built predictive models using scikit-learn and TensorFlow. I am a proactive problem-solver, passionate about building scalable, data-driven applications from concept to production.
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
              B.S. in Computer Science
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