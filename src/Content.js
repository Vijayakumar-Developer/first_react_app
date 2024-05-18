import React from 'react'


const Content = () => {

    function handleNameChange(){

        const fruit=["apple","mango","orange"];
        const int=Math.floor(Math.random()*3);
        return fruit[int];
      }
      const handleClick=(e)=>{
        console.log(e.target);
      }
      const handleClick2=(name)=>{
        console.log(`Thanks for the support ${name}`);
      }
  return (
    <main>
     <p>I Like  {handleNameChange()}</p>
     
     <button onClick={(e)=>handleClick(e)}>Subscripe  Button</button>
    </main>
    
  )
}

export default Content
