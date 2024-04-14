import React, { useEffect, useState } from "react";
import NavbarMenu from "../pagination/pagination";
import Pagination from "../pagination/pagination";

function Blogs(params) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/blogsHome`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //extracting JSON data
      .then((data) => {
        /* console.log(data); */
        setBlogs(data.blog);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const nPage = Math.ceil(blogs.length / postsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

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
        <div className="md:grid md:grid-cols-2 gap-14 pt-16 m-auto">
          {Array.isArray(blogs) ? (
            currentPosts./* slice(0, 6). */ map((d, i) => {
              return (
                <>
                  <div className="mt-7">
                    <div id="homeCard" className="rounded-xl" key={i}>
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
                            {d.category_name}
                          </button>
                        </div>
                        <div className="font-bold text-xl mb-2">{d.title}</div>
                        <p className="text-gray-700 text-base">{d.headline}</p>
                        <div className="flex mt-11">
                          <img
                            className="w-16 h-16 rounded-full mr-4"
                            src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                            alt="Avatar of Jonathan Reinink"
                          />
                          <div className="text-sm">
                            <p className="text-white font-bold m-0 text-lg">
                              {d.user}
                            </p>
                            <p className="text-base text-gray-500">
                              {d.published_date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h2>nada</h2>
          )}
        </div>
        <div className="flex justify-center items-center m-16">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
                onClick={prePage}
              >
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  n === currentPage ? "active:bg-violet-700" : ""
                }`}
                key={i}
                onClick={() => changeCPage(n)}
              >
                <a>{n}</a>
              </li>
            ))}

            <li>
              <a
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
                onClick={nextPage}
              >
                next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
      console.log("next", currentPage);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    console.log(currentPage);
    setCurrentPage(id);
  }
}

export default Blogs;
