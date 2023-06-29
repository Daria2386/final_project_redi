import React, { useEffect } from 'react'
import Calculator from './Calculator'
import Booking from './Booking'
import { useNavigate } from 'react-router-dom'

function SecondPage({service,  hours, setCreatedOrder,  incTotal, decTotal, total, amount, setAmount,  setHours}) {
  const navigate = useNavigate()
  useEffect(() => {
    if (!service){
      navigate("/services")
    }
  })
  return (
    <div className=''>
   <Calculator key="calculator" amount={amount} setAmount={setAmount} hours={hours} setHours={setHours} service={service} incTotal={incTotal} decTotal={decTotal} total={total}/>
            <Booking key="booking" setCreatedOrder={setCreatedOrder} amount={amount}hours={hours}total={total} service={service}/>


    </div>
  )
}

export default SecondPage