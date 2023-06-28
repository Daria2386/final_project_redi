import React from "react";


function Calculator({service, incTotal, decTotal, total, amount, setAmount, hours, setHours}) {
  function numInc() {
    setAmount((i) => {
      return (i = i + 1);
    });
    incTotal(service.price)
  }
  function numDec() {
    setAmount((i) => {
      if (i > 1) {
        decTotal(service.price)
        return i - 1;
      } else {
        return i;
      }
    });
  }
  function hIncr() {
    setHours((j) => {
      return (j = j + 1);
    });
    incTotal(service.price)
  }
  function hDecr() {
    setHours((j) => {
      if (j > 1) {
        decTotal(service.price)
        return j - 1;
      } else {
        return j;
      }
    });

  }

  return (
    <>
    <div className="lg:flex flex-row  justify-evenly lg:my-24">
      
      <h2 className="pt-6 text-center lg:mt-10">CLEANERS</h2>
      <div className="flex justify-center gap-6 items-center x">
        <p className=" text-center text-5xl">{amount} X </p>
        <img
          className="h-36 w-36"
          src="https://ik.imagekit.io/a0vaoqpiwv/Screenshot_2023-06-18_at_19.39.05.png?updatedAt=1687110010569"
          alt=""
        />

        <div className="flex flex-col">
          <button className="btn bg-[#D4EDE5]" onClick={numInc}>
            +1
          </button>
          <button className="btn  bg-[#D4EDE5]" onClick={numDec}>
            -1
          </button>
        </div>
      </div>

      <h2 className="pt-6 text-center lg:mt-10">HOURS</h2>
      <div className="flex justify-center  gap-6  items-center x">
        <p className=" text-center text-5xl">{hours} X </p>
        <img
          className="h-36 w-36"
          src="https://ik.imagekit.io/a0vaoqpiwv/clock.png?updatedAt=1687110318276"
          alt=""
        />

        <div className="flex flex-col">
          <button className="btn bg-[#D4EDE5]" onClick={hIncr}>
            +1
          </button>
          <button className="btn  bg-[#D4EDE5]" onClick={hDecr}>
            -1
          </button>
        </div>
        
      </div>
    </div>
    <div className="text-center font-bold mt-10">
  {service && (
  <div>
    <p>Name of the service is: {service.name}</p>
    <p>Total price is: € {total} </p>
    </div>
  )}
</div>
     
    </>
  );
}

export default Calculator;
