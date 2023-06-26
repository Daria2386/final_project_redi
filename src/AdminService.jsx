import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminService({ isLogged, services, setServices }) {
  const navigate = useNavigate();

  function deleteService(n) {
    alert(n);
    axios
      .delete(`https://backendfinal-sy2f.onrender.com/services/${n}`)
      .then((i) => console.log(i.data))
      .catch((i) => console.log(i));
  }
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  });

  return (
    <div className=" bg-slate-200 min-h-screen">
      <h1 className="text-center text-lg"> Welcome to Admin Service</h1> <br />
      {services
        && services.map((i) => (
            <p>
              {i.name}{" "}
              <button onClick={() => deleteService(i.id)}>
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </p>
          ))}
      <button>
        <ion-icon name="add-circle-outline"></ion-icon>
      </button>
    </div>
  );
}

export default AdminService;
