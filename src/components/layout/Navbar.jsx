import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import "../../styles/navbar.css";
import logos from "../../assets/sebone.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const loc = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    // close mobile + dropdown on route change
    setOpen(false);
    setDropdown(null);
  }, [loc.pathname]);

  const isActive = (path) => loc.pathname === path;

  const menus = useMemo(
    () => ({
      about: [
        { to: "/about/who-we-are", label: "Who We Are" },
        { to: "/about/vision-mission", label: "Vision & Mission" },
        { to: "/staff", label: "Staff Members" },
        { to: "/sgb", label: "SGB" },
        { to: "/facilities", label: "Facilities" },
        { to: "/about/history", label: "Our History" },
      ],
      life: [
        { to: "/school-life/academics", label: "Academics" },
        { to: "/school-life/sports", label: "Sports & Recreation" },
        { to: "/school-life/culture", label: "Culture & Activities" },
        { to: "/school-life/facilities", label: "Campus Facilities" },
      ],
      resources: [
        { to: "/resources/subject-choices", label: "Subject Choices" },
        { to: "/resources/term-plan", label: "Term Plan" },
        { to: "/resources/exam-schedule", label: "Exam Schedule" },
        { to: "/resources/code-of-conduct", label: "Code of Conduct" },
        { to: "/resources/stationary-list", label: "Stationary List" },
        { to: "/resources/calendar", label: "Calendar" },
      ],
      news: [
        { to: "/news", label: "Newsletters" },
        { to: "/schoolcalendar", label: "School Calendar" },
      ],
      admissions: [
        { to: "/admissions/howtoapply", label: "How to Apply" },
        { to: "/admissions/requirements", label: "Entry Requirements" },
        { to: "/admissions/apply", label: "Apply Now" },
      ],
    }),
    []
  );

  const toggleDropdown = (key) => setDropdown((cur) => (cur === key ? null : key));

  const Drop = ({ id, label, items }) => (
    <div
      className="dropdown parent"
      onMouseEnter={() => setDropdown(id)}
      onMouseLeave={() => setDropdown(null)}
      onClick={() => toggleDropdown(id)}
    >
      <span className="drop-btn">
        {label} <IoChevronDown />
      </span>

      <div className={`drop-menu ${dropdown === id ? "show" : ""}`}>
        {items.map((it) => (
          <Link key={it.to + it.label} to={it.to}>
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="logo-section">
          <Link to="/" className="logo-link" aria-label="Go to home">
            <img src={logos} alt="Sebone logo" className="logo-image" />
            <div className="logo-text">
              <h1 className="brand-name">M.O.M Sebone</h1>
              <p className="slogan">Secondary School</p>
            </div>
          </Link>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          <Link className={isActive("/") ? "active" : ""} to="/">
            Home
          </Link>

          <Drop id="about" label="About Us" items={menus.about} />

          <Link className={isActive("/digital-library") ? "active" : ""} to="/digital-library">
            Digital Library
          </Link>

          <Drop id="life" label="Activities" items={menus.life} />
          <Drop id="resources" label="Resources" items={menus.resources} />
          <Drop id="news" label="News" items={menus.news} />
          <Drop id="adm" label="Admissions" items={menus.admissions} />

          <Link className={isActive("/gallery") ? "active" : ""} to="/gallery">
            Gallery
          </Link>

          <Link className={isActive("/robotics") ? "active" : ""} to="/robotics">
            Robotics Club
          </Link>

          <Link className={isActive("/contact") ? "active" : ""} to="/contact">
            Contact
          </Link>
        </nav>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
