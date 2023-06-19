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
    <div>
      <div>
      <h3>Cleaners   </h3>
      <div className='flex'>  <p className='inline-block'>{amount}X</p> <img className='h-36 w-36' src="https://ik.imagekit.io/a0vaoqpiwv/Screenshot_2023-06-18_at_19.39.05.png?updatedAt=1687110010569" alt="" /> </div>
      </div>

      
      
     <button className='btn bg-[#D4EDE5]' onClick={numInc}>+1</button>
     <button className='btn bg-[#D4EDE5]' onClick={numDec}>-1</button>
   



   <div>
    <h3>Hours</h3>
    <div className='flex justify-center content-center'> <p className='bg-sky-500/100 text-center'>{hours} X </p>
    <img className='h-36 w-36' src="https://ik.imagekit.io/a0vaoqpiwv/clock.png?updatedAt=1687110318276" alt="" />
   </div>
   <div><button className='btn bg-[#D4EDE5]' onClick={hIncr}>+1</button>
   <button className='btn  bg-[#D4EDE5]' onClick={hDecr}>-1</button>
   </div>

   </div>
    <input type="date" />
    </div>
  )
}

export default Calculator