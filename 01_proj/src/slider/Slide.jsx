import React from "react";
import "./SlideBox.css";

const Slide = ({ length, setLength }) => {
  const handleSliderChange = (e) => {
    setLength(parseInt(e.target.value, 10)); // Update length
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max="20"
        value={length}
        onChange={handleSliderChange}
        className="slider"
      />
      <label className="slider-label">
        Length (<span>{length}</span>)
      </label>
    </div>
  );
};

export default Slide;
