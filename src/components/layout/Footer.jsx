import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logoz from "../../assets/sebone.jpeg";

const groups = [
  {
    title: "Students",
    items: [
      { name: "Calendars", path: "/resources/calendar" },
      { name: "Term dates", path: "/resources/term-plan" },
      { name: "Student Daily Bulletin", path: "/bulletin" },
      { name: "Subject Choices", path: "/resources/subject-choices" },
      { name: "Past Matric Papers", path: "/digital-library" },
    ],
  },
  {
    title: "Staff",
    items: [
      { name: "Staff Portal", path: "/staff" },
      { name: "Term dates", path: "/resources/term-plan" },
      { name: "SGB", path: "/sgb" },
      { name: "Attendance Policy", path: "/attendance" },
    ],
  },
  {
    title: "Parents",
    items: [
      { name: "Admissions", path: "/admissions" },
      { name: "Term dates", path: "/resources/term-plan" },
      { name: "School Calendar", path: "/schoolcalendar" },
      { name: "Stationary requirements", path: "/resources/stationary-list" },
      { name: "Contact us", path: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
   const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top container">
        <div className="brand">
          
          <div className="logoz" aria-hidden="true">
            <img src={logoz} alt="School logo" className="logo-image" />
        
          </div>

          <div className="brand-text">
            <div className="school-name">M.O.M Sebone Secondary School</div>
            <div className="slogan">
              Nurturing Excellence • Inspiring Tomorrow
            </div>
            <div className="contact small">
              <a href="tel:+27110239428" aria-label="Call school" style={{textDecoration:'none',color:'#2a1b6b'}}>
                ☎ 011 023 9428
              </a>
              <span className="sep">|</span>
              <a href="mailto:sebone@gmail.com" aria-label="Email school" style={{textDecoration:'none', color:'#2a1b6b'}}>
                sebone@gmail.com
              </a>
            </div>
          </div>
        </div>

         {/* Footer Links */}
        <nav className="footer-links">
          {groups.map((group) => (
            <div key={group.title} className="link-group">
              <h4>{group.title}</h4>

              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} onClick={scrollTop}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-bottom container">
        <div className="copyright small">
          © {year} M.O.M Sebone High School. All rights reserved.
        </div>

        <div className="social">
          <span className="small">Follow us</span>

          {/* Facebook */}
          <a href="/" aria-label="Facebook" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.6c0-2.2 1.3-3.4 3.3-3.4 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="/" aria-label="Instagram" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A3.9 3.9 0 1 0 15.9 12 3.9 3.9 0 0 0 12 8.1zm6.3-.9a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
            </svg>
          </a>

          {/* X */}
          <a href="/" aria-label="Twitter/X" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M17.1 3H20l-6.3 7.2L21 21h-5.7l-4.4-5.8L5.7 21H3l7-8-6.6-10H9l4 5.6L17.1 3z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="/" aria-label="WhatsApp" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.3 4.5-1.2A10 10 0 1 0 12 2zm5.3 14.8c-.2.6-1.1 1-1.7 1.2-.5.2-1.2.3-3.6-.8a12.6 12.6 0 0 1-4.6-4c-.3-.5-1.1-1.5-1.1-2.9 0-1.4.7-2.1 1-2.4.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.6l1 2.3c.1.2.1.4 0 .7-.1.4-.2.5-.4.7l-.3.3c-.1.1-.2.2-.1.4.2.4.8 1.5 2 2.4 1.4 1 2.5 1.3 2.9 1.5.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.7-.1l2.2 1c.6.2.6.5.5.7z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="/" aria-label="LinkedIn" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h4v1.8h.1a4.4 4.4 0 0 1 4-2c4.3 0 5 2.8 5 6.4V21h-4v-5.2c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.9V21h-4z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="/" aria-label="YouTube" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M21.8 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.2-1C16.2 4.5 12 4.5 12 4.5s-4.2 0-6.8.3c-.6.1-1.4.1-2.2 1C2.4 6.5 2.2 8 2.2 8S2 9.7 2 11.5v1c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.2c.8.9 1.9.8 2.4.9 1.7.2 6.6.3 6.6.3s4.2 0 6.8-.3c.6-.1 1.4-.1 2.2-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.5v-1c0-1.8-.2-3.5-.2-3.5zM10 15.3V8.7l6 3.3-6 3.3z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="/" aria-label="TikTok" onClick={(e) => e.preventDefault()} className="social-btn">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M20.5 7.5a5.2 5.2 0 0 1-3.3-1.3 5.7 5.7 0 0 1-1.3-2.2V4h-3v11.3a2.5 2.5 0 1 1-1.8-2.4V9a5.5 5.5 0 1 0 7 5.2V9.3c.5.4 1.2.7 1.8.9V7.7l-.4-.2z"/>
            </svg>
          </a>
        </div>
        <div className="powered-by">
        {" "}
        <span>Powered by</span>{" "}
        <a
          href="https://ulterspace.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="ulterspace-link"
        >
          {" "}
          <img
            src="/ult2.gif"
            alt="Ulterspace Logo"
            className="ulterspace-logo"
          />{" "}
          <span>Ulterspace</span>{" "}
        </a>{" "}
      </div>
      </div>
      
    </footer>
  );
}
