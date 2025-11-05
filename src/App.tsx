import React, { useEffect, useRef, useState } from 'react';
import type { ElementType, Dispatch, SetStateAction } from 'react';
import { Home, User, Code, Briefcase, Rocket, Mail, Menu, X, Github, Linkedin, Copy, ExternalLink } from 'lucide-react';

// --- NEW: Import the CSS file ---
import './App.css';

import profileImage from './assets/profile.JPG'; // adjust path


// --- Section Components ---
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
        
        {/* --- START OF CHANGES --- */}

        {/* This outer div no longer needs a fixed height or overflow.
          We can also remove the redundant rounded-2xl and ring-glow.
          I've added 'flex items-center justify-center' to center the card vertically
          if the text content on the left is very tall.
        */}
        <div className="relative flex items-center justify-center">
          
          {/* This div is now the main card. 
            It has max-w-sm to control the width, and the image's h-auto
            will now correctly set the height without being cut off.
            I also removed 'flex items-center justify-center' as it's not needed
            when the img is 'w-full'.
          */}
          <div className="relative max-w-sm mx-auto rounded-2xl ring-glow overflow-hidden bg-white">
            <img
              src={profileImage}
              alt="Profile"
              className="object-contain w-full h-auto rounded-2xl"
            />
          </div>  
        </div>
        
        {/* --- END OF CHANGES --- */}

      </div>
    </div>
  </section>
);


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
const FuturePlansPage = () => (
  <section id="future" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Future Plans</h2>
    <div className="mt-8 rounded-2xl p-6 md:p-10 thin-border" style={{ background: 'var(--card)' }}>
      <p className="max-w-3xl" style={{ color: 'var(--text)' }}>
        AWS, Azure certifications, learning DevOps fundamentals and Network Engineering, contributing to open-source projects, exploring AI/ML applications, attending tech conferences, and networking with industry professionals.
      </p>
    </div>
  </section>
);
const ContactPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const showCopied = (id: string, text: string) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopiedId(id);
    window.setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1200);
  };

  return (
  <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Contact</h2>
    <div className="mt-10 grid gap-4 sm:gap-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="pill group relative flex-1 flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-semibold thin-border hover-energize"
          style={{ background: 'var(--card)', color: 'var(--heading)' }}
          aria-label="Copy GitHub URL"
          onClick={() => showCopied('github', 'https://github.com/AshwinJ127')}
        >
          <Github className="w-5 h-5" /> github.com/AshwinJ127
          <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span
            className="absolute -top-3 right-3 text-xs rounded-full px-2 py-0.5"
            style={{ background: 'var(--accent)', color: '#ffffff', opacity: copiedId === 'github' ? 1 : 0, transition: 'opacity 160ms ease' }}
          >
            Copied!
          </span>
        </button>
        <a
          href="https://github.com/AshwinJ127"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-3 text-base font-semibold btn-outline thin-border flex items-center gap-2"
          aria-label="Open GitHub in new tab"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="pill group relative flex-1 flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-semibold thin-border hover-energize"
          style={{ background: 'var(--card)', color: 'var(--heading)' }}
          aria-label="Copy LinkedIn URL"
          onClick={() => showCopied('linkedin', 'https://www.linkedin.com/in/ashwinj127')}
        >
          <Linkedin className="w-5 h-5" /> linkedin.com/in/ashwinj127
          <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span
            className="absolute -top-3 right-3 text-xs rounded-full px-2 py-0.5"
            style={{ background: 'var(--accent)', color: '#ffffff', opacity: copiedId === 'linkedin' ? 1 : 0, transition: 'opacity 160ms ease' }}
          >
            Copied!
          </span>
        </button>
        <a
          href="https://www.linkedin.com/in/ashwinj127"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-3 text-base font-semibold btn-outline thin-border flex items-center gap-2"
          aria-label="Open LinkedIn in new tab"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="pill group relative flex-1 flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-semibold thin-border hover-energize"
          style={{ background: 'var(--card)', color: 'var(--heading)' }}
          aria-label="Copy email address"
          onClick={() => showCopied('email', 'ashwinj127@gmail.com')}
        >
          <Mail className="w-5 h-5" /> ashwinj127@gmail.com
          <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span
            className="absolute -top-3 right-3 text-xs rounded-full px-2 py-0.5"
            style={{ background: 'var(--accent)', color: '#ffffff', opacity: copiedId === 'email' ? 1 : 0, transition: 'opacity 160ms ease' }}
          >
            Copied!
          </span>
        </button>
        <a
          href="mailto:ashwinj127@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-3 text-base font-semibold btn-outline thin-border flex items-center gap-2"
          aria-label="Open email in new tab"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
    <p className="mt-6 text-center" style={{ color: 'var(--text)' }}>
      I’m happy to connect about internships, projects, or anything interesting you’re building.
    </p>
  </section>
  );
};
// --- End of Placeholder Pages ---

