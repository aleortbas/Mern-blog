import React from "react";

function Home() {
  return (
    <div className="container mt-36 m-auto">
      {/** feature line */}
      <div className="flex items-center py-4">
        <span className="flex-shrink text-2xl text-gray-500 mr-9">
          FEATURED BLOG
        </span>
        <div className="flex-grow h-[0.5px] bg-gray-400"></div>
      </div>
      {/** feature blog */}

      <a
        href="/postBlog"
        id="homeCard"
        className="flex flex-col items-center bg-[#101828] rounded-xl no-underline my-16 md:flex-row "
      >
        <div className="px-8 py-8 md:w-3/6">
          <div id="imgCard">
            <img
              className="w-full md:h-auto rounded-2xl"
              src="https://wallpapercave.com/wp/wp58250.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-3/6 p-4 leading-normal">
          <div className="py-4">
            <button
              id="loginButton"
              className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-24 rounded-[50px] cursor-pointer"
            >
              Login
            </button>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            From Fashion to Function: The Latest Trends in Smartwatch Design
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>

      <a
        href="#"
        id="homeCard"
        className="flex flex-col items-center bg-[#101828] rounded-xl no-underline md:flex-row "
      >
        <div className="px-8 py-8 md:w-3/6">
          <div id="imgCard">
            <img
              className="w-full md:h-auto rounded-2xl"
              src="https://c4.wallpaperflare.com/wallpaper/580/201/241/clouds-the-plane-liner-flight-wallpaper-preview.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-3/6 p-4 leading-normal">
          <div className="py-4">
            <button
              id="loginButton"
              className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-24 rounded-[50px] cursor-pointer"
            >
              Login
            </button>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            From Fashion to Function: The Latest Trends in Smartwatch Design
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>

      {/** latest blog */}
      <div className="flex items-center pt-36">
        <span className="flex-shrink text-2xl text-gray-500 mr-9">
          LATEST BLOG
        </span>
        <div className="flex-grow h-[0.5px] bg-gray-400"></div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-14 pt-16">
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
                  className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-24 rounded-[50px] cursor-pointer"
                >
                  Login
                </button>
              </div>
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="flex mt-11">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-white font-bold m-0 text-lg">
                    Jonathan Reinink
                  </p>
                  <p className="text-base text-gray-500">Aug 18 • 5 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-24 rounded-[50px] cursor-pointer"
                >
                  Login
                </button>
              </div>
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="flex mt-11">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-white font-bold m-0 text-lg">
                    Jonathan Reinink
                  </p>
                  <p className="text-base text-gray-500">Aug 18 • 5 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-24 rounded-[50px] cursor-pointer"
                >
                  Login
                </button>
              </div>
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="flex mt-11">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-white font-bold m-0 text-lg">
                    Jonathan Reinink
                  </p>
                  <p className="text-base text-gray-500">Aug 18 • 5 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-24 rounded-[50px] cursor-pointer"
                >
                  Login
                </button>
              </div>
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="flex mt-11">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-white font-bold m-0 text-lg">
                    Jonathan Reinink
                  </p>
                  <p className="text-base text-gray-500">Aug 18 • 5 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
