import React, { useState } from "react";
import "./Text.css";

export default function Text(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () => {
    const tem = text.toUpperCase();
    setText(tem);
  };
  const handleLowerclick = () => {
    const tem = text.toLowerCase();
    setText(tem);
  };
  const handleClearclick = () => {
    const tem = "";
    setText(tem);
  };

  const handleCopyclick = () => {
    let txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };

  //   const handleCapclick = () => {
  //     const tem = text.toCapitalize();
  //     setText(tem);
  //   };
  return (
    <>
      <div
        className="mb-3 container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="heading">
          {props.heading} {}
        </h1>
        <textarea
          className="form-control form-input container my-5"
          id="myBox"
          rows="4"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <div className=" button container">
          <button className="btn btn-primary" onClick={handleUpclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLowerclick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleClearclick}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={handleCopyclick}>
            Copy
          </button>
        </div>

        <div className="container summary">
          <h2>Your text summary</h2>
          <p className="para">
            <b> {text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
            character
          </p>
          <p className="para-1">
            {0.008 * text.split(" ").length > 0} Minutes to read
          </p>

          <h3 className="">Preview</h3>
          <hr />
          <p className="preview mb-5 ">
            {text.length > 0
              ? text
              : "Enter something in the input box above to preview it here...."}
          </p>
        </div>
      </div>
    </>
  );
}
