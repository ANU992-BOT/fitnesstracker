// src/components/ProgressTracker.js
import React from 'react';

const ProgressTracker = ({ progress }) => {
  return (
    <>  
    <div className="progress-tracker">
      <h3>Progress</h3>
      <div className="progress-bar">
        <div>
          className="progress"
          style={{ width:  `${progress}%`}}
        </div>
      </div>
      <p>{progress}% of your goal achieved!</p>
    </div>
    </>
  );
};

export default ProgressTracker;