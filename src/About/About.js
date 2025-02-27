import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Fitness Tracker</h1>
      <p>
        Welcome to the ultimate fitness tracking experience! Our app helps you
        monitor your workouts, set goals, and stay motivated on your fitness
        journey.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Track your daily workouts and calories burned</li>
        <li>Set and achieve personalized fitness goals</li>
        <li>Monitor progress with detailed analytics</li>
        <li>Sync with wearable devices</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        We are dedicated to helping individuals achieve a healthier lifestyle
        through technology. Start your journey with us today!
      </p>
    </div>
  );
};

export default About;
