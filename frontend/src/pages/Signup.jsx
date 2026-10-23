import "../assets/styles/pages/Signup.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const highlights = [
  "Free mock tests and exam updates",
  "Personalised college and career guidance",
  "Internships and jobs made for students",
];

export default function Signup() {
  return (
    <section className="signup-page">
      <div className="signup-wrapper">
        {/* ===== Left brand panel ===== */}
        <aside className="signup-brand">
          <Link to="/" className="signup-brand-logo">
            <img src={logo} alt="Next Step" />
          </Link>

          <div className="signup-brand-body">
            <span className="signup-eyebrow">Join Next Step</span>
            <h2 className="signup-brand-title">
              Create your free student account
            </h2>
            <p className="signup-brand-text">
              Tell us a little about yourself so we can guide you to the right
              exams, colleges and opportunities.
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

          <div className="signup-brand-stat">
            <strong>20.8k+</strong>
            <span>students already registered</span>
          </div>
        </aside>

        {/* ===== Right form panel ===== */}
        <div className="signup-card">
          <div className="signup-head">
            <h1 className="signup-title">Create account</h1>
            <p className="signup-subtitle">
              It only takes a minute to get started
            </p>
          </div>

          <form className="signup-form" action="#" method="post">
            {/* Name */}
            <div className="signup-field">
              <label htmlFor="signup-name" className="signup-label">
                Full name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                className="signup-input"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            {/* Email */}
            <div className="signup-field">
              <label htmlFor="signup-email" className="signup-label">
                Email address
              </label>
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

            {/* Password */}
            <div className="signup-field">
              <label htmlFor="signup-password" className="signup-label">
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                className="signup-input"
                placeholder="Minimum 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            {/* Domain */}
            <div className="signup-field">
              <label htmlFor="signup-domain" className="signup-label">
                I am a
              </label>
              <select
                id="signup-domain"
                name="domain"
                className="signup-input signup-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your domain
                </option>
                <option value="student">Student</option>
                <option value="graduate">Graduate / Fresher</option>
                <option value="job-seeker">Job Seeker</option>
                <option value="working">Working Professional</option>
                <option value="teacher">Teacher / Mentor</option>
                <option value="parent">Parent / Guardian</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Education type: School / College */}
            <div className="signup-field">
              <span className="signup-label">Education type</span>
              <div className="signup-pills">
                <label className="signup-pill">
                  <input type="radio" name="educationType" value="school" defaultChecked />
                  <span>School</span>
                </label>
                <label className="signup-pill">
                  <input type="radio" name="educationType" value="college" />
                  <span>College</span>
                </label>
              </div>
            </div>

            {/* Status: Passed / Continuing */}
            <div className="signup-field">
              <span className="signup-label">Status</span>
              <div className="signup-pills">
                <label className="signup-pill">
                  <input type="radio" name="status" value="continuing" defaultChecked />
                  <span>Continuing</span>
                </label>
                <label className="signup-pill">
                  <input type="radio" name="status" value="passed" />
                  <span>Passed</span>
                </label>
              </div>
            </div>

            {/* Class / Course */}
            <div className="signup-field">
              <label htmlFor="signup-class" className="signup-label">
                Class / Course
              </label>
              <select
                id="signup-class"
                name="classOrCourse"
                className="signup-input signup-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select class or course
                </option>
                <optgroup label="School">
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </optgroup>
                <optgroup label="College">
                  <option value="diploma">Diploma</option>
                  <option value="ug">UG (B.A / B.Sc / B.Com / B.Tech)</option>
                  <option value="pg">PG (M.A / M.Sc / M.Com / M.Tech / MBA)</option>
                  <option value="phd">PhD</option>
                </optgroup>
              </select>
            </div>

            {/* Stream / Interest */}
            <div className="signup-field">
              <label htmlFor="signup-stream" className="signup-label">
                Stream / Interest
              </label>
              <select
                id="signup-stream"
                name="stream"
                className="signup-input signup-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your stream
                </option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts / Humanities</option>
                <option value="engineering">Engineering / Technology</option>
                <option value="medical">Medical / Healthcare</option>
                <option value="law">Law</option>
                <option value="management">Management</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Terms */}
            <label className="signup-terms" htmlFor="signup-terms">
              <input id="signup-terms" name="terms" type="checkbox" required />
              <span>
                I agree to the{" "}
                <a href="/terms" className="signup-link">Terms of Service</a> and{" "}
                <a href="/privacy" className="signup-link">Privacy Policy</a>
              </span>
            </label>

            {/* Submit */}
            <button type="submit" className="signup-btn">
              Create Account
              <svg className="signup-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          <p className="signup-login">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}