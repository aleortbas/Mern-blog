import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  return (
    <>
      <div className="container mt-36 w-fit m-auto" id="profile">
        <a
          href="#"
          id=""
          className="flex flex-colbg-[#101828]  no-underline md:flex-row"
        >
          <div className="px-8 py-8 md:w-3/6">
            <div id="imgCard">
              <img
                className="w-full md:h-auto rounded-2xl"
                src="https://c4.wallpaperflare.com/wallpaper/580/201/241/clouds-the-plane-liner-flight-wallpaper-preview.jpg"
                alt=""
              />
            </div>
            <div className="py-4">
              <button
                id="loginButton"
                className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer"
              >
                Nombre usuario
              </button>
            </div>
          </div>
          <div className="flex flex-col md:w-3/6 p-4">
            <div className="">
              <span className="text-xl text-gray-500 mr-9">
                Popular repositories
              </span>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4 pt-4">
              <div id="profileCard" className="rounded-xl w-56">
                <div className="px-6 pb-4">
                  <div className="font-bold text-xl mb-2 p-3">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div id="profileCard" className="rounded-xl w-56">
                <div className="px-6 pb-4">
                  <div className="font-bold text-xl mb-2 p-3">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div id="profileCard" className="rounded-xl w-56">
                <div className="px-6 pb-4">
                  <div className="font-bold text-xl mb-2 p-3">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div id="profileCard" className="rounded-xl w-56">
                <div className="px-6 pb-4">
                  <div className="font-bold text-xl mb-2 p-3">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div id="profileCard" className="rounded-xl w-56">
                <div className="px-6 pb-4">
                  <div className="font-bold text-xl mb-2 p-3">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div id="profileCard" className="rounded-xl w-56">
                <div className="px-6 pb-4">
                  <div className="font-bold text-xl mb-2 p-3">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-fit m-auto">
        <button
          id="loginButton"
          className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-56 rounded-[50px] cursor-pointer"
        >
          New Post
        </button>
      </div>
      {
        <div className="container w-fit m-auto bg-[#0c121f]">
          <ul className="flex w-auto items-center m-auto">
            <div className="flex m-auto">
              <li className="text-white w-44 h-14 flex items-center justify-center border-[1px] border-gray-800">
                POST
              </li>
              <li className="text-white w-44 h-14 flex items-center justify-center border-[1px] border-gray-800">
                IMAGE
              </li>
            </div>
          </ul>
        </div>
      }
    </>
  );
}

export default Profile;
