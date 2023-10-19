import { useState } from "react";
import React from "react";
import signUp from "./img/sign_up.svg";

function Login({ onClose }) {
  const [login, setLogin] = useState(true);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [user, setUser] = useState(null);

  const handleClose = () => {
    setLogin(false);
    onClose(); // Call the onClose callback from props to close the modal in the parent component
  };

  const handleSubmitLogin = async () => {
    await fetch(`http://localhost:5000/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, user, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Change to text() to see the response data
      })
      .then((data) => {
        console.log(data); // Add this line to inspect the response
        // JSON.parse(data);
      })
      .catch((error) => {
        console.error("Error FETCH:", error);
      });
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-screen backdrop-blur-md visible  ${
          login ? "" : ""
        }`}
        id="login"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white grid grid-cols-2 rounded-md shadow-md">
          <div className="bg-blue-700 flex items-center justify-center">
            <img className="mx-auto w-[450px]" src={signUp} />
            <div>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>

          <form className="p-4">
            <div>
              <h1 className="text-center text-gray-600 m-3">Sign up</h1>
              <p className="text-center text-gray-600 m-4">
                By logging in you agree to the ridiculously long terms that you
                didn't bother to read
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
              onClick={handleSubmitLogin}
              type="submit"
            >
              Log in
            </button>
            <button
              className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] float-right cursor-pointer"
              onClick={handleClose}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
