import "../assets/styles/pages/Login.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const highlights = [
  "Explore colleges, exams and career paths",
  "Practice with free mock tests",
  "Find internships and jobs made for students",
];

const stats = [
  { value: "20.8k+", label: "Registered students" },
  { value: "1.2k", label: "Colleges listed" },
];

export default function Login() {
  return (
    <section className="login-page">
      <div className="login-wrapper">
        {/* ===== Left brand panel ===== */}
        <aside className="login-brand">
          <Link to="/" className="login-brand-logo">
            <img src={logo} alt="Next Step" />
          </Link>

          <div className="login-brand-body">
            <span className="login-eyebrow">Student Portal</span>
            <h2 className="login-brand-title">
              Take your next step with confidence
            </h2>
            <p className="login-brand-text">
              Sign in to track your progress, save colleges and receive guidance
              that fits your goals.
            </p>

            <ul className="login-highlights">
              {highlights.map((text) => (
                <li key={text} className="login-highlight">
                  <span className="login-check">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="login-brand-stats">
            {stats.map((s) => (
              <div key={s.label} className="login-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ===== Right form panel ===== */}
        <div className="login-card">
          <div className="login-head">
            <h1 className="login-title">Welcome back</h1>
            <p className="login-subtitle">
              Please enter your details to access your account
            </p>
          </div>

          <form className="login-form" action="#" method="post">
            <div className="login-field">
              <label htmlFor="login-email" className="login-label">
                Email address
              </label>
              <div className="login-input-wrap">
                <svg className="login-input-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  className="login-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="login-password" className="login-label">
                Password
              </label>
              <div className="login-input-wrap">
                <svg className="login-input-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 018 0v3" />
                </svg>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  className="login-input"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div className="login-options">
              <label className="login-remember" htmlFor="login-remember">
                <input id="login-remember" name="remember" type="checkbox" />
                <span>Keep me logged in</span>
              </label>
              <a href="/forgot-password" className="login-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-btn login-btn-primary">
              Login
              <svg className="login-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <a href="/auth/google" className="login-btn login-btn-outline">
            <svg className="login-google-icon" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.6 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
              <path fill="#FBBC05" d="M10.5 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.9-6.2C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.2z" />
              <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.2C6.5 42.6 14.6 48 24 48z" />
            </svg>
            Continue with Google
          </a>

          <p className="login-signup">
            New to Next Step?{" "}
            <Link to="/signup" className="login-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}