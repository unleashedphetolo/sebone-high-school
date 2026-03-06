import React from "react";
import "../../styles/topbar.css";
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
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <div
            className="auth-links"
            style={{ fontSize: "12px", display: " flex" }}
          >
            <a href="/admissions/apply">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
