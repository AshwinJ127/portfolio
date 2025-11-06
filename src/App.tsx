import React, { useEffect, useRef, useState } from 'react';
import type { ElementType, Dispatch, SetStateAction } from 'react';
import { Home, User, Code, Briefcase, Rocket, Mail, Menu, X, Github, Linkedin, Copy, ExternalLink } from 'lucide-react';

import './App.css';
import HomePage from './Pages/HomePage';
import AboutMePage from './Pages/AboutMe';
import ProjectsPage from './Pages/Projects';
import ExperiencePage from './Pages/Experience';

// --- Section Components ---
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