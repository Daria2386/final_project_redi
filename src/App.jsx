import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Steps from "./components/Steps";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminService from "./AdminService";
import SecondPage from "./components/SecondPage";

function App() {
  const [admin, setAdmin] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState();
  const [services, setServices] = useState();
  const [service, setService] = useState();
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(1);
  const [hours, setHours] = useState(1);
  const [createdOrder, setCreatedOrder] = useState()

  function updateServices () {
    axios("https://backendfinal-sy2f.onrender.com/services")
      .then((i) => setServices(i.data))
      .catch((i) => console.log(i));
  }
  useEffect(() => {
    //api code goes here
    axios("https://backendfinal-sy2f.onrender.com/services")
      .then((i) => setServices(i.data))
      .catch((i) => console.log(i));
      axios("https://backendfinal-sy2f.onrender.com/orders ")
      .then((i) => setOrders(i.data))
      .catch((i) => console.log(i));
    axios("https://backendfinal-sy2f.onrender.com/admin")
      .then((i) => setAdmin(i.data))
      .catch((i) => console.log(i));
  }, []);
  
  function incTotal (a) {
    setTotal(i => i = Math.round(i + Number(a)))

  }
  function decTotal (a) {
    setTotal(i => i = Math.round(i - Number(a)))

  }


  // useEffect(() => {
  //   console.log(service);
  // }, [service])
  return (
    <div className="app min-h-screen">
      <Routes>
        <Route
          path="/"
          element={[
            <Nav  key="nav" />,
            <Home key="home" />,
            <Services key="services" services={services} incTotal={incTotal}  setService={setService} />,
            <Steps key="steps"/>,
            <Footer key="footer"/>,
          ]}
        />

        <Route
          path="/booking"
          element={[
            <Nav />,
            <SecondPage  key="seconpage"amount={amount} setAmount={setAmount} hours={hours} setHours={setHours} service={service} incTotal={incTotal} decTotal={decTotal} total={total} setCreatedOrder={setCreatedOrder}   />,
            
            <Footer />

            
          ]}
        />
        <Route
          path="/admin"
          element={<AdminService key="adminservice" orders={orders} updateServices={updateServices} setServices={setService} services={services} isLogged={isLogged} />}
        />

        <Route
          path="/confirmation"
          element={[<Nav />, <Confirmation key="confirmationx" createdOrder={createdOrder} service={service} />, <Footer />]}
        />
        <Route
          path="/login"
          element={[
            <Login key="login"
              setIsLogged={setIsLogged}
              isLogged={isLogged}
              admin={admin}
              setAdmin={setAdmin}
            />,
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;
