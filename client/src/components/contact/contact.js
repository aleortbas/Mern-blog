import React from "react";

function Contact() {
  return (
    <>
      <div className="container mt-36 m-auto block">
        <div className="mb-11">
          <h1 className="text-center text-white m-3">Get in touch</h1>
          <p className="text-center text-gray-600 m-4">
            Any feedbacks or suggestion?, Reach out to me by submitting below
            form
          </p>
        </div>
        <div className="flex justify-center m-3">
          <input
            className="bg-transparent w-[505px] h-14 text-white !rounded-3xl"
            id="imgCard"
            type="text"
            placeholder="Name"
            name="name"
            required
          ></input>
        </div>
        <div className="flex justify-center m-3">
          <input
            className="bg-transparent w-[505px] h-14 text-white !rounded-3xl"
            id="imgCard"
            type="text"
            placeholder="Email"
            name="email"
            required
          ></input>
        </div>
        <div className="flex justify-center m-3">
          <textarea
            id="imgCard"
            rows="4"
            className="bg-transparent w-[505px] text-white !rounded-3xl"
            type="text"
            placeholder="Type your message..."
            name="feedback"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            id="homeCard"
            className="bg-[#101828] text-white font-semibold px-4 py-1 h-12 sm:w-36 w-80 my-3 rounded-[50px] cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
