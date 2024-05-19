import React from 'react'
import { useState } from 'react';


const Content = () => {
   
   const [fruit ,setName]=useState("Apple");
    function handleNameChange(){

        const fruit=["apple","mango","orange"];
        const int=Math.floor(Math.random()*3);
        setName(fruit[int]);
      }

      // const [count, setCount]=useState(99);

      // function incrementFunction(){
      //   setCount(prevCount=>prevCount+1);
      // }

      // function decrementFunction(){
      //   setCount(prevCount=>prevCount-1);
      // }

  return (
    <main>
     <p>I Like {fruit} </p>
     
     <button onClick={handleNameChange}>Subscripe  Button</button>
     
     
    </main>
    
  )
}

export default Content
