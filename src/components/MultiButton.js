import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={()=>handleClick(1)}>Button 1</button>
      <button onClick={()=>handleClick(2)}>Button 1</button>
      <button onClick={()=>handleClick(3)}>Button 1</button>
    </div>
  );
}

export default MultiButton;
