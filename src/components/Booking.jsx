import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
function Booking() {
  return (
    <div>
      <form className="flex flex-col items-center ">
        <div>
        <input
          type="text"
          placeholder="Full Name"
          className="lenth input input-bordered input-accent w-full max-w-xs mt-5"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="input input-bordered input-accent w-full max-w-xs mt-5"
        />
        <input
          type="email"
          placeholder="@mail.com"
          className="input input-bordered input-accent w-full max-w-xs mt-5"
        />
        </div>
        <div className="lg:flex-col ">
        <input
          type="text"
          placeholder="Enter your address"
          className="input input-bordered input-accent w-full max-w-xs mt-5"
        />
        <select className="select select-bordered select-accent w-full max-w-xs mt-5">
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
        
        <Link  to={"/confirmation"}><button type="submit" className="btn mt-5">
          Confirm
        </button></Link>
        
      </form>
    </div>
  );
}

export default Booking;
