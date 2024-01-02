import React from "react";
import { Card } from "semantic-ui-react";

function handleClick(event){

}

function Emoji({ emoji }) {
  return (
    <div class="ui centered card" onClick={handleClick}>
        <div class="content">
    <a class="header">{emoji}</a>
  </div>
</div>
  );
}

export default Emoji;