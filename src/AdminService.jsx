import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminOrders from "./components/AdminOrders";

function AdminService({
  orders,
  isLogged,
  services,
  setServices,
  updateServices,
}) {
  const navigate = useNavigate();

  function deleteService(n) {
    axios
      .delete(`https://backendfinal-sy2f.onrender.com/services/${n}`)
      .then((i) => console.log(i.data))
      .catch((i) => console.log(i));
    // updateServices();
  }
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://backendfinal-sy2f.onrender.com/services", {
        name: e.target.name.value,
        photo: e.target.photo.value,
        price: e.target.price.value,
        description: e.target.desc.value,
      })
      .then((i) => console.log(i.data))
      .catch((i) => console.log(i));
    updateServices();
    window.add_service_modal.close();
  }

  return (
    <div className="min-h-screen w-85 cardone flex flex-col items-center">
      <h1 className="text-center text-4xl"> Welcome back, Daria! </h1> <br />
      <h2 className="text-3xl">Orders</h2>
        
      <div className="cardthree rounded-xl lg:w-9/12">
       
        <AdminOrders key="adminorder"orders={orders} />
      </div>
    
      <h2 className="text-3xl">Servises</h2>
      <table className="table cardthree lg:w-9/12"> 
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>ID</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {services &&
            services.map((i, j) => (
              <tr>
                <th>{j + 1}</th>
                <td>{i.name}</td>
                <td>{i.id}</td>
                <td>{i.price}</td>
                <td><button onClick={() => deleteService(i.id)}>
              <ion-icon name="trash-outline"></ion-icon>
            </button></td>
              </tr>
            ))}
        </tbody>
      </table>
      
      {/* You can open the modal using ID.showModal() method */}
      <button
        className="btn border-emerald-600 bg-[#3AB795] my-6 w-36 "
     
        onClick={() => window.add_service_modal.showModal()}
      >
       + Add a new service
      </button>
      <dialog id="add_service_modal" className="modal">
        <div method="dialog" className="modal-box cardone">
          <button
            onClick={() => window.add_service_modal.close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">New Service</h3>
          <form onSubmit={submitHandler}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              name="photo"
              type="text"
              placeholder="Photo"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <textarea
              name="desc"
              type="text"
              placeholder="Description"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <button className="btn border-emerald-600 bg-[#3AB795]"
     type="submit">
              Add a new service
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default AdminService;
