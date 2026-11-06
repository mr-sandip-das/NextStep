import "../assets/styles/pages/Signup.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const highlights = [
  "Free mock tests and exam updates",
  "Personalised college and career guidance",
  "Internships and jobs made for students",
];

export default function Signup() {
  // Send OTP
  const handleSendOtp = () => {
    alert("OTP functionality will be connected with backend.");
  };

  // Signup
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
    // Registration API will be connected here.
  };

  return (
    <section className="signup-page">
      <div className="signup-wrapper">
        {/* ================= Left Brand Panel ================= */}
        <aside className="signup-brand">
          <Link to="/" className="signup-brand-logo">
            <img src={logo} alt="Next Step" />
          </Link>

          <div className="signup-brand-body">
            <span className="signup-badge">Student Portal</span>

            <h2 className="signup-brand-title">
              Start your journey with Next Step
            </h2>

            <p className="signup-brand-text">
              Create your free account to get guidance on the right exams,
              colleges and opportunities.
            </p>

            <ul className="signup-highlights">
              {highlights.map((text) => (
                <li key={text} className="signup-highlight">
                  <span className="signup-check">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="signup-stats">
            <div className="signup-stat">
              <strong>20.8k+</strong>
              <span>Registered students</span>
            </div>
            <div className="signup-stat">
              <strong>1.2k</strong>
              <span>Colleges listed</span>
            </div>
          </div>
        </aside>

        {/* ================= Signup Form ================= */}
        <div className="signup-card">
          {/* Mobile Logo */}
          <Link to="/" className="signup-mobile-logo">
            <img src={logo} alt="Next Step" />
          </Link>

          <div className="signup-head">
            <h1 className="signup-title">Create account</h1>
            <p className="signup-subtitle">
              Please enter your details to create your account
            </p>
          </div>

          <form
            className="signup-form"
            onSubmit={handleSignup}
            encType="multipart/form-data"
          >
            {/* Full Name */}
            <div className="signup-field">
              <label htmlFor="signup-name" className="signup-label">
                Full name
              </label>
              <div className="signup-input-wrap">
                <svg className="signup-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  className="signup-input"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            {/* Email + Send OTP */}
            <div className="signup-field">
              <label htmlFor="signup-email" className="signup-label">
                Email address
              </label>
              <div className="signup-email-row">
                <div className="signup-input-wrap">
                  <svg className="signup-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    className="signup-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="signup-otp-btn"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              </div>
            </div>

            {/* Email OTP */}
            <div className="signup-field">
              <label htmlFor="signup-otp" className="signup-label">
                Email verification OTP
              </label>
              <div className="signup-input-wrap">
                <svg className="signup-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <input
                  id="signup-otp"
                  name="emailOtp"
                  type="text"
                  className="signup-input signup-otp-input"
                  placeholder="Enter 6-digit OTP"
                  inputMode="numeric"
                  maxLength={6}
                  pattern="[0-9]{6}"
                  autoComplete="one-time-code"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="signup-field">
              <label htmlFor="signup-password" className="signup-label">
                Password
              </label>
              <div className="signup-input-wrap">
                <svg className="signup-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 018 0v3" />
                </svg>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  className="signup-input"
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>
            </div>

            {/* Profile Photo */}
            <div className="signup-field">
              <label
                htmlFor="signup-photo"
                className="signup-label signup-label-optional"
              >
                Profile photo
              </label>
              <div className="signup-input-wrap">
                <svg className="signup-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="9" cy="11" r="2" />
                  <path d="M21 16l-5-5-8 8" />
                </svg>
                <input
                  id="signup-photo"
                  name="photo"
                  type="file"
                  className="signup-input signup-file"
                  accept="image/png, image/jpeg, image/webp"
                />
              </div>
            </div>

            {/* Create Account Button */}
            <button type="submit" className="signup-btn">
              Create Account
              <svg
                className="signup-btn-arrow"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          <p className="signup-login">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}