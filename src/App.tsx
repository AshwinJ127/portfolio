import React, { useEffect, useRef, useState } from 'react';
import type { ElementType, Dispatch, SetStateAction } from 'react';
import { Home, User, Code, Briefcase, Rocket, Mail, Menu, X } from 'lucide-react';

// --- NEW: Import the CSS file ---
import './App.css';

// --- Section Components ---
const HomePage = () => (
  <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
    <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--card)] thin-border px-3 py-1 text-xs md:text-sm text-[var(--heading)]/80">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Open to opportunities
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold tracking-tight" style={{ color: 'var(--heading)' }}>
            Building delightful web experiences
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl" style={{ color: 'var(--text)' }}>
            A clean, modern portfolio scaffold you can fill with your story,
            projects, and ambitions. Thoughtful motion, bold type, and elegant
            details.
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
        <div className="relative h-64 md:h-[28rem] rounded-2xl ring-glow">
          <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(230,57,70,0.10))' }} />
          <div className="absolute inset-6 rounded-xl" style={{ background: '#ffffff', border: '1px solid #1111111a' }} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="size-40 md:size-56 rounded-full blur-2xl animate-float"
                 style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,107,53,0.35), rgba(230,57,70,0.25))' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
const AboutMePage = () => (
  <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn overflow-visible">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>
      About <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">Me</span>
    </h2>
    <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2 rounded-2xl p-6 md:p-8 thin-border" style={{ background: 'var(--card)', maxHeight: 'none' }}>
        <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
          Add your background, interests, and the problems you love to solve. Keep it human,
          specific, and concise. You can later swap this copy with your own.
        </p>
      </div>
      <div className="rounded-2xl p-6 md:p-8 thin-border" style={{ background: 'var(--card)' }}>
        <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Tech</h3>
        <ul className="mt-3 space-y-2 text-sm" style={{ color: 'var(--text)' }}>
          <li>React, TypeScript</li>
          <li>Node, APIs</li>
          <li>Design Systems</li>
        </ul>
      </div>
    </div>
  </section>
);
const ProjectsPage = () => (
  <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>
      Selected <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">Projects</span>
    </h2>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1,2,3].map((i) => (
        <article key={i} className="group rounded-2xl thin-border transition overflow-hidden" style={{ background: 'var(--card)' }}>
          <div className="h-32" style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(230,57,70,0.12))' }} />
          <div className="p-5">
            <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Project {i}</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
              Short project description. Replace with your real work.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs" style={{ color: 'var(--text)' }}>
              <span className="px-2 py-1 rounded-md" style={{ background: '#ffffff', border: '1px solid #1111111a' }}>React</span>
              <span className="px-2 py-1 rounded-md" style={{ background: '#ffffff', border: '1px solid #1111111a' }}>TypeScript</span>
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
      {[1,2].map((i) => (
        <li key={i} className="relative pl-6 py-6">
          <span className="absolute left-0 top-7 -translate-x-1/2 size-2 rounded-full" style={{ background: 'var(--accent)' }} />
          <div className="rounded-xl p-5 thin-border" style={{ background: 'var(--card)' }}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Role Title {i}</h3>
              <span className="text-xs" style={{ color: 'var(--text)' }}>202{2+i} — Present</span>
            </div>
            <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
              Impact-focused bullet about work you did. Replace with your details.
            </p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
const FuturePlansPage = () => (
  <section id="future" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Future Plans</h2>
    <div className="mt-8 rounded-2xl p-6 md:p-10 thin-border" style={{ background: 'var(--card)' }}>
      <p className="max-w-3xl" style={{ color: 'var(--text)' }}>
        Share what you’re exploring next: a framework, a language, a product idea.
        Outline small milestones to show momentum.
      </p>
    </div>
  </section>
);
const ContactPage = () => (
  <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--heading)' }}>Contact</h2>
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <form className="rounded-2xl p-6 thin-border" style={{ background: 'var(--card)' }}>
        <div className="grid gap-4">
          <input placeholder="Your name" className="w-full rounded-lg px-3 py-2 placeholder:text-[#888] focus:outline-none" style={{ background: '#ffffff', border: '1px solid #1111111a', color: 'var(--heading)' }} />
          <input placeholder="Email" className="w-full rounded-lg px-3 py-2 placeholder:text-[#888] focus:outline-none" style={{ background: '#ffffff', border: '1px solid #1111111a', color: 'var(--heading)' }} />
          <textarea rows={4} placeholder="Message" className="w-full rounded-lg px-3 py-2 placeholder:text-[#888] focus:outline-none" style={{ background: '#ffffff', border: '1px solid #1111111a', color: 'var(--heading)' }} />
          <button type="button" className="mt-2 rounded-lg text-white font-semibold px-4 py-2 hover-energize" style={{ background: 'var(--accent)' }}>Send</button>
        </div>
      </form>
      <div className="rounded-2xl p-6 thin-border" style={{ background: 'var(--card)' }}>
        <h3 className="font-semibold" style={{ color: 'var(--heading)' }}>Links</h3>
        <ul className="mt-3 space-y-2 text-sm" style={{ color: 'var(--text)' }}>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  </section>
);
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
                className="text-2xl md:text-3xl font-extrabold tracking-tight select-none"
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