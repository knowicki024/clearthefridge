import React from "react";


function Emoji({ emoji, returnFunction }) {

  function handleClick(event) {
    returnFunction(event.target)
  }

  return (
    <button id={emoji.id} className="emoji-grid-button" onClick={handleClick}>
      {emoji.image}
    </button>
  );
}
export default Emoji;