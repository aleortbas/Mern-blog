import React, { useEffect, useState } from "react";
import Breadcrumbs from "../breadcrumb/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function PostBlog(params) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/blogsHome`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //extracting JSON data
      .then((data) => {
        console.log(data);
        setBlogs(data.blog);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className=" flex justify-center mt-36">
        <div className=" w-2/3">
          <div className="flex m-auto justify-between w-2/3">
            <Breadcrumbs />
          </div>
          {Array.isArray(blogs) ? (
            blogs.map((blog) => {
              return (
                <h1 className="text-white m-auto w-2/3">{blog.headline}</h1>
              );
            })
          ) : (
            <h2>nada</h2>
          )}

          <div className="flex mt-5 m-auto justify-between w-2/3">
            <div className="flex">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                {Array.isArray(blogs) ? (
                  blogs.map((blog) => {
                    return (
                      <>
                        <p className="text-white font-bold m-0 text-lg">
                          {blog.user}
                        </p>
                        <p className="text-base text-gray-500">
                          {blog.published_date}
                        </p>
                      </>
                    );
                  })
                ) : (
                  <h2>nada</h2>
                )}
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
              {Array.isArray(blogs) ? (
                blogs.map((blog) => {
                  // Split the blog body text into paragraphs based on line breaks
                  const paragraphs = blog.body.split("\n\n");

                  // Map over the paragraphs and return a <p> element for each
                  return (
                    <div key={blog.id}>
                      {paragraphs.map((paragraph, index) => (
                        <>
                          <p className="mb-5" key={index}>
                            {paragraph}
                          </p>
                          <img
                            className="w-full md:h-auto mb-5 rounded-2xl"
                            src="https://wallpapercave.com/wp/wp58250.jpg"
                            alt=""
                          />
                        </>
                      ))}
                    </div>
                  );
                })
              ) : (
                <h2>nada</h2>
              )}
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
