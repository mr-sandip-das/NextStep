
import "../assets/styles/pages/About.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    description:
      "To make quality learning resources and career opportunities accessible to everyone, regardless of their background."
  },
  {
    icon: "🚀",
    title: "Our Vision",
    description:
      "To build a platform where anyone can discover their potential, develop valuable skills and move towards a successful career."
  },
  {
    icon: "🤝",
    title: "Our Commitment",
    description:
      "We aim to provide a simple, accessible and useful learning experience that supports every user's growth."
  }
];

const features = [
  {
    number: "01",
    title: "Explore Courses",
    description:
      "Discover learning resources and courses to develop your knowledge and practical skills."
  },
  {
    number: "02",
    title: "Follow Roadmaps",
    description:
      "Find structured learning paths that help you understand what to learn and where to start."
  },
  {
    number: "03",
    title: "Practice & Improve",
    description:
      "Improve your problem-solving skills through coding practice, mock tests and useful resources."
  },
  {
    number: "04",
    title: "Discover Opportunities",
    description:
      "Explore job openings, internships and career opportunities to take your next step."
  }
];

function About() {
  return (
    <>
    <Navbar />

    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container about-hero-content">

          <div className="about-hero-text">
            <span className="about-label">
              ABOUT NEXTSTEP
            </span>

            <h1>
              Your Journey to a
              <span> Better Future </span>
              Starts Here.
            </h1>

            <p>
              NextStep is an open learning and career development
              platform designed to help students, developers and
              lifelong learners discover knowledge, build skills
              and explore new opportunities.
            </p>

            <div className="about-hero-buttons">
              <Link to="/courses" className="about-btn about-btn-primary">
                Explore Courses <span>→</span>
              </Link>

              <Link to="/contact" className="about-btn about-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-card">
              <div className="about-visual-icon">N</div>
              <span className="visual-small-label">WELCOME TO</span>
              <h2>NextStep</h2>
              <p>Learn. Grow. Achieve.</p>

              <div className="visual-progress">
                <span></span>
              </div>

              <div className="visual-bottom">
                <span>YOUR FUTURE</span>
                <span>STARTS TODAY ↗</span>
              </div>
            </div>

            <div className="floating-card floating-top">
              <span>✦</span> Learn Something New
            </div>

            <div className="floating-card floating-bottom">
              <span>✓</span> Keep Moving Forward
            </div>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro about-container">
        <div className="about-intro-heading">
          <span className="about-label">WHO WE ARE</span>
          <h2>
            A Platform Built for
            <span> Your Growth</span>
          </h2>
        </div>

        <div className="about-intro-description">
          <p>
            Learning should not be limited to a classroom.
            Everyone should have the opportunity to explore
            new technologies, improve their abilities and
            prepare for the future.
          </p>

          <p>
            That's the idea behind NextStep. We bring learning
            resources, career guidance, practice materials and
            opportunities together in one place, making it
            easier for people to take control of their growth.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">WHAT DRIVES US</span>
            <h2>Our Purpose & Values</h2>
            <p>
              Everything we build is guided by a simple goal:
              helping people move forward.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((item, index) => (
              <article className="about-value-card" key={item.title}>
                <div className="value-icon">{item.icon}</div>
                <span className="value-number">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-offer-section about-container">
        <div className="about-section-heading">
          <span className="about-label">WHAT YOU CAN DO</span>
          <h2>Everything You Need to Take Your Next Step</h2>
          <p>
            Explore different ways to learn, practice and
            discover opportunities.
          </p>
        </div>

        <div className="about-features-grid">
          {features.map((item) => (
            <article className="about-feature-card" key={item.number}>
              <span className="feature-number">{item.number}</span>
              <div className="feature-arrow">↗</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta-section">
        <div className="about-container about-cta-content">
          <div>
            <span className="about-label">YOUR NEXT CHAPTER</span>
            <h2>
              Ready to Take Your
              <span> Next Step?</span>
            </h2>
            <p>
              Start exploring new knowledge, building skills
              and discovering opportunities today.
            </p>
          </div>

          <div className="about-cta-buttons">
            <Link to="/register" className="about-btn about-btn-light">
              Get Started <span>→</span>
            </Link>
            <Link to="/" className="about-cta-home">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </main>

    <Footer />
    </>
  );
}

export default About;
