import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from './Signup/Signup';
import About from "./About/About";
import Features from "./Featuresof/Features";

import Loginpage from "./Login/Loginpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;