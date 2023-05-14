import React ,{ useState}from 'react'


export default function Textform(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    settext(newText)  
    props.showAlert("Converted to uppercase!","succes")
  }
  const handleloClick=()=>{
    let newText=text.toLowerCase();
    settext(newText) 
    props.showAlert("Converted to lowercase!","succes") 
  }
  const handleOnChange=(event)=>{
    settext(event.target.value)

  }
  const [text,settext]=useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black' }}>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control mb-2" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black' }} id="myBox" rows="5" ></textarea>
        <button className='btn btn-primary mx-2 ' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2 ' onClick={handleloClick}>Convert to lowercase</button>
      </div>
    </div>
    <div className='container m-2' style={{color: props.mode==='dark'?'white':'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>

    </>

  )
}
