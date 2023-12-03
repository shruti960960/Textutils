import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("uppercase clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.myshowAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.myshowAlert("Converted to lowercase","success");
  
  };

  const handleClearClick = () => {
    setText("");
    props.myshowAlert("Text cleared","success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.myshowAlert("Text Copied to clipboard","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.myshowAlert("Extra spaces removed","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const [text, setText] = useState("");
  //setText("shruti");

  return (
    <>
    <div className="container" >
      <h1>{props.heading}</h1>
      {/* <h1>Enter the text to analyze</h1> */}
      <div
        className="mb-3"
        >
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="5" ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container my-3" >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here.."}</p>
      </div>
    </div>
    </> 
  );
}
