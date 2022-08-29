import React from 'react';
import  { useState } from 'react';


function Textchanged(props){
    function toUppercase(){
        const newText=textValue.toUpperCase();
        setTextValue(newText);
    }
    const toAddtext=(event)=>{
        setTextValue(event.target.value);
    }
    const toLowercaseFun=()=>{
        // let msg = new SpeechSynthesisUtterance();
        //   msg.text = textValue;
        // window.speechSynthesis.speak(msg);
        const textlower = textValue.toLowerCase();
        setTextValue(textlower);
    }
    const toReverseFun = ()=>{
       const str =textValue;
       let newString=" ";
        for (var i = str.length - 1; i >= 0; i--) { 
            newString += str[i]; // or newString = newString + str[i];
        }   
      setTextValue(newString.slice(1));
    }
    const toCopyStringFun =()=>{
       let select= document.getElementById("comment");
      select.select();
       navigator.clipboard.writeText(select.value);
    //    navigator.clipboard.readText().then(text=>{
    //     let val=document.getElementById("comment").value;
    //     let vals =val+','+text;          
    //     setTextValue(vals);
    // });
    }
    const countword =()=>{
        let count=0;
        let tcw=textValue.split(' ');
        
        for(let i=0; i<tcw.length; i++){
            if(tcw[i] !== ''){
                count+=1;
            }
           
        }
        return count;
    }
    const toCapatalizedFun =()=>{
        let cap='';
        
        const myArray = textValue.split(" ");
        for(var i=0;i<myArray.length;i++){
        cap+=myArray[i].charAt(0).toUpperCase()+myArray[i].slice(1).toLowerCase()+' ';
        }

        setTextValue(cap.slice(0,-1));
    }
    const [textValue, setTextValue] = useState("Please enter your text here");
    return(
    <>
<div className="form-group container my-5"  style= { props.navmode === 'light'?{color:'black'}:{color:'white'}}>
  <h1>{props.heading}{ props.navmode}</h1>
  <textarea className="form-control" value={textValue} onChange={toAddtext} rows="10" id="comment"></textarea>
  <button type="button" className="btn btn-primary my-2" onClick={toUppercase}>To UpperCase</button>
  <button type="button" className="btn btn-secondary mx-2 my-2" onClick={toLowercaseFun}>To LowerCase</button>
  <button type="button" className="btn btn-success mx-2 my-2" onClick={toReverseFun}>To Reverse</button>
  <button type="button" className="btn btn-primary mx-2 my-2" onClick={toCopyStringFun}>To copy clipboard</button>
  <button type="button" className="btn btn-success mx-2 my-2" onClick={toCapatalizedFun}>To Capitalized</button>

</div>

<div className=' container' style= { props.navmode === 'light' ?{color:'black'}:{color:'white'}} >
    <h2>Summary Of textarea</h2>
    { countword()} Words and {textValue.length} characters
    <h2 id='hhh'>Preview:</h2>
    <p> {textValue}</p>
    </div>
    
</>

);

}
export default Textchanged;
// text.length>0 ? text.trim().split(" ").length : 0