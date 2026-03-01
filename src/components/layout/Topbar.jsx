import React from "react";
import "../../styles/topbar.css";

export default function Topbar() {
  return (
    <div className="topbar" role="banner" aria-label="Top information bar">
      <div className="container topbar-inner">
        <div className="left">
          <div
            className="brand-small"
            aria-hidden="true"
            style={{ width: "25px", height: "25px" }}
          >
            <img
              src="/images/Education.jpg"
              alt="South African Education Logo"
              className="brand-icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                borderRadius: "4px",
              }}
            />
          </div>

          <div className="contact">
            <a
              className="phone"
              href="tel:+27110239428"
              aria-label="Call school"
            >
              ☎ 011 023 9428
            </a>
            <span className="sep">|</span>
            <a
              className="email"
              href="mailto:sebone@gmail.com"
              aria-label="Email school"
            >
              ✉️ sebone@gmail.com
            </a>
          </div>
        </div>

        <div className="center">
          <nav className="top-links" aria-label="Top navigation">
            <a href="/news">News</a>
            <a href="/resources/subject-choices">Resources</a>
            <a href="/resources/calendar">Calendar</a>
            <a href="/notices">Notice Board</a>
          </nav>
        </div>

        <div className="right">
          <div className="social" aria-label="Social media links">
            <a
              href="#"
              aria-label="Facebook"
              className="social-btn"
              title="Facebook"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="#1877F2"
                  d="M24 12a12 12 0 1 0-13.9 11.8v-8.4H7.7V12h2.4V9.4c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .1 2 .1v2.3h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3.4h-2.3v8.4A12 12 0 0 0 24 12z"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="social-btn"
              title="Instagram"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <radialGradient id="igGrad" cx="50%" cy="50%" r="80%">
                  <stop offset="75%" stopColor="#dd004aff" />
                </radialGradient>
                <path
                  fill="url(#igGrad)"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.4-.9a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="X / Twitter"
              className="social-btn"
              title="X"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  d="M18.9 2H22l-7 8 8 12h-6l-5-7-5 7H1l7.5-9L1.2 2h6.1l4.2 6z"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="social-btn"
              title="WhatsApp"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#25D366"
                  d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.3 4.5-1.2A10 10 0 1 0 12 2"
                />
                <path
                  fill="#fff"
                  d="M17.4 14.4c-.2.6-1.1 1-1.7 1.2-.5.2-1.2.3-3.6-.8a12.4 12.4 0 0 1-4.6-4c-.3-.5-1-1.6-1-2.9s.7-2.1 1-2.4c.3-.3.7-.4 1-.4h.7c.2 0 .6 0 .7.6l1 2.2c.1.2.1.5-.1.8-.1.3-.2.4-.3.6l-.3.4c-.1.1-.2.2-.1.4.2.4.8 1.5 2 2.4 1.4 1 2.4 1.3 2.9 1.5.2.1.4 0 .5 0l.7-.8c.2-.2.4-.3.8-.1l2.2 1c.6.2.6.4.5.7z"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="social-btn"
              title="LinkedIn"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#0A66C2"
                  d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h4v1.7h.1a4.3 4.3 0 0 1 4-2c4.3 0 5 2.8 5 6.4V21h-4v-5.2c0-1.3 0-2.9-2-2.9s-2.2 1.4-2.2 2.9V21h-4z"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="social-btn"
              title="YouTube"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#FF0000"
                  d="M21.8 8s-.2-1.5-.8-2.2c-.7-.9-1.6-.9-2.2-1C16.3 4.5 12 4.5 12 4.5h0s-4.3 0-6.8.3c-.7.1-1.6.1-2.2 1C2.4 6.5 2.2 8 2.2 8S2 9.7 2 11.5v1c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.2c.7.9 1.6.8 2.2.9 2.5.3 6.8.3 6.8.3s4.3 0 6.8-.3c.7-.1 1.6-.1 2.2-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.5v-1c0-1.8-.2-3.5-.2-3.5z"
                />
                <path fill="#fff" d="M10 15.3V8.7l6 3.3-6 3.3z" />
              </svg>
            </a>
          </div>

          <div className="auth-links">
            <a href="/admissions/apply">Apply</a>
          </div>
        </div>
      </div>
    </div>
  );
}
