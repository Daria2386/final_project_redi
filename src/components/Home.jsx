import React from "react";

function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 bg-img">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className="h-48 w-48"
            src="https://ik.imagekit.io/a0vaoqpiwv/sas_logo_icon_only.svg?updatedAt=1686849560629"
          />
          <div>
            <h1 className="text-lg font-bold">
              English-Speaking Cleaning Services in Germany
            </h1>
            <p className="py-6">
              Book a verified cleaning person for your home or office in
              Germany.
            </p>
            <input
              className="h-12 rounded bg-slate-100"
              type="text"
              placeholder="Enter your postcode"
            />
            <button className="btn border-emerald-600 bg-[#F1D204]">
              Book now
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex wrap justify-evenly lg:px-5 lg:py-5 ">
        <div className="card w-96  bg-base-100 shadow-xl cardone">
          <figure className="px-10 pt-10">
            <img
              src="https://ik.imagekit.io/a0vaoqpiwv/room.svg?updatedAt=1686849548994"
              alt="Shoes"
              className="rounded-xl "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">BASIC CLEANING</h2>
            <p>Reliable home cleaning service</p>
            <p>Good choice if you want to maintain a clean home</p>
            <p>Reduced price for subscribers</p>
            <p>Available last-minute</p>
            <p>PRICE PER CLEANER</p>
            <p>€35.90/h</p>
            <div className="card-actions">
              <button className="btn bg-[#3AB795] ">Book Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl cardtwo">
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
              <button className="btn bg-[#3AB795] ">Book Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl cardthree">
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
              <button className="btn bg-[#3AB795] ">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <h2 className="text-center font-semibold">How does it work?</h2>
        <div className="lg:flex  justify-center">
          <div className="text-center  p-6 flex flex-col justify-center items-center">
            <div class="text-3xl bg-yellow-500 flex items-center justify-center h-12 w-12 mb-6 rounded-full text-black ">
              1
            </div>
            <h2 tclassName="text-center">Fill out the booking form</h2>
            <p>
              Select the type of cleaning, specify the date & time, and give us
              the address of your property. You can also select from a range of
              special requests.
            </p>
          </div>
          <div className="text-center  p-6 flex flex-col justify-center items-center">
            <div class="text-3xl bg-yellow-500 flex items-center justify-center h-12 w-12 mb-6 rounded-full text-black">
              2
            </div>
            <h2 className="text-center">Pay for the first hour</h2>
            <p>
              To confirm your booking a deposit for the first hour is required.
              The amount paid is deducted from the final bill.
            </p>
          </div>
          <div className="text-center  p-6 flex flex-col justify-center items-center">
            <div class="text-3xl bg-yellow-500 flex items-center justify-center h-12 w-12 mb-6 rounded-full text-black">
              3
            </div>
            <h2 className="text-center">Have your place cleaned</h2>
            <p>
              We'll match you with a verified cleaning person, who'll clean your
              apartment. After the cleaning, you'll receive a cleaning summary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
