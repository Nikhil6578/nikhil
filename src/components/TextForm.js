import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newTxt =text.toUpperCase();
        setText(newTxt);
        props.showAlert("Coverted to Uppercase","success");
    }
    const handleLoClick = ()=>{
      // console.log("UpperCase was Clicked" + text);
      let newTxt =text.toLowerCase();
      setText(newTxt);
      props.showAlert("Coverted to Lowercase","success");
  }

  const handleClearClick = ()=>{
    // console.log("UpperCase was Clicked" + text);
    let newTxt =" ";
    setText(newTxt);
    props.showAlert("Text Cleared","success");
}

const handleCopy = ()=>{
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipboard!","success");
}

const handleExtraSpace = ()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("ExtraSpaces Removed","success");
  
}
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText]= useState('');
    // text="settest" --> wrong way to change the state
    // setText("new text")
  return (
    <>
     <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
     <h1>{props.heading} </h1>
      <div className="mb-3">
    
    
  <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'gray':'white' , color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange}></textarea>
</div>
<b className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </b>
<b className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase </b>
<b className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</b>
<b className="btn btn-primary mx-1" onClick={handleCopy}>Copy</b>
<b className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear Extra Space</b>
 </div>
 <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words ,{text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something int the above to preview it here"}</p>
 </div>
 
    </>
  )
}
