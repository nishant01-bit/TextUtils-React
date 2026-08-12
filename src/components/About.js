import React, {useState} from 'react'

export default function About(props) {
    //const[myStyle, setMyStyle] = useState({
    //    color: 'white',
    //    backgroundColor: 'black'
   // })
  let myStyle = {
    color: props.mode === 'dark'? 'white': 'black',
    backgroundColor: props.mode === 'dark'? 'black': 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark'? 'white': 'black',
  }
  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>        
        <h2 className="my-1">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, converting text to uppercase or lowercase, or reversing the text, TextUtils has got you covered. It provides a user-friendly interface that allows you to perform various text manipulations with ease. Whether you're a student, professional, or anyone who works with text regularly, TextUtils is a valuable tool that can save you time and effort. With its intuitive design and powerful features, you can enhance your productivity and streamline your text analysis tasks. Try TextUtils today and experience the convenience of efficient text processing at your fingertips.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Convert Your Text</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. It can be used to analyze text quickly and efficiently. Whether you want to count the number of words in an essay, check the length of a social media post, or analyze the content of a document, TextUtils is here to help. It offers a simple and user-friendly interface where you can input your text and instantly see the character and word count. With its fast processing speed and accurate results, TextUtils is a reliable tool for anyone who needs to analyze text on a regular basis. Try it out today and experience the convenience of effortless text analysis.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. TextUtils is designed to be compatible with all modern web browsers, ensuring that users can access its features regardless of their preferred browser. Whether you're using Chrome, Firefox, Safari, Edge, or any other popular browser, you can rely on TextUtils to provide a seamless and consistent experience. The tool is optimized for performance and functionality across different platforms and devices, allowing users to analyze text efficiently without compatibility issues. With its cross-browser support, TextUtils ensures that you can work with your text data conveniently and effectively.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
