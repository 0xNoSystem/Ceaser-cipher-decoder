import React from "react";
import "./main.css"

function CheckBox(props){

    //const [mode , setMode] = useState("Decrypt")

    return (
        <div className="button r" id="button-1">
          <input onClick={props.updateModeFunc} type="checkbox" className="checkbox" id="checkMode" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
    )
}

export default CheckBox;