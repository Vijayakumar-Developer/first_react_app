import React from 'react'
import { useState } from 'react';


const Content = () => {

    function handleNameChange(){

        const fruit=["apple","mango","orange"];
        const int=Math.floor(Math.random()*3);
        return fruit[int];
      }

      const [count, setCount]=useState(99);

      function incrementFunction(){
        setCount(prevCount=>prevCount+1);
      }

      function decrementFunction(){
        setCount(prevCount=>prevCount-1);
      }

  return (
    <main>
     <p>I Like </p>
     
     <button>Subscripe  Button</button>
     <button onClick={ decrementFunction }>-</button>
     <span>{count}</span>
     <button onClick={ incrementFunction }>+</button>
     
    </main>
    
  )
}

export default Content
