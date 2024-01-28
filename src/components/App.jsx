import React, {useState} from "react";
import {cypher_encrypt, cypher_decrypt} from "./Funcs";
import Header from "./Header";
import CheckBox from "./check";
import "./main.css";
import Footer from "./Footer";

function App(){

    const [userKey, setUserKey] = useState()
    const [userInput, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode , setMode] = useState("Encrypt")


    function handleClick(){
         

        if (userKey <= 28){
            document.getElementById("max").style.color = "#004225";
            if (mode === "Encrypt"){
                setOutput(cypher_encrypt(userInput, userKey))
            
            }else if (mode === "Decrypt"){
                setOutput(cypher_decrypt(userInput, userKey))
            }
        }else{
            document.getElementById("max").style.color = "red"
        }
        
    };

    function handleChange(event){
        const {value} = event.target;
    
        setInput(value);
    }

    function updateKey(event){

        setUserKey(parseInt(event.target.value));
        
    }

    function updateMode(event){
        const isChecked = event.target.checked;

        if (!isChecked){
            setMode("Encrypt")
        }else{
            setMode("Decrypt")
        }
    }

    return(
        <div className="app">
            <Header />
        <div className="main">
            <div>
                <h3 className="explanation-h3">Key corresponds to the number of shifts used for the {mode}ion</h3>
                <CheckBox updateModeFunc = {updateMode}/>
            </div>
            <div className="cypher-area">
                <textarea  onChange={handleChange} name="message" placeholder={`Message to ${mode} ...`}  value={userInput}></textarea>
                
                <div className="key-area">
                    
                    <button onClick={handleClick}>{mode}</button>
                    <input onChange={updateKey}  type="number" max="29" min="0" placeholder="Key.." value={userKey}/>
                    <p id="max">Max: 28(!)</p>
                </div>
                <textarea name="result" placeholder={mode+"ed data will appear here.."} value={output}></textarea>
            </div>
        </div>
        <Footer />
    </div>
    )


}


export default App;