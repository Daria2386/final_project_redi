import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>

<div className="lg:flex wrap justify-evenly lg:px-5 lg:py-5 ">
        <div className="my-5 card w-96  bg-base-100 shadow-xl cardone">
          <figure className="px-10 pt-10">
            <img
              src="https://ik.imagekit.io/a0vaoqpiwv/room.svg?updatedAt=1686849548994"
              alt="Shoes"
              className="rounded-xl "
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">BASIC CLEANING</h2>
            <p>Reliable home cleaning service</p>
            <p>Good choice if you want to maintain a clean home</p>
            <p>Reduced price for subscribers</p>
            <p>Available last-minute</p>
            <p>PRICE PER CLEANER</p>
            <p>€35.90/h</p>
            <div className="card-actions">
              <Link to={"/booking"}> <button className="btn bg-[#3AB795] ">Book Now</button></Link>
              
            </div>
          </div>
        </div>

        <div className="my-5 card w-96 bg-base-100 shadow-xl cardtwo">
          <figure className="px-10 pt-10">
            <img
              src="https://ik.imagekit.io/a0vaoqpiwv/house.svg?updatedAt=1686849513683"
              alt="Shoes"
              className="rounded-xl "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">DEEP CLEANING</h2>
            <p>After-builders cleanup</p>
            <p>Reduced price of cleaning equipment</p>
            <p>Extensive dust cleaning</p>
            <p>Cleaning before the landlord inspection</p>
            <p>PRICE PER CLEANER</p>
            <p>€43.90/h</p>
            <div className="card-actions">

              <Link to={"/booking"}>  <button className="btn bg-[#3AB795] ">Book Now</button> </Link>
             
            </div>
          </div>
        </div>

        <div className="my-5 card w-96 bg-base-100 shadow-xl cardthree">
          <figure className="px-10 pt-10">
            <img
              src="https://ik.imagekit.io/a0vaoqpiwv/desk.svg?updatedAt=1686849502136"
              alt="Shoes"
              className="rounded-xl "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">OFFICE CLEANING</h2>
            <p>Customized offer for your office</p>
            <p>Flexible plans for small businesses</p>
            <p>Legally-registered office cleaning professionals</p>
            <p>PRICE PER CLEANER</p>
            <p> €53.90/h</p>
            <div className="card-actions">
              <Link to={"/booking"}> <button className="btn bg-[#3AB795] ">Book Now</button></Link>
              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Services