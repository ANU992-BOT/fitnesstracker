// src/components/Header.js
import React from 'react';

const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="profile">
       
        <h1>Good Morning, {user.name}!</h1>
      </div>
    </div>
  );
};

export default Header;