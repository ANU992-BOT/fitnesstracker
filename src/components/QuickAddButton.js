// src/components/QuickAddButton.js
import React from 'react';

const QuickAddButton = ({ onAddWorkout }) => {
  return (
    <div className="quick-add-button">
      <button onClick={onAddWorkout}>+ Add Workout</button>
    </div>
  );
};

export default QuickAddButton;