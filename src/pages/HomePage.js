import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Fitness Tracker</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Fitness Journey</h1>
          <p>Stay fit, stay healthy, and achieve your goals with our advanced fitness tracker.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Activity Tracking</h3>
            <p>Track your daily activities like steps, distance, and calories burned.</p>
          </div>
          <div className="card">
            <h3>Heart Rate Monitoring</h3>
            <p>Monitor your heart rate in real-time to optimize your workouts.</p>
          </div>
          <div className="card">
            <h3>Sleep Analysis</h3>
            <p>Get insights into your sleep patterns and improve your sleep quality.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This fitness tracker has completely changed my life! I'm more active and healthier than ever."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"The sleep analysis feature helped me understand my sleep patterns and improve my rest."</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love the heart rate monitoring feature. It's so accurate and easy to use!"</p>
            <h4>- Mike Johnson</h4>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Life?</h2>
        <p>Join thousands of users who have already started their fitness journey with us.</p>
        <Link className="cta-button" to="/signup">Signup</Link>
        
      </section>

      <footer className="footer">
        <p>&copy; 2023 Fitness Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;