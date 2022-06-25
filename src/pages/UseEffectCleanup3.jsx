import '../App.css'
import React, { useEffect, useState } from 'react'

const UseEffectCleanup3 = () => {

const [widthCount, setWidthCount] = useState(window.screen.width);

const actualWidth = ()=>{
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
}

useEffect(()=>{
    console.log("add event");
    window.addEventListener("resize", actualWidth);
    
    return ()=>{
        console.log( "remove event");
        window.removeEventListener("resize", actualWidth);

    }


});


  return (
    <div className='app'>
    <p>The actual size of the window is :</p>
    <h1>{widthCount} </h1>
    
    
    </div>
  )
}

export default UseEffectCleanup3