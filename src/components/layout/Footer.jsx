import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logoz from "../../assets/sebone.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ICONS = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

const SOCIAL_LINKS = [
  { name: "facebook", url: "/" },
  { name: "instagram", url: "/" },
  { name: "x", url: "/" },
  { name: "whatsapp", url: "/" },
  { name: "linkedin", url: "/" },
  { name: "youtube", url: "/" },
  { name: "tiktok", url: "/" },
];

const groups = [
  {
    title: "Learners",
    items: [
      { name: "Calendars", path: "/resources/calendar" },
      { name: "Term dates", path: "/resources/term-plan" },
      { name: "Student Daily Bulletin", path: "/bulletin" },
      { name: "Subject Choices", path: "/resources/subject-choices" },
      { name: "Past Matric Papers", path: "/digital-library" },
      {
        name: "Matric Results",
        path: "https://www.education.gov.za/MatricResults/ExamResults.aspx",
        external: true,
      },
    ],
  },
  {
    title: "Staff",
    items: [
      { name: "Staff Members", path: "/staff" },
      { name: "SGB", path: "/sgb" },
      { name: "Term dates", path: "/resources/term-plan" },
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
  {
    title: "Activities",
    items: [
      { name: "Academics", path: "/activities/academics" },
      { name: "Sports & Recreation", path: "/activities/sports" },
      { name: "Culture & Activities", path: "/activities/culture" },
      { name: "Campus Facilities", path: "/activities/facilities" },
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
              <a
                href="tel:+27110239428"
                aria-label="Call school"
                style={{ textDecoration: "none", color: "#2a1b6b" }}
              >
                ☎ 011 023 9428
              </a>
              <span className="sep">|</span>
              <a
                href="mailto:sebone@gmail.com"
                aria-label="Email school"
                style={{ textDecoration: "none", color: "#2a1b6b" }}
              >
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
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.path} onClick={scrollTop}>
                        {item.name}
                      </Link>
                    )}
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

          {SOCIAL_LINKS.map((social) => {
            const Icon = ICONS[social.name];

            return (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="social-btn"
                title={social.name}
                onClick={(e) => e.preventDefault()}
              >
                <Icon size={18} />
              </a>
            );
          })}
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
