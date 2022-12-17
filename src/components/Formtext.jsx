import React, { useState } from "react";

const Formtext = (props) => {
  const [state, setState] = useState("");

  const inputData = (event) => {
    // console.log("event change are called .");
    setState(event.target.value);
  };

  //   toUppercase text method
  const handleUppercase = () => {
    //     console.log("Upercase click here  " + state);
    let newText = state.toUpperCase();
    setState(newText);
    props.showalert("Converted to UpperCase ", "success");
  };

  //   tolowercase text method
  const handleLowercase = () => {
    // console.log("lowerCase click here  " + state);
    let newText = state.toLowerCase();
    setState(newText);
    props.showalert("Converted to LowerCase ", "success");
  };
  //   copy text method
  const handleCopy = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    // console.log("copt Text");
    props.showalert("Copied to clipboard ", "success");
  };

  //    to remove extra spaces method
  const handleExtraSpace = () => {
    let newText = state.split(/[ ]+/);
    setState(newText.join(" "));
    props.showalert("Extra Space Remove ", "success");
  };

  //   to clear text method
  const handleClear = () => {
    setState("");
    props.showalert("All Text Clear ", "success");
  };

  return (
    <>
      <div className="container style={{color:props.mode === 'dark' ? 'white':'black'}}">
        <h2
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          Try Textutils Word Counter, Character Counter, Remove Extra Spaces
        </h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={state}
            onChange={inputData}
            rows="8"
            id="mybox"
            placeholder="Enter text here..."
            style={{backgroundColor:props.mode === 'dark' ? '#3a3e34':'white', color:props.mode === 'dark' ? 'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-success mx-2 my-2" onClick={handleUppercase} disabled={state.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info mx-2 my-2" onClick={handleLowercase} disabled={state.length === 0}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace} disabled={state.length === 0}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleCopy} disabled={state.length === 0}>
          Copy Text
        </button>

        <button className="btn btn-danger mx-2 my-2" onClick={handleClear} disabled={state.length === 0}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          <span className="bold">{state.split(/\s+/).filter((ele)=>{return ele.length!== 0}).length}</span> Words ,
          <span className="bold">{state.length}</span> Characters
        </p>
        <p>
          <span className="bold">{0.008 * state.split(" ").filter((ele)=>{return ele.length!== 0}).length} </span>
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {state.length > 0
            ? state
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
};

export default Formtext;
