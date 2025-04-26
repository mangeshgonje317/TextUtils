import React, {useState} from 'react'



export default function TextForm(props) {

  
  const handleUpClick= ()=>{
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to UpperCase", "success");
  }

 const handleLoClick =()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Text Converted to LowerCase", "success");
 }
 const handleClearClick =()=>{
  let newText= '';
  setText(newText);
  props.showAlert("Text Has Been Cleared", "success");
 }

 const handleCopyClick= ()=>{
  let copyText = text;
  navigator.clipboard.writeText(copyText);
  props.showAlert("Copied to ClickBoard", "success");
  // var text= document.getElementById("myBox");
  // text.select();
  // navigator.clipboard.writeText(TextTrack.value);
 }
 const handlePasteClick= async()=>{
  const copy = await navigator.clipboard.readText();
  let newText = text + copy;
  setText(newText);
  props.showAlert("Text Has Been Paste", "success");
 }

  const handleOnchange= (event)=>{
    setText(event.target.value);
  }

  const [text,setText] = useState('');
  // setText("new text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode=== 'light'?'white':'black',color:props.mode=== 'light'?'black':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlePasteClick}>paste</button>

      </div>
        <div className="container my-3">
          <h2>Your summary</h2>
          <p>{text.split (/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} charactors</p>
          <p>time taken to read the paragraph is  {(0.008 * text.split (" ").filter((element)=>{return element.length!==0}).length)/60 } Minutes to read</p>
          <h2>preview</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
