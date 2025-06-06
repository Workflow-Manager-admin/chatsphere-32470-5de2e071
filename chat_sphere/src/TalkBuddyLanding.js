import React from "react";
import Navbar from "./Navbar";
import "./App.css";

/**
 * TalkBuddy Landing Page - Modern, themed, animated.
 * Sections:
 * - Navbar above (no Home)
 * - Animated Hero with CTA
 * - Features cards/icons (with hover motion)
 * - Chat bubble preview section (optional, demo style)
 * - Get started section with CTA
 * - Footer with links & copyright
 */

// PUBLIC_INTERFACE
function TalkBuddyLanding() {
  return (
    <div className="app landing-app">
      <Navbar />
      <main style={{ paddingTop: 88, flex: 1 }}>
        {/* Hero Section */}
        <section className="container hero-section" style={{ minHeight: "54vh" }}>
          <div className="hero-anim-bg">
            <AnimatedDots />
          </div>
          <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
            <div className="subtitle">Your Smart AI Conversation Partner</div>
            <h1 className="title">
              Meet <b style={{ color: "var(--base-light)" }}>TalkBuddy</b>
            </h1>
            <p className="description" style={{ fontSize: "1.22rem" }}>
              Chat, brainstorm, get answers, or just talk –<br />
              with privacy, instant access, and a beautiful interface.
            </p>
            <a href="#chat">
              <button className="btn btn-large hero-cta">Start Chatting</button>
            </a>
            <div className="hero-glow"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container features-section" id="features">
          <h2 className="features-title">Key Features</h2>
          <div className="features-cards">
            <FeatureCard
              icon="💡"
              title="AI-Powered Chats"
              desc="TalkBuddy leverages OpenAI & DeepSeek to converse, solve, or just keep you company."
            />
            <FeatureCard
              icon="🚀"
              title="Instant, No Login"
              desc="Start chatting without account creation—zero friction, total privacy."
            />
            <FeatureCard
              icon="🌗"
              title="Light/Dark Mode"
              desc="Switch themes for day or night. Eye-friendly design, always stylish."
            />
            <FeatureCard
              icon="⚡"
              title="Modern & Fast"
              desc="Enjoy a smooth, responsive, and minimal UI. No heavy bloat, just speed."
            />
            <FeatureCard
              icon="🔒"
              title="Frontend-Only"
              desc="No backend, except secure API calls—full privacy, no data stored."
            />
          </div>
        </section>

        {/* Chat Preview Section */}
        <section className="container chat-preview-section">
          <h2 className="chat-preview-title">See TalkBuddy in Action:</h2>
          <ChatBubbleDemo />
        </section>

        {/* Get Started Section */}
        <section className="container getstarted-section" style={{ textAlign: "center", marginTop: 52 }}>
          <h2 style={{ color: "var(--base-light)", fontWeight: 700 }}>Ready to Talk?</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 18, margin: "14px 0 22px" }}>
            Jump into a chat and start your conversation now. No waiting – it’s free!
          </p>
          <a href="#chat">
            <button className="btn btn-large btn-accent">Get Started</button>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-row">
          <div><b>TalkBuddy</b> &copy; {new Date().getFullYear()}</div>
          <div className="footer-links">
            <a href="#chat">Chat</a>
            <a href="#about">About</a>
            <a href="#help">Help</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
      <style>
        {`
        .landing-app { min-height: 100vh; background: var(--body-bg); display: flex; flex-direction: column; }
        .hero-section { text-align: center; position: relative; overflow: hidden; }
        .hero-anim-bg { position: absolute; inset: 0; z-index: 0; opacity: 0.55; pointer-events: none;}
        .hero-content { z-index: 2; position: relative; padding-top: 32px; padding-bottom: 25px;}
        .hero-cta { font-size: 1.23rem; padding: 16px 38px; margin-top: 30px; box-shadow: 0 10px 36px -6px #4F8CFF22; }
        .hero-cta:hover { transform: scale(1.07) rotate(-1deg); background: var(--primary); }
        .hero-glow {
          position: absolute; left: 50%; top: 90%; width: 250px; height: 40px;
          background: radial-gradient(circle at center, #4F8CFF66 0%, transparent 92%);
          filter: blur(14px); z-index: 1; pointer-events: none; transform: translateX(-50%);
        }
        .features-section { margin-top: 36px; }
        .features-title { text-align: center; font-size: 2.1rem; margin-bottom: 30px; color: var(--primary); font-weight: 600;}
        .features-cards { display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; }
        .feature-card {
          min-width: 170px; max-width: 240px; flex: 1 1 180px; background: var(--glass); border: 1.5px solid var(--glass-border);
          border-radius: 1.5em; padding: 24px 18px; transition: transform .2s, box-shadow .2s, border-color .19s;
          box-shadow: 0 2.5px 6px 0 #4F8CFF0c; display: flex; flex-direction: column; align-items: center;
          cursor: pointer; position: relative; z-index: 1;
        }
        .feature-card:hover, .feature-card:focus-within {
          transform: translateY(-8px) scale(1.037) rotate(-0.5deg);
          box-shadow: 0 6px 34px 2px #4F8CFF23;
          border-color: var(--base-light); background: var(--glass-light);
        }
        .feature-icon { font-size: 2.2rem; margin-bottom: 12px; color: var(--accent); filter: drop-shadow(0 3px 8px #FFD16655);}
        .feature-title { font-weight: 600; margin-bottom: 8px; font-size: 1.06em;}
        .feature-desc { color: var(--text-secondary); font-size: 0.97em; text-align: center;} 
        .chat-preview-section { margin-top: 42px; text-align: center; }
        .chat-preview-title { font-size: 1.25rem; margin-bottom: 18px; font-weight: 500;}
        .chat-bubbles-demo { display: flex; flex-direction: column; align-items: center; gap: 9px; min-height: 144px;}
        .bubble-msg {
          padding: 13px 20px; border-radius: 33px; max-width: 310px; background: var(--glass);
          color: var(--text-color); font-size: 1.07em; border: 1.1px solid var(--glass-border); box-shadow: 0 2.7px 16px #23272f12;
        }
        .bubble-msg.ai { align-self: flex-start; background: #F1FAFF22; border-color: #4F8CFF33; color: var(--primary);}
        .bubble-msg.user { align-self: flex-end; background: #FFD16622; border-color: #FFD16670; color: #FFD166;}
        .bubble-tiny { font-size: 0.95em; border-radius: 25px; padding: 8px 13px;}
        .getstarted-section { margin-top: 36px;}
        .btn-accent { background: var(--accent); color: #23272F; font-weight: 700;}
        .btn-accent:hover { background: #ffe385; color: #222;}
        .landing-footer {
          background: var(--primary-dark); color: #f6f8fae0; border-top: 1.4px solid var(--glass-border-dark); margin-top: 42px;
          font-size: 1.02rem; padding: 22px 0; 
        }
        .footer-row {
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 7px;
        }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a { color: var(--base-light); text-decoration: none; transition: color 0.18s; font-weight: 500;}
        .footer-links a:hover { color: var(--accent); }
        @media (max-width:680px) {
          .features-cards { flex-direction: column; align-items: center; }
        }
        @media (max-width:400px){
          .footer-row { flex-direction: column; gap: 4px;}
        }
        `}
      </style>
    </div>
  );
}

