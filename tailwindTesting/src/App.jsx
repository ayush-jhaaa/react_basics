import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Smoke from './components/Smoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>  
    <Smoke username='ayush' price={10}/>
    <Smoke/>
    </>
  )
}

export default App
