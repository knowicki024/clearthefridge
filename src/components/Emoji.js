import React from "react";
import { Card } from "semantic-ui-react";

function handleClick(event){

}

function Emoji({ image }) {
  console.log(image);
  return (
    <button 
    className="emoji-grid-button"
    onClick={() => console.log('click')}>{image}</button>
  );
}

export default Emoji;