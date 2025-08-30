import { useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter] = useState(0)
  
  const addValue = ()=>{
    setCounter(counter+1);
  }

  const minusValue = ()=>{
    if(counter>0) setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={minusValue}>Decrease value</button>
    </>
  );
}

export default App;
