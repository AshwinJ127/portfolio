import React, { useState } from 'react';
import { Github, Linkedin, Copy, ExternalLink, Mail } from 'lucide-react';

const ContactPage = () => {
  const [copiedId, setCopiedId] = useState(null);
  
  // This function uses document.execCommand for compatibility in restricted environments
  // but falls back to navigator.clipboard if available.
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {
        // Fallback for failure
        fallbackCopyTextToClipboard(text);
      });
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  };

  const showCopied = (id, text) => {
    copyToClipboard(text);
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
      I'm happy to connect about internships, projects, or anything interesting you're building.
    </p>
  </section>
  );
};

export default ContactPage;