// FeatureCard presentational
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card" tabIndex={0}>
      <span className="feature-icon">{icon}</span>
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{desc}</div>
    </div>
  );
}

// Animated motion dots for hero background
function AnimatedDots() {
  // Simple animated SVG with motion for modern feel
  return (
    <svg style={{ width: "99vw", height: 200, position: "absolute", left: 0, top: 0 }} width="100%" height="200" viewBox="0 0 1600 200">
      <g>
        <circle className="anim-dot" cx="160" cy="70" r="15" fill="#4F8CFF33">
          <animate attributeName="cy" values="70;120;70" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle className="anim-dot" cx="350" cy="110" r="8" fill="#FFD16633">
          <animate attributeName="cy" values="110;150;110" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle className="anim-dot" cx="680" cy="60" r="12" fill="#4F8CFF33">
          <animate attributeName="cy" values="60;130;60" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle className="anim-dot" cx="1140" cy="100" r="10" fill="#FFD16633">
          <animate attributeName="cy" values="100;160;100" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle className="anim-dot" cx="1400" cy="40" r="18" fill="#4F8CFF22">
          <animate attributeName="cy" values="40;100;40" dur="2.7s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

// ChatBubble demo preview
function ChatBubbleDemo() {
  return (
    <div className="chat-bubbles-demo" aria-label="Chat preview sample">
      <span className="bubble-msg user">Hey TalkBuddy, help me brainstorm social media ideas?</span>
      <span className="bubble-msg ai">
        Sure! Here are a few creative post ideas:<br />
        1️⃣ Share behind-the-scenes moments<br />
        2️⃣ Ask your audience a quirky question<br />
        3️⃣ Use trending hashtags<br />
        Want more?
      </span>
      <span className="bubble-msg user bubble-tiny">Love it! Give me more emojis.</span>
      <span className="bubble-msg ai bubble-tiny">😄🎉✨🤓🙌</span>
    </div>
  );
}

export default TalkBuddyLanding;
