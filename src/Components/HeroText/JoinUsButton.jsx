import React from "react";
import "./JoinUsButton.css"; // CSS-first Tailwind styling

const JoinUsButton = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <button className="btn-primary group">
        <span className="arrow">➔</span>
        Join Us
      </button>
    </div>
  );
};

export default JoinUsButton;
