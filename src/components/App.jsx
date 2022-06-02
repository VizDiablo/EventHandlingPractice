import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouserOver() {
    setMousedOver(true);
  }

  function handleMouseLeave() {
    setMousedOver(false);
  }

  function handleInputChanged(event) {
    console.log("Text changed");
    console.log(event.target.value);
    setHeadingText(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleInputChanged}
        type="text"
        placeholder="What's your name?"
        value={headingText}
      />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouserOver}
        //onMouseLeave={handleMouseLeave}
        onMouseOut={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
