import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TalkBuddyLanding from './TalkBuddyLanding';

// Placeholder components for navigation targets
function ChatPage() {
  // PUBLIC_INTERFACE
  /** Chat main page - placeholder for future chat UI */
  return (
    <div style={{ minHeight: '55vh', textAlign: 'center', paddingTop: 108 }}>
      <h2 style={{ color: 'var(--base-light)' }}>Chat with TalkBuddy</h2>
      <div style={{ marginTop: 24, color: 'var(--text-secondary)' }}>
        <p>The chat UI will appear here. (Coming soon!)</p>
      </div>
    </div>
  );
}

function AboutPage() {
  // PUBLIC_INTERFACE
  return (
    <div style={{ minHeight: '55vh', textAlign: 'center', paddingTop: 108 }}>
      <h2 style={{ color: 'var(--base-light)' }}>About TalkBuddy</h2>
      <div style={{ marginTop: 24, color: 'var(--text-secondary)' }}>
        <p>
          TalkBuddy is your friendly AI chat companion! Enjoy private, instant conversations with a modern UI. No login required.
        </p>
      </div>
    </div>
  );
}

function HelpPage() {
  // PUBLIC_INTERFACE
  return (
    <div style={{ minHeight: '55vh', textAlign: 'center', paddingTop: 108 }}>
      <h2 style={{ color: 'var(--base-light)' }}>Help & FAQ</h2>
      <div style={{ marginTop: 24, color: 'var(--text-secondary)' }}>
        <p>
          Need help? Contact us or check the FAQ.<br />More support features coming soon.
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  // PUBLIC_INTERFACE
  return (
    <div style={{ minHeight: '55vh', textAlign: 'center', paddingTop: 108 }}>
      <h2 style={{ color: 'var(--base-light)' }}>Contact Us</h2>
      <div style={{ marginTop: 24, color: 'var(--text-secondary)' }}>
        <p>
          Have feedback or questions? Reach us at <a href="mailto:hello@talkbuddy.ai" style={{ color: 'var(--base-light)' }}>hello@talkbuddy.ai</a>
        </p>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TalkBuddyLanding />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
