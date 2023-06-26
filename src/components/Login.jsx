import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser, admin, setAdmin, isLogged, setIsLogged }) {
  const navigate = useNavigate();
  const log = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (admin) {
      if (admin.password == password || admin.email == email) {
        setIsLogged(true)
        navigate('/admin')
        console.log("Logged....");
      } else {
        console.log("wrong password or email");
      }
    } else {
      console.log("Admin not found yet");
    }
  };

  return (
    <div>
      <form onSubmit={log} className="flex flex-col justify-center items-center items-center min-h-screen">
        <input
          type="mail"
          name="email"
          placeholder="@mail.com"
          className="input input-bordered input-accent w-full max-w-xs mt-5"
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          className="input input-bordered input-accent w-full max-w-xs mt-5"
        />
        <button
          type="submit"
          className="btn border-emerald-600 bg-[#3AB795] w-44 mt-5 "
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
