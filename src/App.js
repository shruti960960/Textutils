//import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  
  const  [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#0c0c37';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - DarkMode";
      
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // },2000);

      // setInterval(()=>{
      //   document.title = "Install TextUtils";
      // },1500);
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - LightMode ";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // },2000);

      // setInterval(()=>{
      //   document.title = "Install TextUtils";
      // },1500);
      
    }
  }
  return (  
  <>
  {/* <Router> */}
  <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes>
          <Route exact path="/about" Component={About}>
            {/* <About></About> */}
          {/* </Route> */} 
          
          {/* <Route exact path="/" element={< TextForm myshowAlert={showAlert}heading="Enter the text to analyze" />}> */}
            < TextForm myshowAlert={showAlert}heading="Enter the text to analyze" />
          {/* </Route> */}
          
        
        {/* </Routes> */}
    
       
  </div>
  {/* </Router> */}
  </> 
  
  );
  
}

export default App;

