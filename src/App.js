import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Additem from "./Additem";
import { useState } from 'react';
function App() {

  const [items,setItems]=useState(
    [
      {id:1,checked:true,item:"Learn React"},
      {id:2,checked:false,item:"Understand React"},
      {id:3,checked:false,item:"Practice React"}
    ]
  );

  const [newItem,setnewItem]=useState('')

  const addItem=(item) =>{

    const id= items.length ?items[items.length -1].id+1:1;
    const addNewItem= {id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list" ,JSON.stringify(listItems))
  }

  const handleCheck=(id) =>{
   const listItems =items.map((item)=>
    item.id===id ?{...item, checked:!item.checked}:item)
   setItems(listItems)
   localStorage.setItem("todo_list" ,JSON.stringify(listItems))
  }
  const handleDelete=(id)=>{
    const listItems =items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list" ,JSON.stringify(listItems))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return ;
    console.log(newItem);
    addItem(newItem)
    setnewItem('')
  }

 

  return (
    <div className="App">
          <Header title="To Do List" />
          <Additem 
          newItem={newItem}
          setnewItem ={setnewItem}
          handleSubmit={handleSubmit}
          />
          <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
          <Footer
          length={items.length}
          />
    </div>
  );
}

export default App;
