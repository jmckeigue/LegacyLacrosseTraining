import heroImage from "../assets/hero_img.png";

export default function Home() {
  return (
    <div className="page-container">
      {/* Header & Navigation */}
      <header className="header">
        <h1 className="text-2xl font-bold">Legacy Lacrosse Training</h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/pricing">Pricing</a>
          <a href="/booking">Book a Session</a>
          <a href="/contact">Contact</a>
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
      <section className="testimonial-section">
        <h2 className="text-3xl font-bold text-primary">Testimonials</h2>
        <p className="mt-2 text-lg text-gray-700">
          What players and parents are saying:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="testimonial-box">
            <p className="testimonial-text">
              "The best training my son has ever had! His skills improved
              drastically."
            </p>
            <p className="testimonial-author">- Parent of a Varsity Goalie</p>
          </div>
          <div className="testimonial-box">
            <p className="testimonial-text">
              "I feel way more confident in goal now. Thanks for the incredible
              coaching!"
            </p>
            <p className="testimonial-author">- High School Goalie</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-primary text-white text-center">
        <p>
          Contact us at{" "}
          <a href="mailto:your-email@example.com" className="underline">
            your-email@example.com
          </a>
        </p>
      </footer>
    </div>
  );
}
