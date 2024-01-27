import React, {useState} from "react";
import {cypher_encrypt, cypher_decrypt} from "./Funcs";
import Header from "./Header";
import "./main.css";

function App(){

    const [userKey, setUserKey] = useState()
    const [userInput, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode , setMode] = useState("Decrypt")


    function handleClick(){
         

        if (userKey <= 29){
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

    return(
        <div className="app">
            <Header />
        <div className="main">
            <h3 className="explanation-h3">Key corresponds to the number of shifts used for the Encryption</h3>
            <div className="cypher-area">
                <textarea  onChange={handleChange} name="message" placeholder={`Message to ${mode} ...`}  value={userInput}></textarea>
                <div className="key-area">
                    <input type="checkbox"></input>
                    <button onClick={handleClick}>Encrypt</button>
                    <input onChange={updateKey}  type="number" max="29" min="0" placeholder="Key.." value={userKey}/>
                    <p id="max">Max: 29(!)</p>
                </div>
                <textarea name="result" placeholder={mode+"ed data will appear here.."} value={output}></textarea>
            </div>
        </div>
        <footer>Copyright © 0xNoSystem 2003</footer>
    </div>
    )


}


export default App;