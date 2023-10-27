import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import signUp from "./img/sign_up.svg";
import signIn from "./img/sign_in.svg";

function Login({ onClose }) {
  const [loginForm, setLoginForm] = useState(true);

  const [login, setLogin] = useState(true);
  const [sign, setSignUp] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [image, setImage] = useState(true);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [user, setUser] = useState(null);

  const handleClose = () => {
    setLoginForm(false);
    onClose(); // Call the onClose callback from props to close the modal in the parent component
  };

  const handleLogin = () => {};

  useEffect(() => {}, [submitForm]);

  function toggle() {
    setLogin((login) => !login);
    setSignUp((sign) => !sign);
    setImage((image) => !image);
    setSubmitForm(true);
  }

  const handleSubmitLogin = async () => {
    const endpoint = submitForm ? "login" : "signUp";
    console.log(endpoint);
    const response = await fetch(`http://localhost:5000/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, user, password }),
    })
      .then((data) => {
        console.log(data); // Add this line to inspect the response
        // JSON.parse(data);
      })
      .catch((error) => {
        console.error("Error FETCH:", error);
      });
    return response.json();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-screen backdrop-blur-md visible  ${
          loginForm ? "" : ""
        }`}
        id="login"
      >
        <div className="flex justify-end">
          <div className="w-7 h-7 m-4 cursor-pointer" onClick={handleClose}>
            <FontAwesomeIcon className="text-white" size="xl" icon={faX} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white grid grid-cols-2 rounded-md shadow-md">
          {image && (
            <div className="bg-blue-700 flex items-center justify-center">
              <img className="mx-auto w-[450px]" src={signUp} />
            </div>
          )}
          {sign && (
            <form className="p-4" onSubmit={handleSubmitLogin}>
              <div>
                <h1 className="text-center text-gray-600 m-3">Log in</h1>
                <p className="text-center text-gray-600 m-4">
                  By logging in you agree to the ridiculously long terms that
                  you didn't bother to read
                </p>
              </div>
              <div className="inline-block justify-center ml-3 mb-3">
                <label className="mb-1">username</label>
                <input
                  className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUser(e.target.value)}
                  required
                ></input>
              </div>
              <div className="inline-block justify-center ml-3 mb-3">
                <label className="mb-1">Password</label>
                <input
                  className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>
              <button
                className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-left cursor-pointer"
                type="submit"
              >
                Log in
              </button>
              <button
                className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-right cursor-pointer"
                onClick={toggle}
              >
                Sign Up
              </button>
            </form>
          )}
          {!image && (
            <div className="bg-blue-700 flex items-center justify-center">
              <img className="mx-auto w-[450px]" src={signIn} />
            </div>
          )}

          {login && (
            <form className="p-4" onSubmit={handleSubmitLogin}>
              <div>
                <h1 className="text-center text-gray-600 m-3">Sign up</h1>
                <p className="text-center text-gray-600 m-4">
                  By logging in you agree to the ridiculously long terms that
                  you didn't bother to read
                </p>
              </div>
              <div className="inline-block justify-center m-3">
                <label className="mb-1">First Name</label>
                <input
                  className="focus:border-red-500 bg-transparent w-[405px] h-11 text-black rounded-2xl"
                  type="text"
                  placeholder="First Name"
                  name="FirstName"
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="inline-block justify-center ml-3 mb-3">
                <label className="mb-1">Last Name</label>
                <input
                  className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="inline-block justify-center ml-3 mb-3">
                <label className="mb-1">Email</label>
                <input
                  className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div className="inline-block justify-center ml-3 mb-3">
                <label className="mb-1">username</label>
                <input
                  className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUser(e.target.value)}
                  required
                ></input>
              </div>
              <div className="inline-block justify-center ml-3 mb-3">
                <label className="mb-1">Password</label>
                <input
                  className="bg-transparent w-[405px] h-11 text-black !rounded-2xl"
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>
              <button
                className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-left cursor-pointer"
                onClick={toggle}
                type="submit"
              >
                Log in
              </button>
              <button className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-right cursor-pointer">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
