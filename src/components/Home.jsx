import React from "react";
import { Link } from "react-router-dom";
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
            
            <button className="btn border-emerald-600 bg-[#F1D204]">
              <a href="#services">Book Now</a>
            </button>
            
          </div>
        </div>
      </div>
     
    </div>
    


  );
}

export default Home;
