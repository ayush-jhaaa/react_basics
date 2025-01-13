import React, { useState } from "react";
import "./SlideBox.css";

const Slide = () => {
    const [value, setValue] = useState(12); // Initial value

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="-9"
        max="200"
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <label className="slider-label">
        Length={value}
      </label>
    </div>
  );
};

export default Slide;
