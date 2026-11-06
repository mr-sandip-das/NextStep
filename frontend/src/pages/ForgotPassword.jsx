import "../assets/styles/pages/Login.css";
import "../assets/styles/pages/ForgotPassword.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const otpBoxes = [1, 2, 3, 4, 5, 6];

export default function ForgotPassword() {
  return (
    <section className="login-page">
      <div className="fp-card">
        <Link to="/" className="fp-logo">
          <img src={logo} alt="Next Step" />
        </Link>

        <div className="fp-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V8a4 4 0 018 0v3" />
            <circle cx="12" cy="15.5" r="1" />
          </svg>
        </div>

        <h1 className="fp-title">Forgot your password?</h1>
        <p className="fp-subtitle">
          No worries. Verify your identity with a one-time password (OTP) and
          we will help you set a new one.
        </p>

        <form className="fp-form" action="#" method="post">
          {/* Step 1: choose method */}
          <div className="fp-field">
            <span className="fp-label">Receive OTP via</span>
            <div className="fp-methods">
              <label className="fp-method">
                <input type="radio" name="method" value="email" defaultChecked />
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span>Email</span>
              </label>

              <label className="fp-method">
                <input type="radio" name="method" value="mobile" />
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="7" y="2.5" width="10" height="19" rx="2" />
                  <path d="M11 18.5h2" />
                </svg>
                <span>Mobile</span>
              </label>
            </div>
          </div>

          {/* Step 2: contact + send OTP */}
          <div className="fp-field fp-field-email">
            <label htmlFor="fp-email" className="fp-label">
              Email address
            </label>
            <div className="login-input-wrap">
              <svg className="login-input-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <input
                id="fp-email"
                name="email"
                type="email"
                className="login-input"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="fp-field fp-field-mobile">
            <label htmlFor="fp-mobile" className="fp-label">
              Mobile number
            </label>
            <div className="login-input-wrap">
              <svg className="login-input-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="7" y="2.5" width="10" height="19" rx="2" />
                <path d="M11 18.5h2" />
              </svg>
              <input
                id="fp-mobile"
                name="mobile"
                type="tel"
                className="login-input"
                placeholder="+91 98765 43210"
                autoComplete="tel"
              />
            </div>
          </div>

          <button type="button" className="login-btn fp-btn-send">
            Send OTP
          </button>

          {/* Step 3: enter OTP */}
          <div className="fp-field">
            <span className="fp-label">Enter 6-digit OTP</span>
            <div className="fp-otp">
              {otpBoxes.map((n) => (
                <input
                  key={n}
                  name={`otp${n}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  pattern="[0-9]"
                  className="fp-otp-input"
                  aria-label={`OTP digit ${n}`}
                />
              ))}
            </div>
            <div className="fp-resend">
              <span>Didn't receive the code?</span>
              <button type="button" className="fp-resend-btn">
                Resend OTP
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn login-btn-primary">
            Verify &amp; Continue
            <svg className="login-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>

        <Link to="/login" className="fp-back">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back to login
        </Link>
      </div>
    </section>
  );
}