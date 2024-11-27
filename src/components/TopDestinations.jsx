import React, { useState } from "react";
import Panorama from "../Pages/Panaroma";
import "../styles/TopDestinations.css";

const TopDestinations = () => {

  const [selectedTemple, setSelectedTemple] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const destinations = [
    { name: "Imli tala", image: "/assets/destination/Imlitala.jpg", label: "Imlitala Vrindavan" },
    { name: "Krishna Balaram", image: "/assets/destination/krihsnabalram.jpg", label: "Krishna Balaram Temple" },
    { name: "Old Shri Radhavallabh Temple", image: "/assets/destination/Old_Shri_Radhavallabh_Temple.jpg", label: "Old Shri Radhavallabh Temple" },
    { name: "Shri Radharaman", image: "/assets/destination/radharaman.jpg", label: "Shri Radharaman" },
  ];


  const visibleDestinations = destinations.slice(
    0,4 );

  const handleClick = (label) => {
    setSelectedTemple(label);
    setIsDialogOpen(true); 
  }
  return (
    <div className="top-destinations-container">
      <h1>Top Destinations</h1>
      <div className="slider">
        <div className="slider-wrapper">
          {visibleDestinations.map((destination, index) => (
            <a
            onClick={() => handleClick(destination.label, )} 
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
      {isDialogOpen && (
                <Panorama
                    open={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    temple={selectedTemple}
                />
            )}
    </div>
  );
};

export default TopDestinations;
