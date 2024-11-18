import React, { useState } from "react";
import "../styles/TopDestinations.css";

const TopDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    { name: "Imli tala", image: "/assets/destination/Imlitala.jpg", url: "/braj" },
    { name: "Tokyo", image: "https://via.placeholder.com/200?text=Tokyo", url: "https://example.com/tokyo" },
    { name: "New York", image: "https://via.placeholder.com/200?text=New+York", url: "https://example.com/newyork" },
    { name: "Sydney", image: "https://via.placeholder.com/200?text=Sydney", url: "https://example.com/sydney" },
    { name: "Dubai", image: "https://via.placeholder.com/200?text=Dubai", url: "https://example.com/dubai" },
    { name: "Rome", image: "https://via.placeholder.com/200?text=Rome", url: "https://example.com/rome" },
    { name: "London", image: "https://via.placeholder.com/200?text=London", url: "https://example.com/london" },
    { name: "Bangkok", image: "https://via.placeholder.com/200?text=Bangkok", url: "https://example.com/bangkok" },
  ];

  const itemsPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= destinations.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? destinations.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const visibleDestinations = destinations.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="top-destinations-container">
      <h1>Top Destinations</h1>
      <div className="slider">
        <div className="slider-wrapper">
          {visibleDestinations.map((destination, index) => (
            <a
              href={destination.url}
              key={index}
              className="destination"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />
              <p className="destination-name">{destination.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide}>&lt; Previous</button>
        <button onClick={nextSlide}>Next &gt;</button>
      </div>
    </div>
  );
};

export default TopDestinations;
