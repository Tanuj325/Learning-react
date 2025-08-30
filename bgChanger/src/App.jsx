import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [color,setColor]=useState("black");

  return (
    <div className='main' style={{backgroundColor:color}}>
      <div className='color'>
        <button className="red" onClick={()=>setColor("red")}>Red</button>
        <button className="green" onClick={()=>setColor("green")}>Green</button>
        <button className="blue" onClick={()=>setColor("blue")}>Blue</button>
        <button className="olive" onClick={()=>setColor("olive")}>Olive</button>
        <button className="grey" onClick={()=>setColor("grey")}>Grey</button>
        <button className="yellow" onClick={()=>setColor("yellow")}>yellow</button>
        <button className="pink" onClick={()=>setColor("pink")}>Pink</button>
        <button className="purple" onClick={()=>setColor("purple")}>Purple</button>
        <button className="lavender" onClick={()=>setColor("lavender")}>Lavender</button>
        <button className="white" onClick={()=>setColor("white")}>White</button>
        <button className="black" onClick={()=>setColor("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
