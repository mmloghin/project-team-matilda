import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const register = async () => {
    try {
      const result = await axios("/users/register", {
        method: "POST",
        data: credentials,
      });

      if (result.status === 200)
          toast.success("Success!", {
            position: toast.POSITION.BOTTOM_CENTER
          });

    } catch (err) {
      console.log(err);
      toast.error("Passwords don't match", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
    setCredentials({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container min-h-screen font-medium flex justify-center -m-8">
      <ToastContainer/>

      <div className="content mt-12 flex flex-col items-center p-6 sm:p-12">
        <h2 className="heading text-2xl xl:text-3xl font-extrabold">
          Sign Up
        </h2>

        <form className="mx-auto max-w-xs mt-8">
          <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={handleChange}
          />

          <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
          />

          <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />

          <button className="mt-5 tracking-wide border-b-2 border-transparent text-white bg-gradient-to-br from-indigo-400 to-indigo-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium w-full py-4 rounded-lg flex items-center justify-center"
            type="submit"
            onClick={handleSubmit}>
            Sign Up
          </button>

          <p className="mt-8 text-sm text-gray-600 text-center">
            Do you already have an account? <br></br>
            <Link to="/login" className="border-b border-gray-500 border-dotted">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
