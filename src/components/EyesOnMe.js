// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function focusFunction(event){
        console.log("Good!");
    }
    function blurFunction(event){
        console.log("Hey! Eyes on me!");
    }
    return (
        <button onFocus={focusFunction} onBlur={blurFunction}>Eyes on me</button>
    )
}

export default EyesOnMe;