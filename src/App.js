import './App.css';
import Navbar from './components/navbar';
import React, {useState} from 'react'
import About from './components/About';
import Textchanged from './components/Textchange';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
const[mode,setMode]=useState('light');
// const[modetype,setModeType]=useState('Disabled');
const[alert,setAlert]=useState(null);
const showAlert=(message, type)=>{
setAlert({
   msg : message,
  type: type 
});
}
  const togglemode = () =>{
    if(mode==='light'){
      setMode("dark");
    //  setModeType('Enabled');
      document.body.style.backgroundColor="grey";
      showAlert('Dark Mode Is Enabled','success');

  }else{
    setMode('light');
    document.body.style.backgroundColor="white";
    //setModeType('Disabled');
    showAlert('Dark Mode Is Disabled','success');
  }
  }
  return (

    <Router>
        <Navbar navmode={mode} heading="Please Add Text here" togglemode={togglemode}/>
        <Alert alert={alert}/>
    <Routes>
    <Route path="/about" element={<About/>} />
    <Route path="/" element={<Textchanged navmode={mode}/>} />
  </Routes>
  
  </Router>
  );
}

export default App;

