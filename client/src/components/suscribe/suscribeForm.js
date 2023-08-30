import React from "react";

function SubscribeForm() {
    return (

        <div className="my-40">
            <div className="sm:grid sm:place-items-center bg-transparent">
                <h1 className="text-white text-6xl">Get the latest Updates</h1>
                <h5 className="w-2/3 text-center text-gray-600 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h5>
                <div className="flex m-5">
                    <input id="imgCard" className="bg-transparent w-80 h-16 mr-3" placeholder="Enter yout email"></input>
                    <button id="homeCard" className='bg-[#101828] text-white font-semibold px-4 py-1 h-16 w-36  cursor-pointer'>Login</button>
                </div>
                <p className="text-gray-600 font-normal">By clicking Subscribe Up you're confirming that you agree with our </p>
            </div>
        </div>
    )
}

export default SubscribeForm