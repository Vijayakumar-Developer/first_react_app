import React from 'react'

function handleNameChange(){

    const fruit=["apple","mango","orange"];
    const int=Math.floor(Math.random()*3);
    return fruit[int];
  }
const Content = () => {
  return (
    <p>I Like  {handleNameChange()}</p>
  )
}

export default Content
