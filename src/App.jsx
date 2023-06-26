import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Calculator from "./components/Calculator";
import Services from "./components/Services";
import Steps from "./components/Steps";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminService from "./AdminService";

function App() {
  const [admin, setAdmin] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [payments, setPayments] = useState();
  const [orders, setOrders] = useState();
  const [services, setServices] = useState();
  const [service, setService] = useState();
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(1);
  const [hours, setHours] = useState(1);
  const [createdOrder, setCreatedOrder] = useState()
  useEffect(() => {
    //api code goes here
    axios("https://backendfinal-sy2f.onrender.com/services")
      .then((i) => setServices(i.data))
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
            <Calculator amount={amount} setAmount={setAmount} hours={hours} setHours={setHours} service={service} incTotal={incTotal} decTotal={decTotal} total={total}/>,
            <Booking setCreatedOrder={setCreatedOrder} amount={amount}hours={hours}total={total} service={service}/>,
            <Footer />,
          ]}
        />
        <Route
          path="/admin"
          element={<AdminService setServices={setService} services={services} isLogged={isLogged} />}
        />

        <Route
          path="/confirmation"
          element={[<Nav />, <Confirmation createdOrder={createdOrder} service={service} />, <Footer />]}
        />
        <Route
          path="/login"
          element={[
            <Login
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
