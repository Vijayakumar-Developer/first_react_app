import React from 'react'
import { useState } from 'react';


const Content = () => {
   
  const [items,setItems]=useState(
    [
      {id:1,checked:true,item:"Learn React"},
      {id:2,checked:true,item:"Understand React"},
      {id:3,checked:true,item:"Practice React"}
    ]
  );
  return (
    <main>
      <ul>
        
          {items.map((item)=>(
            <li>
              <input type="checkbox" cheked={item.checked}/>
              <label>{item.item}</label>
              <button>Delete</button>
              </li>
          ))}
        
      </ul>
    </main>
    
  )
}

export default Content
