import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-brand">Braj Museum</h1>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><Link to="/braj">Braj Darshan</Link></li>
          <li><a href="#home">Home</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h2 className="hero-heading">Discover the Braj's Hidden Wonders</h2>
          <p className="hero-subheading">
            Explore history, art, and culture like never before. Let the past guide you to the present.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
