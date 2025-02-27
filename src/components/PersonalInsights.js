// src/components/PersonalInsights.js
import React from 'react';

const PersonalInsights = ({ insights }) => {
  return (
    <div className="personal-insights">
      <h3>Personal Insights</h3>
      <p>{insights}</p>
    </div>
  );
};

export default PersonalInsights;