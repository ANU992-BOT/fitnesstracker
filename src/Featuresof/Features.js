import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h1>Key Features</h1>
      <div className="features-list">
        <div className="feature-card">
          <h2>Workout Tracking</h2>
          <p>Log your workouts, track exercises, and monitor progress effortlessly.</p>
        </div>
        <div className="feature-card">
          <h2>Calorie Counter</h2>
          <p>Keep track of your daily calorie intake and maintain a balanced diet.</p>
        </div>
        <div className="feature-card">
          <h2>Goal Setting</h2>
          <p>Set personalized fitness goals and achieve milestones with ease.</p>
        </div>
        <div className="feature-card">
          <h2>Progress Analytics</h2>
          <p>Visualize your fitness journey with detailed graphs and stats.</p>
        </div>
        <div className="feature-card">
          <h2>Wearable Sync</h2>
          <p>Sync with smartwatches and fitness bands for real-time tracking.</p>
        </div>
        <div className="feature-card">
           <h2>Community Challenges</h2>
        <p>Join fitness challenges with friends, compete on leaderboards, and stay motivated together!</p>
         </div>

      </div>
    </div>
  );
};

export default Features;
