// src/components/Challenges.js
import React from 'react';

const Challenges = ({ challenges }) => {
  return (
    <div className="challenges">
      <h3>Challenges</h3>
      {challenges.length === 0 ? (
        <p>No current challenges.</p>
      ) : (
        challenges.map((challenge, index) => (
          <div key={index} className="challenge-item">
            <p>{challenge.name}</p>
            <p>Status: {challenge.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Challenges;