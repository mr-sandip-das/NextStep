import React from "react";
import "../assets/styles/components/Feedback.css";

function Feedback() {
  return (
    <section className="fb" id="feedback" aria-labelledby="fb-title">
      <div className="fb__container">

        {/* ===== Section heading ===== */}
        <header className="fb__header">
          <span className="fb__eyebrow">Student Feedback</span>
          <h2 className="fb__title" id="fb-title">
            What students say about <span className="fb__highlight">Next Step</span>
          </h2>
          <p className="fb__subtitle">
            Real words from students who found their path with us. Tell us how we are
            doing, because your feedback helps us improve.
          </p>
        </header>

        <div className="fb__grid">

          {/* ===== Left: rating summary + reviews ===== */}
          <div className="fb__left">

            <div className="fb__summary">
              <div className="fb__score">
                <strong>4.8</strong>
                <span className="fb__rate fb__rate--48" role="img" aria-label="Rated 4.8 out of 5">★★★★★</span>
                <small>Based on 2,300+ reviews</small>
              </div>
              <div className="fb__summary-divider"></div>
              <div className="fb__recommend">
                <strong>98%</strong>
                <small>of students would recommend Next Step to a friend</small>
              </div>
            </div>

            <ul className="fb__reviews">
              <li className="fb__review">
                <svg className="fb__quote" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 11H6a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v7h6zm10 0h-4a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v7h6z" />
                </svg>
                <div className="fb__review-head">
                  <span className="fb__avatar">RS</span>
                  <div className="fb__person">
                    <strong>Riya Sharma</strong>
                    <span>B.Tech Student</span>
                  </div>
                  <span className="fb__rate fb__rate--5" role="img" aria-label="Rated 5 out of 5">★★★★★</span>
                </div>
                <p className="fb__text">
                  The mock tests and Rankometer showed me exactly where I stand. I
                  cracked my exam with confidence!
                </p>
              </li>

              <li className="fb__review">
                <svg className="fb__quote" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 11H6a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v7h6zm10 0h-4a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v7h6z" />
                </svg>
                <div className="fb__review-head">
                  <span className="fb__avatar">AD</span>
                  <div className="fb__person">
                    <strong>Arjun Das</strong>
                    <span>Class 12 Student</span>
                  </div>
                  <span className="fb__rate fb__rate--5" role="img" aria-label="Rated 5 out of 5">★★★★★</span>
                </div>
                <p className="fb__text">
                  College Predictor made choosing a college so easy. Everything I needed
                  was in one place.
                </p>
              </li>

              <li className="fb__review">
                <svg className="fb__quote" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 11H6a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v7h6zm10 0h-4a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v7h6z" />
                </svg>
                <div className="fb__review-head">
                  <span className="fb__avatar">SR</span>
                  <div className="fb__person">
                    <strong>Sneha Roy</strong>
                    <span>Final Year Student</span>
                  </div>
                  <span className="fb__rate fb__rate--4" role="img" aria-label="Rated 4 out of 5">★★★★★</span>
                </div>
                <p className="fb__text">
                  I made my CV in minutes and found two internships through the site.
                  Very helpful for students!
                </p>
              </li>
            </ul>
          </div>

          {/* ===== Right: feedback form ===== */}
          <form className="fb__form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="fb__form-title">Share your feedback</h3>
            <p className="fb__form-sub">It only takes a minute. We read every message.</p>

            <div className="fb__fields">
              <div className="fb__field">
                <label htmlFor="fb-name">Full name</label>
                <input id="fb-name" type="text" placeholder="Your name" required />
              </div>

              <div className="fb__field">
                <label htmlFor="fb-email">Email address</label>
                <input id="fb-email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="fb__field fb__field--full">
                <label htmlFor="fb-type">Feedback type</label>
                <select id="fb-type" defaultValue="general">
                  <option value="general">General feedback</option>
                  <option value="suggestion">Suggestion / new idea</option>
                  <option value="content">Content or data issue</option>
                  <option value="problem">Report a problem</option>
                </select>
              </div>

              <div className="fb__field fb__field--full">
                <span className="fb__label" id="fb-rating-label">Rate your experience</span>
                <div className="fb__stars" role="radiogroup" aria-labelledby="fb-rating-label">
                  <input type="radio" name="rating" id="fb-star5" value="5" />
                  <label htmlFor="fb-star5" title="Excellent">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" /></svg>
                    <span className="fb__sr">5 stars</span>
                  </label>

                  <input type="radio" name="rating" id="fb-star4" value="4" />
                  <label htmlFor="fb-star4" title="Good">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" /></svg>
                    <span className="fb__sr">4 stars</span>
                  </label>

                  <input type="radio" name="rating" id="fb-star3" value="3" />
                  <label htmlFor="fb-star3" title="Okay">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" /></svg>
                    <span className="fb__sr">3 stars</span>
                  </label>

                  <input type="radio" name="rating" id="fb-star2" value="2" />
                  <label htmlFor="fb-star2" title="Poor">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" /></svg>
                    <span className="fb__sr">2 stars</span>
                  </label>

                  <input type="radio" name="rating" id="fb-star1" value="1" />
                  <label htmlFor="fb-star1" title="Very poor">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" /></svg>
                    <span className="fb__sr">1 star</span>
                  </label>
                </div>
              </div>

              <div className="fb__field fb__field--full">
                <label htmlFor="fb-message">Your message</label>
                <textarea id="fb-message" rows="4" placeholder="Tell us what you liked or what we can improve..." required></textarea>
              </div>
            </div>

            <button type="submit" className="fb__submit">
              Send feedback
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Feedback;