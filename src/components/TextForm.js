import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  
  const handleUPClick = ()=>{
    // console.log("UpperCase Clicked "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase","Converted to Uppercase","success");
  }
  const handleLWClick = ()=>{
    setText(text.toLocaleLowerCase());
    props.showAlert("Success","Converted to Lowercase","warning");
  }
  const handleRemoveSpaceClick = ()=>{
    let newText = text;
    newText = removeExtraSpace(newText)
    setText(newText)
  }
  

  const removeExtraSpace = (text)=>{
    let newText = text.split(/[ ]+/);
    return newText.join(" ");
  }

  const handleTextClear = ()=>{
    setText('');
  }

  const handleMyTextOnChange = (event)=>{
    // console.log("my text onchange")
    setText(event.target.value);
  }
  
  const [text, setText] = useState(""); //useState is a hook, it is use to handle state of the variable

  // setText("Enter Text Here");
  return (
    <>
    <div className={`text-${props.colorMode==null?(props.mode==='light'?'dark':'light'):props.colorMode.textClass}`}>
      <h3>{props.header}</h3>
      <div className="">
        <div className="mb-3">
          <textarea value={text} className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} onChange={handleMyTextOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLWClick}>Convert to Lowercase</button>
        <button className="btn btn-secondary mx-2" onClick={handleRemoveSpaceClick}>Remove Extra Space</button>
        <button className="btn btn-warning mx-2" onClick={handleTextClear}>Clear</button>
        
      </div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p>{(text.length>0)?removeExtraSpace(text).trim().split(" ").length:0} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h4>Text Preview</h4>
        <textarea onChange={()=>{}} value={text.length >0?text:'Enter something to preview here'} className={`form-control bg-${props.mode} text-${props.mode==='light'?'mute':'light'}`} id="textPreview" rows="8"></textarea>
        
          
      </div>
      </div>
    </>
  );
}
TextForm.prototype = {
  header: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  header: "Please add Header",
};
