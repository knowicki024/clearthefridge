import React from "react";

function Emoji({ image, returnFunction }) {

function handleClick(event){
//console.log(event.target.textContent)
returnFunction(event.target.textContent)
}

  return (
    <button 
    className="emoji-grid-button"
    onClick={handleClick}
    >{image}</ button>
  );
}

export default Emoji;