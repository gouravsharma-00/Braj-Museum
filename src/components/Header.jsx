import React from "react";
import NavBar from "./navBar";
import "../styles/MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h2 className="hero-heading">Discover the Braj's Hidden Wonders</h2>
          <p className="hero-subheading">
            Explore history, art, and culture like never before, Let the past guide you to the present.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
