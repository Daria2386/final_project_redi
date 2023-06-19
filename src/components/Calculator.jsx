import React from 'react'
import { useState } from 'react'

function Calculator() {
  const [amount, setAmount] = useState(1)
  function numInc() {
    setAmount(i =>{
return i = i+1
})}
function numDec() {
  setAmount(i =>{
return i = i-1
})}
  return (
    <div>
      <div>
      <h3>Cleaners   </h3>
      <div className='flex'>  <p className='inline-block'>{amount}X</p> <img className='w-20 h-20' src="https://ik.imagekit.io/a0vaoqpiwv/Screenshot_2023-06-18_at_19.39.05.png?updatedAt=1687110010569" alt="" /> </div>
      </div>

      
      
     <button className='btn bg-[#D4EDE5]' onClick={numInc}>+1</button>
     <button className='btn bg-[#D4EDE5]' onClick={numDec}>-1</button>
   

    </div>
  )
}

export default Calculator