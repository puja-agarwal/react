import React, { useEffect, useState } from "react";

const UseEffect =() =>{
    const [num, setNum]= useState(0);
    const [nums, setNums]= useState(0);

    useEffect(()=>{
        alert('I am clicked');
    },[nums]); // 

    // if we don't pass any parameter then it will run every render
    // if we pass empty array then it just runs for the 1st render
    // if we pass the value and the parameter as well then it will run on 1st render
    //  and whenever the value of that prop changes then it will be called

    return(
        <>
        <button className="buttonStyle"onClick={()=>{
            setNum(num+1); // instead of calling function here I declared here itself.
        }}>Click me for Effect1  {num}</button>
        <button className="buttonStyle" onClick={()=>{
            setNums(nums+1); // instead of calling function here I declared here itself.
        }}>click me for Effect2  {nums}</button>
        </>
    )
}

export default UseEffect;

//by mentioning use effect you tell react that we need to do something after render
//we can control when we can call the useEffect 
// on page render it will take effect when we refresh the page for first time 
// we have a render method in the index.js file which is executed every time we run the code 
// or we make change in the dom
// whenever the value of the app component changes 
// mean whenever we do anything that is there on the app component then the render will be called 
//  and whenever the render method is called the useeffect will be called automatically