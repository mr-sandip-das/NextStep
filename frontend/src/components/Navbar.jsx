import React, { useState } from "react";
import "../assets/styles/components/Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

/* Dummy data - change anything you like */
const JOBS_AVAILABLE = "1,248";

const EVENTS = [
  { date: "10 Oct", title: "Mahalaya" },
  { date: "15 Oct", title: "Durga Puja" },
  { date: "20 Oct", title: "Scholarship Exam" },
  { date: "29 Oct", title: "Kali Puja" },
];

const NOTIFICATIONS = [
  { id: 1, title: "New scholarship added", text: "Merit Scholarship 2026 applications are open.", time: "5 min ago", unread: true },
  { id: 2, title: "Exam reminder", text: "Scholarship Exam is on 20 Oct. Prepare well!", time: "2 hours ago", unread: true },
  { id: 3, title: "CV tip", text: "Complete your CV to get better job matches.", time: "Yesterday", unread: false },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);     // mobile drawer
  const [catOpen, setCatOpen] = useState(false);       // category submenu
  const [notifOpen, setNotifOpen] = useState(false);   // notification box
  const [searchOpen, setSearchOpen] = useState(false); // mobile search bar

  const closeAll = () => {
    setMenuOpen(false);
    setCatOpen(false);
    setNotifOpen(false);
    setSearchOpen(false);
  };

  const toggleCategory = () => {
    setNotifOpen(false);
    setCatOpen((prev) => !prev);
  };

  const toggleNotifications = () => {
    setCatOpen(false);
    setSearchOpen(false);
    setNotifOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setNotifOpen(false);
    setSearchOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setNotifOpen(false);
    setSearchOpen(false);
    setMenuOpen((prev) => !prev);
  };

  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;
  const anyPopupOpen = catOpen || notifOpen || searchOpen;

  return (
    <>
      {/* ===== Top info bar: jobs + next events ===== */}
      <div className="topbar">
        <a href="#" className="topbar__jobs">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="2" y1="13" x2="22" y2="13" />
          </svg>
          <strong>{JOBS_AVAILABLE}</strong>
          <span>Jobs available</span>
        </a>

        <div className="topbar__events">
          <span className="topbar__label">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Next events
          </span>

          <ul className="topbar__list">
            {EVENTS.map((event) => (
              <li key={event.title} className="topbar__event">
                <span className="topbar__date">{event.date}</span>
                <span className="topbar__title">{event.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Main navbar (sticky) ===== */}
      <header className="navbar">
        <div className="navbar__container">

          {/* Logo */}
          <a href="/" className="navbar__logo" aria-label="Home">
            <img src={logo} alt="Next Step logo" />
          </a>

          {/* Menu (desktop links / mobile drawer) */}
          <nav className={`navbar__menu ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">

            {/* Drawer header (mobile only) */}
            <div className="navbar__drawer-head">
              <img src={logo} alt="Next Step logo" className="navbar__drawer-logo" />
              <button type="button" className="icon-btn" aria-label="Close menu" onClick={closeAll}>
                <svg viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="nav-links">
              <li>
                <a href="#" className="nav-link is-active" onClick={closeAll}>Home</a>
              </li>

              <li>
                <a href="#" className="nav-link" onClick={closeAll}>About</a>
              </li>

              <li className="dropdown">
                <button
                  type="button"
                  className={`nav-link ${catOpen ? "is-open" : ""}`}
                  aria-expanded={catOpen}
                  aria-haspopup="true"
                  onClick={toggleCategory}
                >
                  Category
                  <svg className="chevron" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <ul className={`dropdown__menu ${catOpen ? "is-open" : ""}`}>
                  <li><a href="#" onClick={closeAll}>Scholarships</a></li>
                  <li><a href="#" onClick={closeAll}>Exams</a></li>
                  <li><a href="#" onClick={closeAll}>Courses</a></li>
                  <li><a href="#" onClick={closeAll}>Jobs &amp; Internships</a></li>
                  <li><a href="#" onClick={closeAll}>Study Notes</a></li>
                </ul>
              </li>

              <li>
                <a href="#" className="nav-link" onClick={closeAll}>Help &amp; Support</a>
              </li>
            </ul>

            {/* Buttons inside drawer (mobile only) */}
            <div className="navbar__drawer-actions">
              <a href="#" className="btn btn--outline" onClick={closeAll}>Create CV</a>
              <Link to="/login" className="btn btn--primary" onClick={closeAll}>Login</Link>
            </div>
          </nav>

          {/* Right side */}
          <div className="navbar__actions">

            {/* Search: text field on desktop, dropdown bar on mobile */}
            <form className={`search ${searchOpen ? "is-open" : ""}`} onSubmit={(e) => e.preventDefault()} role="search">
              <input
                type="search"
                className="search__input"
                placeholder="Search scholarships, exams, courses..."
                aria-label="Search"
              />
              <button type="submit" className="search__btn" aria-label="Submit search">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>

            {/* Search icon (mobile only) */}
            <button
              type="button"
              className="icon-btn search-toggle"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              onClick={toggleSearch}
            >
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Notifications */}
            <div className="notif">
              <button
                type="button"
                className="icon-btn"
                aria-label="Notifications"
                aria-expanded={notifOpen}
                onClick={toggleNotifications}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {unreadCount > 0 && <span className="icon-btn__dot"></span>}
              </button>

              <div className={`notif__panel ${notifOpen ? "is-open" : ""}`} role="dialog" aria-label="Notifications">
                <div className="notif__head">
                  <h3>
                    Notifications
                    {unreadCount > 0 && <span className="notif__count">{unreadCount} new</span>}
                  </h3>
                  <button type="button" className="notif__close" aria-label="Close notifications" onClick={() => setNotifOpen(false)}>
                    <svg viewBox="0 0 24 24">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <ul className="notif__list">
                  {NOTIFICATIONS.map((n) => (
                    <li key={n.id} className={`notif__item ${n.unread ? "is-unread" : ""}`}>
                      <span className="notif__bullet"></span>
                      <div>
                        <p className="notif__title">{n.title}</p>
                        <p className="notif__text">{n.text}</p>
                        <span className="notif__time">{n.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buttons (desktop only) */}
            <div className="navbar__cta">
              <a href="#" className="btn btn--outline">Create CV</a>
              <Link to="/login" className="btn btn--primary">Login</Link>
            </div>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              className={`hamburger ${menuOpen ? "is-open" : ""}`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Invisible layer: click outside to close popups */}
        {anyPopupOpen && <div className="navbar__backdrop" onClick={closeAll} />}

        {/* Dark overlay behind the mobile drawer */}
        <div className={`navbar__overlay ${menuOpen ? "is-visible" : ""}`} onClick={closeAll} />
      </header>
    </>
  );
}

export default Navbar;