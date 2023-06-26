import React, { useState } from 'react'

function Confirmation({createdOrder, service}) {
  return (
    <div className='flex flex-col min-h-full'>
      {createdOrder && 
        <section className='flex flex-col  text-center'>
        <h1>Payment order successfull</h1>
        <div>
        <ion-icon name="checkmark-done-circle"></ion-icon></div>
      <p>Booking details are: </p>
      <p>You have choosen: {service.name}</p>
      <p>A number of cleaners: {createdOrder.cleaners}</p>
      <p>Duration: {createdOrder.hours} hour(s)</p>
      <p>Date :{createdOrder.date}</p>
       
      </section>
      }
      
    </div>
  )
}

export default Confirmation