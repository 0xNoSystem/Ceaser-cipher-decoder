import React from "react";
import "./main.css";
import myImage from "./295205.svg"

function Header(){

    return(

        <div className="header">
            <h1>Ceaser</h1>
            <h2>Encrypt & Decrypt with Ceaser Cipher</h2>
            <img id="logo" src={myImage} alt="ceaser crown" />
        </div>
        
        )}


export default Header;