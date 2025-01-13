import React from "react";
import { memo } from "react";

const ToggleButton = memo(({ name, flag, setFlag }) => {
    const toggleValue = () => {
        if (flag !== !flag) {
          setFlag(!flag); // Update state only when necessary
        }
      };      

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px", // Slightly smaller gap between the button and text
      }}
    >
      <button
        onClick={toggleValue}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px", // Reduced width
          height: "20px", // Reduced height
          fontSize: "12px", // Smaller font size
          fontWeight: "bold",
          color: flag ? "white" : "black",
          backgroundColor: flag ? "green" : "Lightgray",
          border: "none",
          borderRadius: "3px", // Adjusted border radius for smaller size
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        {flag ? "✓" : ""}
      </button>
      <p
        style={{
          margin: 0,
          fontSize: "14px", // Adjusted font size for text
          color: "white",
        }}
      >
        {name}
      </p>
    </div>
  );
});

export default ToggleButton;
