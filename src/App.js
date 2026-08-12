import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route
//} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000);

  }

  const enableGreenMode = () =>{
    if(mode !== 'success'){
    setMode('success');
    document.body.style.backgroundColor = 'green';
    showAlert("Green mode has been enabled", "success");
  }
  else{
    setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled", "success");
  }
}

 const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
     /*} setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);*/
    }
    else{
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
       document.title = 'TextUtils - Light Mode';
    }

  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} enableGreenMode={enableGreenMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
        {/*<Route
          path="/"      
          element={
            />
          }
        /> */}
        <About mode={mode}/>
        <TextForm showAlert={showAlert} heading="Enter any text below" mode={mode}/>
        {/*<Route
          path="/about"
          element={<About />}
        />*/}
        {/*</Routes>*/}
      </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
