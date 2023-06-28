import React, { useEffect } from 'react'
import Calculator from './Calculator'
import Booking from './Booking'

function SecondPage({service,  hours, setCreatedOrder,  incTotal, decTotal, total, amount, setAmount,  setHours}) {
  
  return (
    <div className=''>
   <Calculator key="calculator" amount={amount} setAmount={setAmount} hours={hours} setHours={setHours} service={service} incTotal={incTotal} decTotal={decTotal} total={total}/>
            <Booking key="booking" setCreatedOrder={setCreatedOrder} amount={amount}hours={hours}total={total} service={service}/>


    </div>
  )
}

export default SecondPage