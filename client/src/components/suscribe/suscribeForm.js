import React from "react";

function SubscribeForm() {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-transparent rounded-xl h-max overflow-hidde my-40">
        <div className="grid ">
          <div className="md:shrink-0 text-center">
            <h1 className="text-white text-6xl">Get the latest Updates</h1>
            <h5 className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h5>
            <div className="mt-4 md:h-20">
              <input
                id="imgCard"
                className="bg-transparent w-80 h-16 mr-3 !rounded-[50px]"
                placeholder="Enter yout email"
              ></input>
              <button
                id="homeCard"
                className="bg-[#101828] text-white font-semibold px-4 py-1 h-16 sm:w-36 w-80 my-3 rounded-[50px] cursor-pointer"
              >
                Subscribe
              </button>
            </div>
            <p className="text-gray-600 font-normal mt-4">
              By clicking Subscribe Up you're confirming that you agree with our
            </p>
            <a href="" className="text-white">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeForm;
