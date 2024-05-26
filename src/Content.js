import React from 'react'
import ItemsList from "./ItemsList";
import { FaTrashAlt } from 'react-icons/fa';


const Content = ({items,setItems,handleCheck,handleDelete}) => {
   
  
  return (
    <main>
      {(items.length)?(
      <ItemsList 
      items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
      />
      ) :(
        <p style={{marginTop:"2rem"}}>No Lists Found</p>
      )
    }
    </main>
    
  )
}

export default Content
