import logo from './logo.svg';
import './App.css';

function App() {

  function handleNameChange(){

    const fruit=["apple","mango","orange"];
    const int=Math.floor(Math.random()*3);
    return fruit[int];
  }
  
  return (
    <div className="App">
          Learn React  
          <p>{handleNameChange()}</p>
    </div>
  );
}

export default App;