// --- Props type definition for NavButton ---
interface NavButtonProps {
  page: string;
  label: string;
  icon: ElementType;
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  isMobile?: boolean;
  href: string;
  onNavigate?: () => void;
}

/**
 * A reusable navigation button component
 */
const NavButton: React.FC<NavButtonProps> = ({
  page,
  label,
  icon: Icon,
  currentPage,
  setCurrentPage,
  isMobile = false,
  href,
  onNavigate,
}) => (
  <a
    href={href}
    onClick={() => {
      setCurrentPage(page);
      onNavigate && onNavigate();
    }}
    className={`
      flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200
      text-base font-medium relative overflow-hidden
      ${isMobile ? 'w-full justify-center text-lg' : ''}
      ${currentPage === page ? '' : 'hover-energize'}
    `}
    style={
      currentPage === page
        ? { background: 'var(--card)', color: 'var(--heading)', borderBottom: '2px solid var(--accent)' }
        : { color: 'var(--heading)', background: 'transparent' }
    }
  >
    <Icon className="w-4 h-4" />
    <span className="transition-colors duration-200">{label}</span>
  </a>
);

/**
 * Main App Component
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, page: 'Home' },
    { name: 'About Me', icon: User, page: 'AboutMe' },
    { name: 'Projects', icon: Code, page: 'Projects' },
    { name: 'Experience', icon: Briefcase, page: 'Experience' },
    { name: 'Future Plans', icon: Rocket, page: 'FuturePlans' },
    { name: 'Contact', icon: Mail, page: 'Contact' },
  ];

  const leftItems = navItems.slice(0, 3);
  const rightItems = navItems.slice(3, 6);

  // Scroll-spy
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  useEffect(() => {
    const ids = ['home','about','projects','experience','future','contact'];
    ids.forEach((id) => {
      sectionsRef.current[id] = document.getElementById(id);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          const map: Record<string, string> = {
            home: 'Home',
            about: 'AboutMe',
            projects: 'Projects',
            experience: 'Experience',
            future: 'FuturePlans',
            contact: 'Contact',
          };
          setCurrentPage(map[id] ?? 'Home');
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );
    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const renderPage = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'AboutMe':
        return <AboutMePage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Experience':
        return <ExperiencePage />;
      case 'FuturePlans':
        return <FuturePlansPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(255,255,255,0.9)', borderBottom: '1px solid var(--heading)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:grid md:grid-cols-3 items-center h-20">
            <div className="flex items-center gap-1 justify-start">
              {leftItems.map((item) => (
                <NavButton
                  key={item.page}
                  page={item.page}
                  label={item.name}
                  icon={item.icon}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  href={`#${item.page === 'Home' ? 'home' : item.page === 'AboutMe' ? 'about' : item.page.toLowerCase()}`}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <span
                className="text-4xl md:text-4xl font-extrabold tracking-tight select-none"
                style={{ color: 'var(--heading)', cursor: 'default' }}
              >
                Ashwin Joshi
              </span>
            </div>
            <div className="flex items-center gap-1 justify-end">
              {rightItems.map((item) => (
                <NavButton
                  key={item.page}
                  page={item.page}
                  label={item.name}
                  icon={item.icon}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  href={`#${item.page === 'FuturePlans' ? 'future' : item.page.toLowerCase()}`}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center justify-between h-16 px-2">
            <span
              className="text-xl font-extrabold select-none"
              style={{ color: 'var(--heading)', cursor: 'default' }}
            >
              Ashwin Joshi
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md"
              style={{ color: 'var(--heading)', background: isMobileMenuOpen ? 'var(--card)' : 'transparent' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-slideDown" style={{ background: 'rgba(255,255,255,0.9)', borderTop: '1px solid var(--heading)' }}>
            {navItems.map((item) => (
              <NavButton
                key={item.page}
                page={item.page}
                label={item.name}
                icon={item.icon}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isMobile={true}
                href={`#${item.page === 'Home' ? 'home' : item.page === 'AboutMe' ? 'about' : item.page === 'FuturePlans' ? 'future' : item.page.toLowerCase()}`}
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
        )}
      </nav>

      {/* All sections stacked for scroll + scroll-spy */}
      <main>
        <div id="home" data-section>
          {currentPage === 'Home' && renderPage()}
          {/* also render when not active to keep anchors available */}
          {currentPage !== 'Home' && <HomePage />}
        </div>
        <div id="about" data-section>
          <AboutMePage />
        </div>
        <div id="projects" data-section>
          <ProjectsPage />
        </div>
        <div id="experience" data-section>
          <ExperiencePage />
        </div>
        <div id="future" data-section>
          <FuturePlansPage />
        </div>
        <div id="contact" data-section>
          <ContactPage />
        </div>
      </main>
    </div>
  );
}