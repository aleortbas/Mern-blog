import React from "react";
import Breadcrumbs from "../breadcrumb/breadcrumbs";
import { Button } from "bootstrap";

function PostBlog(params) {
  return (
    <>
      <div className="container flex justify-center mt-36 bg-red-600">
        <div className="bg-green-500 w-[768px]">
          <Breadcrumbs />
          <h1 className="text-white">
            The Future of Desktop Computing: Exploring the Potential of Cloud
            Gaming
          </h1>
          <div className="flex mt-11">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="flex">
              <div className="text-sm">
                <p className="text-white font-bold m-0 text-lg">
                  Jonathan Reinink
                </p>
                <p className="text-base text-gray-500">
                  11 Jan 2022 • 5 min read
                </p>
              </div>
              <div></div>
              <div className="m-auto">
                <button id="imgCard" className="justify-end">
                  sfd
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
