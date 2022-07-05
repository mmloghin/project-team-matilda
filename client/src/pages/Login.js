import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Login() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const result = await axios("/users/login", {
        method: "POST",
        data: credentials,
      });

      if (result.status === 200) {
        toast.success("Success!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        localStorage.setItem("token", result.token);
        navigate("/account");
      }

    } catch (err) {
      console.log(err);
      toast.error("Email or Password is incorrect", {
        position: toast.POSITION.BOTTOM_CENTER
      });

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    setCredentials({
      email: "",
      password: "",
    });
  };

  // const logout = () => {
  //   localStorage.removeItem("token");
  // };

  // const accessAccount = async () => {
  //   try {
  //     const result = await axios("/users/account", {
  //       headers: {
  //         authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     });
  //     console.log(result.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container min-h-screen font-medium flex justify-center -m-8">
      <ToastContainer />

      <div className="content mt-12 flex flex-col items-center p-6 sm:p-12">
        <h2 className="heading text-2xl xl:text-3xl font-extrabold">
          Please Login
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

          <button className="mt-5 tracking-wide border-b-2 border-transparent text-white bg-gradient-to-br from-indigo-400 to-indigo-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium w-full py-4 rounded-lg flex items-center justify-center"
            type="submit"
            onClick={handleSubmit}>
            Login
          </button>

          <p className="mt-8 text-sm text-gray-600 text-center">
            Don't have an account? <br></br>
            <Link to="/signup" className="border-b border-gray-500 border-dotted">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
