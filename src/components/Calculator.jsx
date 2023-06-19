import React from 'react'
import { useState } from 'react'

function Calculator() {
  const [amount, setAmount] = useState(1)
  const [hours, setHours] = useState(1)
  function numInc() {
    setAmount(i =>{
return i = i+1
})}
function numDec() {
  setAmount(i  => {
    if (i > 1){
      return i-1
    }else {
      return i}
})}
function hIncr () {
  setHours (j => {
    
    return j = j+1
  })}
  function hDecr () {
    setHours(j=> {
if (j> 1){
  return j-1
}else {
  return j
}

    })
    }
  
  return (
    
      <div className='lg:flex flex-row justify-evenly'>
      <h2 className='pt-6 text-center'>CLEANERS</h2>
   <div className='flex justify-center gap-6 items-center x'>
    <p className=' text-center text-5xl'>{hours} X </p>
    <img className='h-36 w-36' src="https://ik.imagekit.io/a0vaoqpiwv/Screenshot_2023-06-18_at_19.39.05.png?updatedAt=1687110010569" alt="" />
   
   <div className='flex flex-col'>
    <button className='btn bg-[#D4EDE5]' onClick={numInc}>+1</button>
   <button className='btn  bg-[#D4EDE5]' onClick={numDec}>-1</button>
   </div>

   </div>
    
    
    <h2 className='pt-6 text-center'>HOURS</h2>
   <div className='flex justify-center  gap-6  items-center x'>
    <p className=' text-center text-5xl'>{hours} X </p>
    <img className='h-36 w-36' src="https://ik.imagekit.io/a0vaoqpiwv/clock.png?updatedAt=1687110318276" alt="" />
   
   <div className='flex flex-col'>
    <button className='btn bg-[#D4EDE5]' onClick={hIncr}>+1</button>
   <button className='btn  bg-[#D4EDE5]' onClick={hDecr}>-1</button>
   </div>

   </div>
    
    </div>
  )
}

export default Calculator