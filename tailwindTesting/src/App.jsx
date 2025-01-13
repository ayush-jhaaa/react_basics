import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Smoke from './components/Smoke'
import { use } from 'react'

function App() {
  const [color,setColor] = useState('#212121')
  const [textColor,setTextColor]=useState("white")

  return (
    <> 
    <div className="w-full h-screen bg-gray-800 flex flex-col items-center justify-center"
    style={{backgroundColor:color,border:'10px solid red',borderRadius:50,color:textColor}}>
      <button onClick={ ()=> {
        setColor("red")
        setTextColor("yellow")}}
      >
        red
      </button>
      <button onClick={ ()=> {
        setColor("olive")
        setTextColor("black")}}
      >
        olive
      </button>
      <button onClick={ ()=> {
        setColor("black")
        setTextColor("white")}}
      >
        black
      </button>
    </div>
    </>
  )
}

export default App
