import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = credentials;

  return (
    <div className="signup--container min-h-screen font-medium flex justify-center -m-8">
      <div className="content mt-12 flex flex-col items-center p-6 sm:p-12">
        <h2 className="heading text-2xl xl:text-3xl font-extrabold">
          Sign Up
        </h2>
        <form className="mx-auto max-w-xs mt-8">
          <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="email"
            placeholder="Email"
          />

          <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Password"
          />

          <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Confirm Password"
          />

          <button className="mt-5 tracking-wide border-b-2 border-transparent text-white bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium w-full py-4 rounded-lg flex items-center justify-center" type="submit">
            <span className="text"
            >
              Sign Up</span>
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
