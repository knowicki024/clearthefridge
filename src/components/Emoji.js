import React from "react";
import { Card } from "semantic-ui-react";

function handleClick(event){

}

function Emoji({ emoji }) {
  return (
    <div className="ui centered card" onClick={handleClick}>
        <div className="content">
    <div className="header">{emoji}</div>
  </div>
</div>
  );
}

export default Emoji;