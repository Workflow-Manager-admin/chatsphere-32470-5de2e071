// Navbar with React Router navigation
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
function Navbar() {
  // Persist theme with localStorage
  const [theme, setTheme] = useState(
    () =>
      window.localStorage.getItem("cs_theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("cs_theme", theme);
  }, [theme]);

  // Inline CSS-in-JS
  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 68,
      padding: "0 0",
      // Frosted glass
      background: theme === "light"
        ? "rgba(255,255,255,0.70)"
        : "rgba(34,37,47,0.60)",
      boxShadow:
        "0 6px 26px 0 rgba(32,36,51,0.08), 0 1.5px 1.5px 0 rgba(0,0,0,0.04)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      transition: "background 0.3s, color 0.3s",
      borderBottom: theme === "light"
        ? "1px solid rgba(60,60,60,0.08)"
        : "1px solid rgba(255,255,255,0.09)",
    },
    navRow: {
      width: "100%",
      maxWidth: 1040,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
    },
    logo: {
      fontFamily: "'Inter', 'Roboto', sans-serif",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "0.5px",
      display: "flex",
      alignItems: "center",
      gap: "0.48em",
      color: theme === "light" ? "#292c36" : "#f7fafc",
      userSelect: "none",
      opacity: 0.98,
      textShadow:
        theme === "light"
          ? "0 0 2px #fff, 0 2px 18px #e5eeff"
          : "0 0 2px #222, 0 2px 32px #111b29",
      cursor: "pointer",
      transition: "color 0.3s, text-shadow 0.3s",
    },
    logoIcon: {
      fontSize: 29,
      fontWeight: "bold",
      color: theme === "light" ? "#4F8CFF" : "#FFD166",
      textShadow:
        theme === "light"
          ? "0 0 4px #b8daff"
          : "0 0 6px #FFD16699,0 0 1px #f7f0cf",
      filter: "drop-shadow(0px 3px 9px rgba(69,145,255,0.11))",
      transition: "color 0.3s",
    },
    navLinks: {
      display: "flex",
      gap: 34,
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    link: {
      display: "inline-block",
      fontFamily: "inherit",
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: "0.03em",
      color: theme === "light" ? "#32394a" : "#e7e7ea",
      textDecoration: "none",
      position: "relative",
      cursor: "pointer",
      transition: "color 0.2s, transform 0.22s cubic-bezier(.12,.71,.47,.92)",
      borderRadius: 6,
      padding: "6px 12px",
    },
    themeToggleContainer: {
      marginLeft: 30,
      display: "flex",
      alignItems: "center",
    },
  };

  // For nav link hover
  const navLinkHover =
    theme === "light"
      ? {
          color: "#4F8CFF",
          boxShadow: "0 1.5px 18px 0 #b6e0ff58, 0 0px 0.5px #4F8CFF44",
          background: "rgba(79,140,255,0.04)",
          transform: "scale(1.08)",
          textShadow:
            "0 0 7px #4F8CFFcc, 0 0 1px #fff",
        }
      : {
          color: "#FFD166",
          boxShadow:
            "0 1.5px 18px #FFD16633, 0 0px 0.8px #FFD16655",
          background: "rgba(41,41,29,0.22)",
          transform: "scale(1.08)",
          textShadow:
            "0 0 16px #FFD166bb, 0 0 1.5px #FFD16666",
        };

  // Navbar items/link info (paths correspond to React Router routes)
  const navItems = [
    { name: "Chat", path: "/chat" },
    { name: "About", path: "/about" },
    { name: "Help", path: "/help" },
    { name: "Contact", path: "/contact" },
  ];

  // Light/Dark toggle implementation (icon based for style)
  // PUBLIC_INTERFACE
  function ThemeToggle() {
    /**
     * Renders a toggle button: 
     *   - Shows a sun icon if currently in light mode.
     *   - Shows a moon icon if currently in dark mode.
     * The icon updates immediately based on the current `theme` state.
     */
    return (
      <button
        aria-label="Toggle dark/light mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          border: "none",
          outline: "none",
          background: "none",
          cursor: "pointer",
          borderRadius: "50%",
          boxShadow:
            theme === "light"
              ? "0 2px 18px #b6e0ff44"
              : "0 3px 16px #FFD16611",
          transition: "box-shadow 0.3s",
          padding: 0,
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        tabIndex={0}
      >
        {/* Show Moon icon when in dark mode, Sun icon when in light mode */}
        {theme === "light" ? (
          // Sun Icon (visible in light mode, represents light)
          <svg width="25" height="25" fill="none" viewBox="1 1 22 22" style={{transition: "all 0.25s"}}>
            <circle cx="12" cy="12" r="6.5"
              fill="#FFD166"
              stroke="#FFD166"
              strokeWidth="2.8"
              filter="drop-shadow(0 0 8px #FFD16699)"
            />
            <g stroke="#FFD166" strokeWidth="2.2">
              <line x1="12" y1="2" x2="12" y2="5.1"/>
              <line x1="12" y1="18.9" x2="12" y2="22"/>
              <line x1="2" y1="12" x2="5.1" y2="12"/>
              <line x1="18.9" y1="12" x2="22" y2="12"/>
              <line x1="5.85" y1="5.85" x2="8.1" y2="8.1"/>
              <line x1="18.15" y1="5.85" x2="15.9" y2="8.1"/>
              <line x1="5.85" y1="18.15" x2="8.1" y2="15.9"/>
              <line x1="18.15" y1="18.15" x2="15.9" y2="15.9"/>
            </g>
          </svg>
        ) : (
          // Moon Icon (visible in dark mode, represents dark)
          <svg width="25" height="25" fill="none" viewBox="1 1 22 22" style={{transition: "all 0.25s"}}>
            <path
              d="M19.89 16.53A8.1 8.1 0 0 1 12.99 20.1 8.09 8.09 0 0 1 7.17 6.07 7.99 7.99 0 0 0 7 8c0 5.12 4.04 9.25 9.03 9.25 1.26 0 2.47-.24 3.61-.7z"
              fill="#32394a"
              stroke="#FFD166"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
    );
  }

  // Dynamic effect for nav link hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navRow}>
        {/* Logo Section */}
        <div style={styles.logo}>
          <span style={styles.logoIcon}>💬</span> {/* or custom svg */}
          <span>TALK<span style={{color: styles.logoIcon.color, fontWeight:800}}>BUDDY</span></span>
        </div>
        {/* Nav Links */}
        <ul style={styles.navLinks}>
          {navItems.map((item, idx) => (
            <li
              key={item.name}
              style={{
                ...styles.link,
                ...(hoveredIndex === idx ? navLinkHover : {}),
                // highlight current route
                ...(location && location.pathname === item.path
                  ? { 
                      fontWeight: 650, 
                      borderBottom: `2.5px solid ${theme === "light" ? "#4F8CFF" : "#FFD166"}`,
                      color: theme === "light" ? "#4F8CFF" : "#FFD166"
                    }
                  : {}),
                transition:
                  hoveredIndex === idx
                    ? "color 0.17s, background 0.18s, box-shadow 0.16s, transform 0.20s"
                    : "color 0.26s, background 0.28s, box-shadow 0.23s, transform 0.22s",
              }}
              tabIndex={0}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(null)}
            >
              <Link
                to={item.path}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  font: "inherit",
                  display: "inline-block",
                  width: "100%",
                  padding: 0,
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Theme Toggle */}
        <div style={styles.themeToggleContainer}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
