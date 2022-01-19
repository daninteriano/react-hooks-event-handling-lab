// Code Keypad Component Here
import React from "react";

function Keypad(){
    function inputChange(event){
        event.preventDefault();
        console.log(`Entering password...`)
    }
    return (
        <input type="password" onChange={inputChange}></input>
    )
}

export default Keypad;