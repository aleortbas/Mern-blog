import React from "react";
import Breadcrumbs from "../breadcrumb/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function PostBlog(params) {
  return (
    <>
      <div className=" flex justify-center mt-36">
        <div className=" w-2/3">
          <div className="flex m-auto justify-between w-2/3">
            <Breadcrumbs />
          </div>
          <h1 className="text-white m-auto w-2/3">
            The Future of Desktop Computing: Exploring the Potential of Cloud
            Gaming
          </h1>

          <div className="flex mt-5 m-auto justify-between w-2/3">
            <div className="flex">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-white font-bold m-0 text-lg">
                  Jonathan Reinink
                </p>
                <p className="text-base text-gray-500">
                  11 Jan 2022 • 5 min read
                </p>
              </div>
            </div>
            <div className="flex items-end">
              <button
                id="homeCard"
                className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-white"
                  size="sm"
                  icon={faLink}
                />
              </button>
              <button
                id="homeCard"
                className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-white"
                  size="sm"
                  icon={faLinkedin}
                />
              </button>
              <button
                id="homeCard"
                className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-white"
                  size="sm"
                  icon={faXTwitter}
                />
              </button>
              <button
                id="homeCard"
                className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-white"
                  size="sm"
                  icon={faFacebook}
                />
              </button>
            </div>
          </div>

          <div className="px-8 py-8 my-11 md: ">
            <div className="rounded-xl" id="imgCard">
              <img
                className="w-full md:h-auto rounded-2xl"
                src="https://c4.wallpaperflare.com/wallpaper/580/201/241/clouds-the-plane-liner-flight-wallpaper-preview.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="mt-24 flex justify-center m-auto w-2/3">
            <div className="text-white">
              <p className="mb-5">
                Welcome to our Tech Innovator blog, your go-to destination for
                exploring the frontiers of technology. Here, we dive deep into
                the latest advancements, trends, and innovations across various
                tech domains, keeping you informed and inspired.
              </p>
              <img
                className="w-full md:h-auto rounded-2xl"
                src="https://wallpapercave.com/wp/wp58250.jpg"
                alt=""
              />
              <p className="mt-5 mb-5">
                Welcome to our Tech Innovator blog, your go-to destination for
                exploring the frontiers of technology. Here, we dive deep into
                the latest advancements, trends, and innovations across various
                tech domains, keeping you informed and inspired.
              </p>
              <img
                className="w-full md:h-auto rounded-2xl"
                src="https://wallpapercave.com/wp/wp58250.jpg"
                alt=""
              />
              <p className="mt-5">
                Welcome to our Tech Innovator blog, your go-to destination for
                exploring the frontiers of technology. Here, we dive deep into
                the latest advancements, trends, and innovations across various
                tech domains, keeping you informed and inspired.
              </p>
            </div>
          </div>
          <div className="mt-24 flex justify-center m-auto w-2/3">
            <div className="text-white">
              <h3>Share this point</h3>
              <div className="flex items-end">
                <button
                  id="homeCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    size="sm"
                    icon={faLink}
                  />
                </button>
                <button
                  id="homeCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    size="sm"
                    icon={faLinkedin}
                  />
                </button>
                <button
                  id="homeCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    size="sm"
                    icon={faXTwitter}
                  />
                </button>
                <button
                  id="homeCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-11  w-11 mr-2 rounded-full  cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    size="sm"
                    icon={faFacebook}
                  />
                </button>
              </div>
              <div className="flex items-end">
                <button
                  id="imgCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-12  w-36 mr-2 p-0 rounded-3xl  cursor-pointer"
                >
                  <p>tag blog</p>
                </button>
                <button
                  id="imgCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-12 w-36 mr-2 p-0 rounded-3xl  cursor-pointer"
                >
                  <p>tag blog</p>
                </button>
                <button
                  id="imgCard"
                  className="bg-[#101828] text-white text-center font-semibold  h-12  w-36 mr-2 p-0 rounded-3xl  cursor-pointer"
                >
                  <p>tag blog</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostBlog;
