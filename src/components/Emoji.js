import React from "react";
import { Card } from "semantic-ui-react";

function handleClick(event){
console.log(event.target.textContent)
}

function Emoji({ image }) {
  console.log(image);
  return (
    <button 
    className="emoji-grid-button"
    onClick={handleClick}
    >{image}</ button>
  );
}

export default Emoji;