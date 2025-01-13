import { useState } from 'react'
import './App.css'
import Slide from './slider/Slide';
import ToggleButton from './toggle/toggle';
import { useEffect } from 'react';

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [specialCharAllowed,setSpecialCharAllowed]=useState(true);
function randomPasswordGenerator(length){
  const arr='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*)(';
  let ans='';
  let bound=52;
  if(numberAllowed) bound=62;
  if(specialCharAllowed) bound=72;
  for(let i=0;i<length;i++){
    if(!numberAllowed && specialCharAllowed){
      const a=Math.floor(Math.random()*52)
      const b=62+ Math.floor(Math.random()*10)
      const rand= Math.random()<0.8 ? a:b;
      ans+=arr[rand]
    }
    else{
      ans+=arr[Math.floor(Math.random()*bound)];
    }
  }
  return ans;
}
  useEffect(()=>{
    randomPasswordGenerator();
  },[])

  return (
    <>
    {/* <div className='bg-white'>hh</div> */}
    <Slide length={length} setLength={setLength}/>
    <p>{length} == {randomPasswordGenerator(length)}</p>
    <ToggleButton name={"want number?"} flag={numberAllowed} setFlag={setNumberAllowed}/>
    <ToggleButton name={"want special char"} flag={specialCharAllowed} setFlag={setSpecialCharAllowed}/>
    </>
  )
}

export default App
