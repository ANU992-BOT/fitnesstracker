// src/components/WorkoutLog.js
import React from 'react';

const WorkoutLog = ({ workouts }) => {
  return (
    <div className="workout-log">
      <h3>Recent Workouts</h3>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        workouts.map((workout, index) => (
          <div key={index} className="workout-item">
            <p>Type: {workout.type}</p>
            <p>Duration: {workout.duration}</p>
            <p>Calories Burned: {workout.calories}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkoutLog;