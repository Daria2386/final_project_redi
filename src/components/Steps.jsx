import React from 'react'

function Steps() {
  return (
    <div>
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
  )
}

export default Steps