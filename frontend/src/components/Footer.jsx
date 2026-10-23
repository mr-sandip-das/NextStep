import React from "react";
import "../assets/styles/components/Footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* ===== Newsletter card ===== */}
        <div className="footer__cta">
          <div className="footer__cta-text">
            <h3>Stay ahead with Next Step</h3>
            <p>Get new scholarships, exam dates and job alerts straight to your inbox.</p>
          </div>

          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="footer__input"
              placeholder="Enter your email address"
              aria-label="Email address"
            />
            <button type="submit" className="footer__submit">
              Subscribe
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>

        {/* ===== Main columns ===== */}
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="Next Step home">
              <img src={logo} alt="Next Step logo" />
            </a>
            <p className="footer__about">
              Your all-in-one guide for colleges, exams, mock tests, internships and
              careers. Plan smarter and take your next step with confidence.
            </p>

            <ul className="footer__social">
              <li>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <nav className="footer__col" aria-label="Quick links">
            <h4 className="footer__title">Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Create CV</a></li>
              <li><a href="#">Rankometer</a></li>
              <li><a href="#">Blog &amp; News</a></li>
            </ul>
          </nav>

          {/* Categories */}
          <nav className="footer__col" aria-label="Categories">
            <h4 className="footer__title">Categories</h4>
            <ul>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Exams</a></li>
              <li><a href="#">Colleges</a></li>
              <li><a href="#">Mock Tests</a></li>
              <li><a href="#">Internships</a></li>
            </ul>
          </nav>

          {/* Support */}
          <nav className="footer__col" aria-label="Support">
            <h4 className="footer__title">Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Report a Problem</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__col footer__contact">
            <h4 className="footer__title">Get in Touch</h4>
            <ul>
              <li>
                <span className="footer__contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <polyline points="22 6 12 13 2 6" />
                  </svg>
                </span>
                <a href="mailto:support@nextstep.com">support@nextstep.com</a>
              </li>
              <li>
                <span className="footer__contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </li>
              <li>
                <span className="footer__contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Kolkata, West Bengal, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="footer__bottom">
          <p>&copy; 2026 Next Step. All rights reserved.</p>

          <ul className="footer__legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>

          <a href="#" className="footer__top" aria-label="Back to top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;