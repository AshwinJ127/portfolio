import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Copy, ExternalLink, Mail } from 'lucide-react';
import { createPortal } from 'react-dom';

interface TooltipState {
  id: string;
  x: number;
  y: number;
  text: string;
}

const ContactPage: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopyTextToClipboard(text));
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: unable to copy', err);
    }
    document.body.removeChild(textArea);
  };

  const showCopied = (
    id: string,
    text: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    copyToClipboard(text);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      id,
      x: rect.right - 35,
      y: rect.top + 10,
      text: 'Copied!',
    });
    // --- CHANGED ---
    // Hide the component after 2.5s (was 1.8s)
    setTimeout(() => setTooltip(null), 2500);
  };

  interface TooltipProps {
    tooltip: TooltipState | null;
  }

  const Tooltip: React.FC<TooltipProps> = ({ tooltip }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (tooltip) {
        setVisible(true);
        // --- CHANGED ---
        // Start the fade-out at 2s (was 1.5s)
        const hide = setTimeout(() => setVisible(false), 2000);
        return () => clearTimeout(hide);
      }
    }, [tooltip]);

    if (!tooltip) return null;

    const tooltipStyle: React.CSSProperties = {
      position: 'fixed',
      left: tooltip.x,
      top: tooltip.y,
      transform: visible
        ? 'translate(-50%, -110%) scale(1)'
        : 'translate(-50%, -100%) scale(0.9)',
      opacity: visible ? 1 : 0,
      background: 'var(--accent)',
      color: '#fff',
      padding: '4px 10px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      zIndex: 99999,
      pointerEvents: 'none',
      // --- CHANGED ---
      // Make the transition take 0.5s (was 0.3s)
      transition:
        'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    };

    return createPortal(
      <div style={tooltipStyle}>
        {tooltip.text}
      </div>,
      document.body
    );
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 animate-fadeIn"
    >
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ color: 'var(--heading)' }}
      >
        Contact
      </h2>

      <div className="mt-10 grid gap-4 sm:gap-5">
        {/* GitHub */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="pill group relative flex-1 flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-semibold thin-border hover-energize"
            style={{ background: 'var(--card)', color: 'var(--heading)' }}
            onClick={(e) => showCopied('github', 'https://github.com/AshwinJ127', e)}
          >
            <Github className="w-5 h-5" /> github.com/AshwinJ127
            <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="https://github.com/AshwinJ127"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-3 text-base font-semibold btn-outline thin-border flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="pill group relative flex-1 flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-semibold thin-border hover-energize"
            style={{ background: 'var(--card)', color: 'var(--heading)' }}
            onClick={(e) =>
              showCopied('linkedin', 'https://www.linkedin.com/in/ashwinj127', e)
            }
          >
            <Linkedin className="w-5 h-5" /> linkedin.com/in/ashwinj127
            <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="https://www.linkedin.com/in/ashwinj127"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-3 text-base font-semibold btn-outline thin-border flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="pill group relative flex-1 flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-semibold thin-border hover-energize"
            style={{ background: 'var(--card)', color: 'var(--heading)' }}
            onClick={(e) => showCopied('email', 'ashwinj127@gmail.com', e)}
          >
            <Mail className="w-5 h-5" /> ashwinj127@gmail.com
            <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="mailto:ashwinj127@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-3 text-base font-semibold btn-outline thin-border flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="mt-6 text-center" style={{ color: 'var(--text)' }}>
        I'm happy to connect about internships, projects, or anything interesting
        you're building.
      </p>

      <Tooltip tooltip={tooltip} />
    </section>
  );
};

export default ContactPage;