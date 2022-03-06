/* eslint-disable no-unused-vars */


import './App.css';
import { useState } from 'react';





function App() {

  let style ={
  position: "absolute"
  }



  
const [counter,setCounter]=useState(0)

  return (
    <>

  <h1>Count:{counter}</h1>
    <button onClick={()=>{
      
setCounter(counter+1)

      console.log("c++")
    }}> add</button>

<button onClick={()=>{
      
      setCounter(counter-1)
      
            console.log("c++")
          }}> substract</button>

<button onClick={()=>{
      
      setCounter(Math.floor(counter/2))
      
            console.log("c++")
          }}> divide</button>
          <button onClick={()=>{
      
      setCounter(Math.floor(counter*2))
      
            console.log("c++")
          }}> multiply</button>

    </>
  

   
  );
}

export default App;
