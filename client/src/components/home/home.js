import React, { useEffect, useState } from "react";

function Home() {
  const [blogsByDate, setBlogsByDate] = useState([]);
  const [blogsByPopularity, setBlogsByPopularity] = useState([]);
  const [path, setFilePath] = useState("");
  const [imagenP, setImagenP] = useState({});
  const [pruebas, setPruebas] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/blogsHomeDate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //extracting JSON data
      .then((data) => {
        setBlogsByDate(data.blog);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/blogsHome`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //extracting JSON data
      .then((data) => {
        setBlogsByPopularity(data.blog);
      })
      .catch((error) => console.log(error));
  }, []);

  const featureBlogs = blogsByDate.slice(0, 6);
  const popularityBlogs = blogsByPopularity.slice(0, 6);

  useEffect(() => {

    let filePathPost, filePathUser = "";

    for (let i = 0; i < blogsByPopularity.length; i++) {
      const elementBlogs = blogsByPopularity[i];
      const splitPathPost = elementBlogs.file_path.split("/")
      const splitPathUser = elementBlogs.file_path_user.split("/")
      console.log("First FOR",splitPathPost[4])
      filePathPost = splitPathPost[4]
      /* console.log(filePathPost); */
      filePathUser = splitPathUser[4]
    }

    setFilePath(filePathPost);

    if (filePathPost) {
      fetch(`http://localhost:5000/uploads/${filePathPost}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.blob())
        .then((blob) => {
          const imageUrl = URL.createObjectURL(blob);
          setImagenP(imageUrl);
        })
        .catch((error) => console.log(error));
    }
  }, [blogsByPopularity]);

  function handleClick() {
    setPruebas(pruebas + 10);
  }

  return (
    <div className="container mt-20 m-auto">
      <div></div>
      {/** feature line */}
      <div className="flex items-center py-4">
        <span className="flex-shrink text-2xl text-gray-500 mr-9">
          FEATURED BLOG
        </span>
        <div className="flex-grow h-[0.5px] bg-gray-400"></div>
      </div>
      {/** feature blog */}

      <div>
        {Array.isArray(blogsByDate) ? (
          featureBlogs.map((blogsByDate) => {
            return (
              <>
                <a
                  href={`/postBlog/${blogsByDate.id_post}`}
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
                        className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer"
                      >
                        {blogsByDate.category_name}
                      </button>
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blogsByDate.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {blogsByDate.headline}
                    </p>
                  </div>
                </a>
              </>
            );
          })
        ) : (
          <h2>nada</h2>
        )}
      </div>

      {/** latest blog */}
      <div className="flex items-center pt-20">
        <span className="flex-shrink text-2xl text-gray-500 mr-9">
          LATEST BLOG
        </span>
        <div className="flex-grow h-[0.5px] bg-gray-400"></div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-14 pt-16">
        {Array.isArray(blogsByPopularity) ? (
          popularityBlogs.map((blogsByPopularity) => {
            return (
              <div className="mt-7">
                <div id="homeCard" className="rounded-xl">
                  <div className="px-8 py-8">
                    <div id="imgCard">
                      <img
                        className="w-full md:h-auto rounded-2xl"
                        src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
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
                        {blogsByPopularity.category_name}
                      </button>
                    </div>
                    <div className="font-bold text-xl mb-2">
                      {blogsByPopularity.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {blogsByPopularity.headline}
                    </p>
                    <div className="flex mt-11">
                      {imagenP && <img
                        className="w-16 h-16 rounded-full mr-4"
                        src={imagenP}
                        alt="Avatar of Jonathan Reinink"
                      />}
                      <div className="text-sm">
                        <p className="text-white font-bold m-0 text-lg">
                          {blogsByPopularity.user}
                        </p>
                        <p className="text-base text-gray-500">
                          {blogsByPopularity.file_path}
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
  );
}

export default Home;
