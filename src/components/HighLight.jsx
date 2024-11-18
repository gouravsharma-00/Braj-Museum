import React, { useState } from "react";
import "../styles/HighLight.css";

const HighLight = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const highlights = [
    {
      id: 1,
      title: "Highlight 1",
      image: "/assets/HighLight/highlight1.png",
      info: "Set thy heart upon thy work, but never on its reward. You have the right to work, but never to the fruit of the work.",
    },
    {
      id: 2,
      title: "Highlight 2",
      image: "/assets/HighLight/highlight2.png",
      info: "Happiness is a state of mind that has nothing to do with the external world.",
    },
  ];

  const nextHighlight = () => {
    setCurrentHighlight((prev) => (prev + 1) % highlights.length);
  };

  const prevHighlight = () => {
    setCurrentHighlight((prev) =>
      prev === 0 ? highlights.length - 1 : prev - 1
    );
  };

  const current = highlights[currentHighlight];
  const next = highlights[(currentHighlight + 1) % highlights.length];

  return (
    <div className="hightlight-main flex">
        <div className="highlights-container">
        <h1>Highlights</h1>
        <div className="highlight-content">
            <div className="main-highlight">
            <img src={current.image} alt={current.title} className="highlight-image" />
            <p className="highlight-info">{current.info}</p>
            </div>
            <div className="preview-highlight" onClick={nextHighlight}>
            <h3>Next Highlight</h3>
            <img src={next.image} alt={next.title} className="preview-image" />
            </div>
        </div>
        <div className="highlight-controls">
            <button onClick={prevHighlight}>Previous</button>
            <button onClick={nextHighlight}>Next</button>
        </div>
        </div>
    </div>
  );
};

export default HighLight;
