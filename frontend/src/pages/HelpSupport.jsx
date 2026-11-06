
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/HelpSupport.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    category: "Account",
    question: "How can I create a NextStep account?",
    answer:
      "Click the Register button, enter your full name, email and password, and verify your email using the OTP sent to your inbox."
  },
  {
    category: "Account",
    question: "I forgot my password. What should I do?",
    answer:
      "Visit the login page and select Forgot Password. Follow the password recovery instructions to create a new password."
  },
  {
    category: "Account",
    question: "How can I change my profile information?",
    answer:
      "Log in to your account and visit your profile settings to update the information available for editing."
  },
  {
    category: "Courses",
    question: "Can I explore courses without registering?",
    answer:
      "Yes! You can browse publicly available courses and learning resources without creating an account. Some personalized features may require login."
  },
  {
    category: "Courses",
    question: "How can I find a learning roadmap?",
    answer:
      "Visit the Roadmaps section and explore learning paths based on your interests and career goals."
  },
  {
    category: "Opportunities",
    question: "Where can I find jobs and internships?",
    answer:
      "Visit the Jobs & Internships section to explore available career opportunities and their application details."
  },
  {
    category: "Technical",
    question: "The website is not working properly. What can I do?",
    answer:
      "Try refreshing the page, checking your internet connection, or using an updated browser. If the problem continues, contact our support team."
  }
];

const categories = ["All", "Account", "Courses", "Opportunities", "Technical"];

function HelpSupport() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
  <>
  <Navbar />

  <main className="help-page">

      {/* Hero */}
      <section className="help-hero">
        <div className="help-container">
          <span className="help-eyebrow">WE ARE HERE TO HELP</span>
          <h1>
            How Can We <span>Help You?</span>
          </h1>
          <p>
            Have a question or need assistance? Find answers to
            common questions or get in touch with the NextStep team.
          </p>

          <div className="help-search">
            <span className="help-search-icon">⌕</span>
            <input
              type="text"
              placeholder="Search for help, courses, account..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                document.getElementById("help-faq")?.scrollIntoView({
                  behavior: "smooth"
                })
              }
            >
              Search
            </button>
          </div>

          <div className="help-quick-links">
            <span>Popular:</span>
            <button onClick={() => setSearch("account")}>Account</button>
            <button onClick={() => setSearch("courses")}>Courses</button>
            <button onClick={() => setSearch("password")}>Password</button>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="help-contact-section">
        <div className="help-container">
          <div className="help-section-heading">
            <span className="help-eyebrow">GET SUPPORT</span>
            <h2>How Can We Assist You?</h2>
            <p>Choose the best way to get help with your questions.</p>
          </div>

          <div className="help-contact-grid">
            <article className="help-contact-card">
              <div className="help-contact-icon">✉</div>
              <h3>Email Support</h3>
              <p>
                Send us your questions and describe the issue you
                are facing.
              </p>
              <a href="mailto:support@nextstep.com">
                Email Us <span>→</span>
              </a>
            </article>

            <article className="help-contact-card">
              <div className="help-contact-icon">❔</div>
              <h3>FAQs</h3>
              <p>
                Find quick answers to common questions about
                using NextStep.
              </p>
              <a href="#help-faq">
                Explore FAQs <span>→</span>
              </a>
            </article>

            <article className="help-contact-card">
              <div className="help-contact-icon">📝</div>
              <h3>Submit a Request</h3>
              <p>
                Tell us about your problem and send a support
                request to our team.
              </p>
              <a href="#help-request">
                Get Assistance <span>→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="help-faq-section" id="help-faq">
        <div className="help-container">
          <div className="help-section-heading">
            <span className="help-eyebrow">HELP CENTER</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Browse common questions and find the answers
              you are looking for.
            </p>
          </div>

          <div className="help-category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => {
                  setActiveCategory(category);
                  setOpenFaq(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="help-faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === faq.question;

                return (
                  <article className="help-faq-item" key={faq.question}>
                    <button
                      className="help-faq-question"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : faq.question)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="help-faq-answer">
                        {faq.answer}
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="help-no-results">
                <span>⌕</span>
                <h3>No matching questions found</h3>
                <p>
                  Try another search term or select a different category.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support form */}
      <section className="help-request-section" id="help-request">
        <div className="help-container help-request-layout">

          <div className="help-request-info">
            <span className="help-eyebrow">CONTACT OUR TEAM</span>
            <h2>
              Still Need <span>Help?</span>
            </h2>
            <p>
              Can't find the answer you need? Send us a message.
              Tell us what's happening, and we'll help you find
              the right solution.
            </p>

            <div className="help-info-item">
              <span>✉</span>
              <div>
                <h4>Email</h4>
                <p>support@nextstep.com</p>
              </div>
            </div>

            <div className="help-info-item">
              <span>◷</span>
              <div>
                <h4>Support Hours</h4>
                <p>Monday – Saturday</p>
              </div>
            </div>
          </div>

          <div className="help-form-card">
            {submitted ? (
              <div className="help-success">
                <div>✓</div>
                <h3>Thank You!</h3>
                <p>
                  Your message was submitted in this demo.
                  Connect the form to your backend to send a real
                  support request.
                </p>
                <button onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <p className="help-form-subtitle">
                  Fill in the details below.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="help-form-row">
                    <div className="help-form-group">
                      <label htmlFor="help-name">Full Name</label>
                      <input
                        id="help-name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="help-form-group">
                      <label htmlFor="help-email">Email Address</label>
                      <input
                        id="help-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="help-form-group">
                    <label htmlFor="help-subject">Subject</label>
                    <select id="help-subject" name="subject" required>
                      <option value="">Select a topic</option>
                      <option>Account & Login</option>
                      <option>Courses & Learning</option>
                      <option>Jobs & Internships</option>
                      <option>Technical Problem</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="help-form-group">
                    <label htmlFor="help-message">Your Message</label>
                    <textarea
                      id="help-message"
                      name="message"
                      rows="5"
                      placeholder="Describe how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button className="help-submit-btn" type="submit">
                    Submit Request <span>→</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="help-bottom-cta">
        <div className="help-container">
          <h2>Keep Learning. Keep Growing.</h2>
          <p>
            Your next step is always worth taking. Explore
            everything NextStep has to offer.
          </p>
          <Link to="/" className="help-home-btn">
            Explore NextStep <span>→</span>
          </Link>
        </div>
      </section>

    </main>

  <Footer />
  </>
  );
}

export default HelpSupport;
