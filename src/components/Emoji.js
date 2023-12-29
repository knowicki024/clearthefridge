import React, { useState } from "react";

const Tooltip = ({ text }) => {
  return <div className="tooltip">{text}</div>;
};

function Emoji({ emoji, returnFunction, groceryName }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleClick(event) {
    returnFunction(event.target);
  }

  return (
    <div className="emoji-container">
      <button
        id={emoji.id}
        className={`emoji-grid-button ${isHovered ? "hovered" : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {emoji.image}
      </button>
      {isHovered && <Tooltip text={groceryName} />}
    </div>
  );
}

export default Emoji;