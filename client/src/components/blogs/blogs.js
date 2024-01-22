import React, { useEffect, useState } from "react";

function Blogs(params) {
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
      <div className="container mt-36 m-auto">
        <div className="flex">
          <button
            id="homeCard"
            className="bg-[#101828] text-white font-semibold m-3 px-4 py-1 h-11 sm:w-36 w-80 rounded-3xl cursor-pointer"
          >
            Subscribe
          </button>
          <button
            id="homeCard"
            className="bg-[#101828] text-white font-semibold m-3 px-4 py-1 h-11 sm:w-36 w-80 rounded-3xl cursor-pointer"
          >
            Subscribe
          </button>
          <button
            id="homeCard"
            className="bg-[#101828] text-white font-semibold m-3 px-4 py-1 h-11 sm:w-36 w-80 rounded-3xl cursor-pointer"
          >
            Subscribe
          </button>
          <button
            id="homeCard"
            className="bg-[#101828] text-white font-semibold m-3 px-4 py-1 h-11 sm:w-36 w-80 rounded-3xl cursor-pointer"
          >
            Subscribe
          </button>
          <button
            id="homeCard"
            className="bg-[#101828] text-white font-semibold m-3 px-4 py-1 h-11 sm:w-36 w-80 rounded-3xl cursor-pointer"
          >
            Subscribe
          </button>
        </div>
        <div className="md:grid md:grid-cols-2 gap-14 pt-16">
          {Array.isArray(blogs) ? (
            blogs.map((blog) => {
              return (
                <div className="mt-7">
                  <div id="homeCard" className="rounded-xl">
                    <div className="px-8 py-8">
                      <div id="imgCard">
                        <img
                          className="w-full md:h-auto rounded-2xl"
                          src="https://c4.wallpaperflare.com/wallpaper/580/201/241/clouds-the-plane-liner-flight-wallpaper-preview.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="px-6 pb-4">
                      <div className="py-3">
                        <button
                          id="imgCard"
                          className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer"
                        >
                          {blog.category_name}
                        </button>
                      </div>
                      <div className="font-bold text-xl mb-2">{blog.title}</div>
                      <p className="text-gray-700 text-base">{blog.headline}</p>
                      <div className="flex mt-11">
                        <img
                          className="w-16 h-16 rounded-full mr-4"
                          src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                          alt="Avatar of Jonathan Reinink"
                        />
                        <div className="text-sm">
                          <p className="text-white font-bold m-0 text-lg">
                            {blog.user}
                          </p>
                          <p className="text-base text-gray-500">
                            {blog.published_date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>nada</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Blogs;
