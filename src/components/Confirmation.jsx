import React, { useState } from 'react'
import { CircleLoader } from "react-spinners";

function Confirmation({createdOrder, service}) {
  return (
    <div className='flex flex-col my-16 lg:h-[50rem]'>
      {createdOrder ?
        <section className='flex flex-col  text-center'>
        <h1>Payment order successfull</h1>
        <div className=''>
        <ion-icon name="checkmark-done-circle"></ion-icon></div>
      <p className='mb-5'>Booking details are: </p>
      <p className='mb-5'>You have choosen: {service.name}</p>
      <p className='mb-5'>A number of cleaners: {createdOrder.cleaners}</p>
      <p className='mb-5'>Duration: {createdOrder.hours} hour(s)</p>
      <p className='mb-5'>Date :{createdOrder.date}</p>
       
      </section>
      :<div className="h-96 flex justify-center items-center">
      {/* <span className="loading loading-dots loading-lg"></span> */}
      <CircleLoader />
                </div>
              
      }
      
    </div>
  )
}

export default Confirmation