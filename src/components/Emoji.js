import React, { useState } from "react";

const ToolTip = ({ text }) => <div className="tooltip">{text}</div>  

function Emoji({ emoji, returnFunction, groceries }) {

  const [toolTip, setToolTip] = useState('');
  
  const [isHovered, setIsHovered] = useState(null);

  function handleMouseEnter(groceries) {
    setToolTip(groceries.tooltipText)
    setIsHovered(groceries.id);
  }

  function handleMouseLeave() {
    setToolTip('')
    setIsHovered(null);
  }

  function handleClick(event) {
    returnFunction(event.target);
  }

//   return (
//     <button
//       id={emoji.id}
//       className={`emoji-grid-button ${isHovered ? "hovered" : ""}`}
//       onClick={handleClick}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {emoji.image}
//     </button>
//   );

return (
  <div>
      {groceries.map(groceries => (
          <div 
              key={groceries.id}
              onMouseEnter={() => handleMouseEnter(groceries)}
              onMouseLeave={handleMouseLeave}
          >
              {groceries.name}
              {isHovered === groceries.id && <ToolTip text={toolTip} />}
          </div>
      ))}
  </div>
);
}

export default Emoji;