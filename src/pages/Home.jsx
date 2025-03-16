import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero_img.png";
import logo from "../assets/legacylacrosselogo.png";

export default function Home() {
  return (
    <div className="page-container">
      {/* Header & Navigation */}
      <header className="header">
        {/* Logo (Clicking Redirects to Home) */}
        <a href="/" className="logo-container">
          <img src={logo} alt="Legacy Lacrosse Logo" className="logo-img" />
          <h1 className="site-title">Legacy Lacrosse Training</h1>
        </a>

        <nav className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/pricing" className="nav-item">Pricing</NavLink>
          <NavLink to="/booking" className="nav-item">Book a Session</NavLink>
          <NavLink to="/contact" className="nav-item">Contact</NavLink>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Elevate Your Game with Elite Goalie Training</h2>
          <p className="hero-text">
            I’m <span className="font-semibold">Jackson McKeigue</span>, a Hanover College graduate with 12 years of experience in the goalie position. 
            I've trained goalies through Xcelerate, BMAALGI, and South Bend Adams Club Team. Now, I’m bringing my passion and expertise to Indianapolis 
            to help goalies play at the next level.
          </p>
          <p className="hero-text">
            With limited personal training opportunities in Indianapolis, my goal is to build confidence, sharpen skills, and create a fun, competitive environment 
            where goalies can thrive.
          </p>
          <p className="hero-text font-semibold">
            Goalie is a position of grit, but you can’t dominate the game without loving the process!
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <img src={heroImage} alt="Jackson Playing Lacrosse" className="hero-image" />
      </section>

      {/* Centered Call to Action Button */}
      <div className="hero-button-container">
        <a href="/booking" className="hero-button">Book a Session</a>
      </div>

      {/* Testimonials Section */}
<section className="testimonials-section">
  <div className="section-bar"></div>
  <h2 className="section-title">Testimonials</h2>
  <p className="section-subtitle">
    What players and parents are saying:
  </p>
  <div className="testimonials-container">
    <div className="testimonial-card">
      <p className="italic">
        "The best training my son has ever had! His skills improved drastically."
      </p>
      <p className="testimonial-author">- Parent of a Varsity Goalie</p>
    </div>
    <div className="testimonial-card">
      <p className="italic">
        "I feel way more confident in goal now. Thanks for the incredible coaching!"
      </p>
      <p className="testimonial-author">- High School Goalie</p>
    </div>
  </div>
</section>

{/* Reach Out Section */}
<section className="reach-out">
  <div className="section-bar"></div>
  <h2 className="section-title">Reach Out</h2>
  <p className="section-subtitle">
    We’d love to hear from you! Whether you're a player, parent, or coach, let us know how we can help.
  </p>

  <form className="reach-out-form">
    <div className="form-grid">
      {/* First Name */}
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      {/* Last Name */}
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      {/* Role */}
      <div className="form-group">
        <label htmlFor="role">I am a...</label>
        <select id="role" name="role">
          <option value="player">Player</option>
          <option value="parent">Parent</option>
          <option value="coach">Coach</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Gender */}
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* High School Grad Year (Full Width) */}
      <div className="form-group full-width">
        <label htmlFor="gradYear">High School Grad Year</label>
        <input type="number" id="gradYear" name="gradYear" min="2000" max="2035" />
      </div>

      {/* School */}
      <div className="form-group">
        <label htmlFor="school">School</label>
        <input type="text" id="school" name="school" />
      </div>

      {/* Club Team */}
      <div className="form-group">
        <label htmlFor="club">Club Team (if applicable)</label>
        <input type="text" id="club" name="club" />
      </div>

      {/* Why Are You Reaching Out? (Full Width) */}
      <div className="form-group full-width">
        <label htmlFor="message">Why are you reaching out?</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div>
    </div>

    <button type="submit" className="submit-button">Submit</button>
  </form>
</section>



      {/* Footer */}
      <footer className="py-6 bg-primary text-white text-center">
        <p>
          Contact us at{" "}
          <a href="mailto:legacylacrossetraining@gmail.com" className="underline">
            legacylacrossetraining@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
