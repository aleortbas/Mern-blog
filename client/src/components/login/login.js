import { useState } from "react";
import React from "react";
import signIn from "./img/sign_in.svg";
import signUp from "./img/sign_up.svg";

function Login({ onClose }) {
  const [login, setLogin] = useState(true);

  const handleClose = () => {
    setLogin(false);
    onClose(); // Call the onClose callback from props to close the modal in the parent component
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen backdrop-blur-md ${
        login ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white grid grid-cols-2 rounded-md shadow-md">
        <div className="bg-blue-700 flex items-center justify-center">
          <img className="mx-auto w-[450px]" src={signUp} />
        </div>

        <div className="p-4">
          <div>
            <h1 className="text-center text-gray-600 m-3">Login</h1>
            <p className="text-center text-gray-600 m-4">
              By logging in you agree to the ridiculously long terms that you
              didn't bother to read
            </p>
          </div>
          <div className="inline-block justify-center m-3">
            <label className="mb-1">Email</label>
            <input
              className="focus:border-red-500 bg-transparent w-[405px] h-11 text-black rounded-2xl"
              type="text"
              placeholder="Name"
              name="name"
              required
            ></input>
          </div>
          <div className="inline-block justify-center ml-3 mb-3">
            <label className="mb-1">Password</label>
            <input
              className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
              type="password"
              placeholder="Password"
              name="password"
              required
            ></input>
          </div>
          <button
            className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-left cursor-pointer"
            onClick={handleClose}
          >
            Log in
          </button>
          <button
            className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-right cursor-pointer"
            onClick={handleClose}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
