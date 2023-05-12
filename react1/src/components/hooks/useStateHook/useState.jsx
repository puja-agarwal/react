import React, { useState } from "react";
import './useState.scss';

// setCount is function to put the updated value there
// we can change the state 
//initial state and current value

const UseState = () => {

    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 5);
    };

    const DecNum = () =>{
        if(count == 0){
            alert("Sorry, you cannot go less by 0");
            return;
        }
        setCount(count - 5);
    }

    return (
        <>
            <h1 className="textHead">Welcome to play Increeement/Decreement by 5</h1>
            <h1>{count}</h1>
            <button className="incButton" onClick={IncNum}>Click Me to Increement</button>
            <button className="decButton" onClick={DecNum}>Click Me to Decreement</button>
        </>
    );
}

export default UseState;