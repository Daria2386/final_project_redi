import React, { useState } from "react";
import data from "../data.json";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Booking({service, total, amount, hours, setCreatedOrder}) {
  const navigate = useNavigate()
  const [p, setp] = useState("")

  function paymentSelect (e) {
    setp(e.target.value)

  }

  function submitHandler (e) {
    e.preventDefault()
    axios.post("https://backendfinal-sy2f.onrender.com/orders", {
      client: e.target.client.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      serviceId: service.id,
      amount: total,
      cleaners: amount,
      hours: hours,
      date: e.target.date.value,
      payment: p,

      

    }).then(i => setCreatedOrder(i.data)).catch(i => console.log(i))

    navigate('/confirmation')

  }
  return (
    <div>
      
      <form onSubmit={submitHandler} className="flex flex-col items-center justify-center ">
        <div className=" lg:flex">
        <div>

          <input
            type="text"
            name="client"
            placeholder="Full Name"
            className="lenth input input-bordered input-accent w-full max-w-xs mt-5"
            />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
            />
          <input
            type="email"
            name="email"
            placeholder="@mail.com"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
            />
            <input
            type="date"
            name="date"
            placeholder="Date"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
            />
        </div>
        <div className="lg:flex-col justify-center ">
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
            />
          <select onChange={paymentSelect} className="select block select-bordered select-accent w-full max-w-xs mt-5">
            <option disabled selected>
              Choose your payment?
            </option>
            {data.payments.map((i) => (
              <option>{i}</option>
              ))}
          </select>
          <textarea
            className="textarea textarea-accent w-80 mt-5"
            placeholder="Type your special request if you have any"
            ></textarea>
        </div>
</div>
    
 <button type="submit" className="btn border-emerald-600 bg-[#3AB795] mt-5" >
            Confirm
          </button>
       
      </form>
    </div>
  );
}

export default Booking;
