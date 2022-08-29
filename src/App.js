import './App.css';
import Navbar from './components/navbar';
import React, {useState} from 'react'
import Textchanged from './components/Textchange';
import Alert from './components/Alert';
import LoadingBar from 'react-top-loading-bar'

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
const[mode,setMode]=useState('light');
const [progress, setProgress] = useState(100)
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
    <>
    {/* <Router> */}
        <Navbar navmode={mode} logoheading="Logo without props" heading="Please Add Text here" togglemode={togglemode}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
         <Alert alert={alert}/>
         <Textchanged navmode={mode}/>
         {/* <Routes>
         <Route exact path="/" element={<Textchanged navmode={mode}/>} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/test1" element={<Test1 />} />
         <Route exact path="/test2" element={<Test2 />} />
        </Routes> */}

  {/* </Router> */}
  </>
  );
}

export default App;

