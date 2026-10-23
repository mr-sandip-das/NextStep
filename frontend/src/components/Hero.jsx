import React from "react";
import "../assets/styles/components/Hero.css";

/* Category icons are stored here first, then used below */
const CATEGORIES = [
  {
    name: "Rankometer",
    icon: (
      <>
        <circle cx="12" cy="9" r="6" />
        <polyline points="8.5 14.5 7 22 12 19 17 22 15.5 14.5" />
        <polygon points="12 6.5 13 8.6 15.3 8.9 13.6 10.5 14 12.8 12 11.7 10 12.8 10.4 10.5 8.7 8.9 11 8.6" />
      </>
    ),
  },
  {
    name: "News",
    icon: (
      <>
        <path d="M3 11v3a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
        <path d="M15 9a4 4 0 0 1 0 6" />
        <path d="M18 6.5a8 8 0 0 1 0 11" />
      </>
    ),
  },
  {
    name: "Exams",
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <polyline points="14 3 14 8 19 8" />
        <polyline points="9 14 11 16 15 12" />
      </>
    ),
  },
  {
    name: "Colleges",
    icon: (
      <>
        <path d="M2 10l10-6 10 6z" />
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="5" y1="10" x2="5" y2="21" />
        <line x1="9.5" y1="10" x2="9.5" y2="21" />
        <line x1="14.5" y1="10" x2="14.5" y2="21" />
        <line x1="19" y1="10" x2="19" y2="21" />
      </>
    ),
  },
  {
    name: "Mock Tests",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="18" x2="13" y2="18" />
      </>
    ),
  },
  {
    name: "Career Guidance Test",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polygon points="16 8 14 14 8 16 10 10" />
      </>
    ),
  },
  {
    name: "Articles",
    icon: (
      <>
        <path d="M4 4h13a1 1 0 0 1 1 1v15H6a2 2 0 0 1-2-2z" />
        <path d="M18 9h2a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2" />
        <line x1="8" y1="8" x2="14" y2="8" />
        <line x1="8" y1="12" x2="14" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </>
    ),
  },
  {
    name: "College Predictor",
    icon: (
      <>
        <polygon points="12 3 2 8 12 13 22 8" />
        <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
        <line x1="22" y1="8" x2="22" y2="14" />
      </>
    ),
  },
  {
    name: "Internships",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="3" y1="13" x2="21" y2="13" />
      </>
    ),
  },
];

function Hero() {
  return (
    <section className="hero" aria-label="Explore Next Step">
      <div className="hero__container">

        {/* ===== Left: categories ===== */}
        <div className="hero__content">
          <span className="hero__eyebrow">Your career starts here</span>
          <h2 className="hero__title">
            Everything you need for your <span className="hero__highlight">next step</span>
          </h2>

          <ul className="hero__cats">
            {CATEGORIES.map((cat) => (
              <li key={cat.name}>
                <a href="#" className="hero__cat">
                  <span className="hero__cat-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {cat.icon}
                    </svg>
                  </span>
                  <span className="hero__cat-name">{cat.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right: image + stat badges (all inside the image) ===== */}
        <div className="hero__visual">
          <div className="hero__frame">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Students studying together"
            />
          </div>

          <div className="hero__stat hero__stat--1">
            <span className="hero__stat-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div className="hero__stat-text">
              <strong>20.8k</strong>
              <span>Registered</span>
            </div>
          </div>

          <div className="hero__stat hero__stat--2">
            <span className="hero__stat-icon">
              <span className="hero__live"></span>
            </span>
            <div className="hero__stat-text">
              <strong>20k</strong>
              <span>Online now</span>
            </div>
          </div>

          <div className="hero__stat hero__stat--3">
            <span className="hero__stat-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </span>
            <div className="hero__stat-text">
              <strong>1.2k+</strong>
              <span>Jobs &amp; Internships</span>
            </div>
          </div>

          <div className="hero__stat hero__stat--4">
            <span className="hero__stat-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" />
              </svg>
            </span>
            <div className="hero__stat-text">
              <strong>4.8/5</strong>
              <span>Student rating</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;