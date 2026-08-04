import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowClick = () => {
        console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const clearText = () => {
        setText(" ");
        props.showAlert("Text cleared!", "success");
    }
    const reverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed!", "success");
    }
    const generateText = () => {
        let newText = "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet, Learning React becomes easier when you practice building small projects every day. Consistency is the key to improving your coding skills, Technology is changing the world at a rapid pace. Artificial intelligence, cloud computing, and cybersecurity are shaping the future of software development, Reading books helps improve vocabulary, critical thinking, and creativity. Even spending a few minutes each day can make a significant difference";
        setText(newText);
        props.showAlert("Generated sample text!", "success");
    }
    const [text, setText] = useState(" ");
    const buttonStyle = {
  backgroundColor: props.mode === 'success' ? 'green' : '#0d6efd',
  color: props.mode === 'light' ? 'white' : 'white',
  border: 'none'
};

    return (
        <>
    <div className="container" style={{backgroundColor: props.mode ==='dark'? 'grey': props.mode === 'success'? 'green' : 'white', color: props.mode ==='light'? 'black': 'white'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? 'grey': props.mode === 'success'? 'green' : 'white', color: props.mode ==='light'? 'black': 'white'}} id="myBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} style={buttonStyle}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick} style={buttonStyle}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={clearText} style={buttonStyle}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={reverseText} style={buttonStyle}>Reverse Text</button>
    <button className="btn btn-primary mx-1" onClick={generateText} style={buttonStyle}>Generate Text</button>
</div>
<div className="container my-3" style={{backgroundColor: props.mode ==='dark'? 'grey': props.mode === 'success'? 'green' : 'white', color: props.mode ==='light'? 'black': 'white'}}>
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").filter(word=>word.trim()!=="").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length} minutes to read </p>
    <h3>Preview</h3>
    <p>{text}</p>

</div>
</>
  )
}
