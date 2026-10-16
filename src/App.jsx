
import React from "react";
import "./App.css";

const categories = [
  { icon: "🧹", name: "Home Cleaning", count: "12 providers" },
  { icon: "🔧", name: "Plumbing", count: "8 providers" },
  { icon: "⚡", name: "Electrical", count: "10 providers" },
  { icon: "💇", name: "Beauty & Wellness", count: "15 providers" },
  { icon: "🛠️", name: "Home Repairs", count: "9 providers" },
  { icon: "📦", name: "Moving", count: "6 providers" },
];

const services = [
  {
    icon: "🧹",
    name: "Home Cleaning",
    description: "Make your home fresh and spotless.",
    rating: "4.9",
    reviews: "124 reviews",
    price: "₹499",
    color: "mint",
  },
  {
    icon: "🔧",
    name: "Plumbing Help",
    description: "Quick solutions for everyday leaks.",
    rating: "4.8",
    reviews: "98 reviews",
    price: "₹299",
    color: "peach",
  },
  {
    icon: "⚡",
    name: "Electrician",
    description: "Safe and reliable electrical repairs.",
    rating: "4.9",
    reviews: "86 reviews",
    price: "₹349",
    color: "lavender",
  },
];

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    scrollTo("services");
  };

  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">⌂</span>
          Local<span>Serve</span>
        </a>

        <nav className="nav-links">
          <a href="#categories">Categories</a>
          <a href="#services">Explore Services</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={() => alert("Login will be available soon!")}
          >
            Log in
          </button>
          <button
            className="btn btn-primary nav-cta"
            onClick={() => scrollTo("categories")}
          >
            Get Started <span>↗</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              YOUR NEIGHBORHOOD, YOUR PEOPLE
            </div>

            <h1>
              Great service.
              <br />
              <span>Right around</span>
              <br />
              the corner.
            </h1>

            <p className="hero-description">
              From fixing a leaky tap to making your home
              sparkle, discover trusted local professionals
              who make everyday life easier.
            </p>

            <form className="search-box" onSubmit={handleSearch}>
              <label className="search-field">
                <span>⌕</span>
                <input
                  type="text"
                  placeholder="What service do you need?"
                  aria-label="Service needed"
                />
              </label>

              <div className="search-divider"></div>

              <label className="search-field location-field">
                <span>⌖</span>
                <input
                  type="text"
                  placeholder="Your location"
                  aria-label="Your location"
                />
              </label>

              <button className="btn btn-primary search-btn" type="submit">
                Search <span>→</span>
              </button>
            </form>

            <div className="trust-line">
              <div className="avatar-stack">
                <span>👨🏻</span>
                <span>👩🏽</span>
                <span>👨🏾</span>
              </div>
              <p>
                <strong>500+</strong> local professionals
                <br />
                ready to help you
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="visual-label label-top">
              <span className="label-icon">✓</span>
              <div>
                <strong>Trusted professionals</strong>
                <small>Quality you can count on</small>
              </div>
            </div>

            <div className="hero-art">
              <div className="art-circle">
                <div className="art-person">
                  <div className="person-hair"></div>
                  <div className="person-face">
                    <span className="eye eye-left"></span>
                    <span className="eye eye-right"></span>
                    <span className="smile"></span>
                  </div>
                  <div className="person-neck"></div>
                  <div className="person-body">
                    <span className="shirt-pocket"></span>
                  </div>
                  <div className="person-arm"></div>
                  <div className="toolbox">
                    <span>✦</span>
                  </div>
                </div>
              </div>
              <span className="floating-icon float-one">🔧</span>
              <span className="floating-icon float-two">✨</span>
              <span className="floating-icon float-three">🏠</span>
            </div>

            <div className="visual-label label-bottom">
              <div className="rating-star">★</div>
              <div>
                <strong>4.9 out of 5</strong>
                <small>Loved by your neighbors</small>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories section" id="categories">
          <div className="section-heading">
            <div>
              <span className="section-kicker">WHAT DO YOU NEED?</span>
              <h2>Find your kind of help.</h2>
            </div>
            <button
              className="text-link"
              onClick={() => scrollTo("services")}
            >
              Explore all services <span>→</span>
            </button>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <button
                className="category-card"
                key={category.name}
                onClick={() => scrollTo("services")}
              >
                <span className={`category-icon icon-${index}`}>
                  {category.icon}
                </span>
                <strong>{category.name}</strong>
                <small>{category.count}</small>
                <span className="category-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        {/* Popular services */}
        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">LOCAL FAVORITES</span>
              <h2>Popular around here.</h2>
              <p className="section-description">
                A few neighborhood favorites to get you started.
              </p>
            </div>
            <button
              className="btn btn-outline"
              onClick={() =>
                alert("The full services directory is coming soon!")
              }
            >
              View all services <span>→</span>
            </button>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className={`service-art ${service.color}`}>
                  <span className="service-emoji">{service.icon}</span>
                  <span className="popular-badge">Popular choice</span>
                  <button
                    className="favorite-btn"
                    aria-label={`Save ${service.name}`}
                    onClick={(event) => {
                      event.currentTarget.classList.toggle("is-favorite");
                      event.currentTarget.textContent =
                        event.currentTarget.classList.contains("is-favorite")
                          ? "♥"
                          : "♡";
                    }}
                  >
                    ♡
                  </button>
                </div>

                <div className="service-info">
                  <div className="service-rating">
                    <span>★</span> {service.rating}
                    <span className="review-count">
                      ({service.reviews})
                    </span>
                  </div>

                  <h3>{service.name}</h3>
                  <p>{service.description}</p>

                  <div className="service-footer">
                    <div>
                      <small>Starting from</small>
                      <strong>{service.price}</strong>
                    </div>
                    <button
                      className="details-btn"
                      onClick={() =>
                        alert(
                          `${service.name} details and booking will be available soon!`
                        )
                      }
                    >
                      View details <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="demo-note">
            * Sample listings and prices shown for demonstration purposes.
          </p>
        </section>

        {/* How it works */}
        <section className="how-section section" id="how-it-works">
          <div className="how-intro">
            <span className="section-kicker">SIMPLE AS IT SHOULD BE</span>
            <h2>Good help, in three easy steps.</h2>
            <p>
              No endless searching. No unnecessary hassle.
              Just the help you need, when you need it.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("categories")}
            >
              Find a service <span>→</span>
            </button>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <span className="step-icon">🔎</span>
              <h3>Discover</h3>
              <p>Find the right service for your needs and location.</p>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <span className="step-icon">🤝</span>
              <h3>Connect</h3>
              <p>Explore local providers and choose your favorite.</p>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <span className="step-icon">✨</span>
              <h3>Get it done</h3>
              <p>Connect with your provider and get things sorted.</p>
            </div>
          </div>
        </section>

        {/* Provider CTA */}
        <section className="provider-banner">
          <div>
            <span className="section-kicker">ARE YOU A PROFESSIONAL?</span>
            <h2>Your skills deserve to be discovered.</h2>
            <p>
              Meet new customers, grow your local business,
              and let your work speak for itself.
            </p>
          </div>
          <button
            className="btn btn-light"
            onClick={() =>
              alert("Provider registration will be available soon!")
            }
          >
            Become a provider <span>↗</span>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#" className="logo footer-logo">
          <span className="logo-icon">⌂</span>
          Local<span>Serve</span>
        </a>
        <p>Bringing good people and great services closer.</p>
        <div className="footer-links">
          <a href="#categories">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="http://kishan-site.vercel.app">Meet the developer</a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} LocalServe. Demo preview.
        </span>
      </footer>
    </div>
  );
}

export default App;
