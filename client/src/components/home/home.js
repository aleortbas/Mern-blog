import React, { useEffect, useState } from "react";
import useFetchImages from "/home/aleortbas/Documents/Mern-blog/client/src/hooks/useFetchLoader";

function Home() {
  const [featureBlogs, setFeatureBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [filePathUserFeature, setfilePathUserFeature] = useState("");
  const [filePathUserLatest, setFilePathUserLatest] = useState("");
  const [userImage, setUserImage] = useState("");
  const [pruebas, setPruebas] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/featureBlogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //extracting JSON data
      .then((data) => {
        setFeatureBlogs(data.blog);
        setfilePathUserFeature(data.images)
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/latestBlogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) //extracting JSON data
      .then((data) => {
        setLatestBlogs(data.blog);
        setFilePathUserLatest(data.images)
        setUserImage()
      })
      .catch((error) => console.log(error));
  }, []);

  const featureBlogsAmount = featureBlogs.slice(0, 14);
  const popularityBlogs = latestBlogs.slice(0, 6);

  let imageUrl;

  /* const { imageBlog, imageUser } = useFetchImages(featureBlogs); */
  const imageBlog = "";
  const imageUser = "";

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
        {Array.isArray(featureBlogs) ? (
          featureBlogsAmount.map((featureBlogs,index) => {
            imageUrl = filePathUserFeature[index]
            console.log(featureBlogs);
            let element;
            for (let i = 0; i < filePathUserFeature.length; i++) {
              element = filePathUserFeature[index][0];
            }
            
            return (
              <>
                <a
                  href={`/postBlog/${featureBlogs.post_id}`}
                  id="homeCard"
                  className="flex flex-col items-center bg-[#101828] rounded-xl no-underline my-16 md:flex-row "
                >
                  <div className="px-8 py-8 md:min-w-min max-w-lg h-auto">
                    <div id="imgCard">
                     
                          <img
                            src={element}
                            className="w-auto h-auto"
                          />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:w-3/6 p-4 leading-normal">
                    <div className="py-4">
                      <button
                        id="loginButton"
                        className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer"
                      >
                        {featureBlogs.name}
                      </button>
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {featureBlogs.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {featureBlogs.headline}
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
        {Array.isArray(latestBlogs) ? (
          popularityBlogs.map((latestBlogs,index) => {
            let element;
            for (let i = 0; i < filePathUserLatest.length; i++) {
              element = filePathUserLatest[index][0];
            }
            return (
              <a href={`/postBlog/${latestBlogs.post_id}`}>
                <div className="mt-7">
                  <div id="homeCard" className="rounded-xl">
                    <div className="px-8 py-8 w-fit m-auto">
                      <div id="imgCard">
                          <img
                            className="w-auto md:max-h-max rounded-2xl"
                            src={element}
                            alt=""
                          />
                      </div>
                    </div>
                    <div className="px-6 pb-4">
                      <div className="py-3">
                        <button
                        id="loginButton"
                        className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer"
                      >
                        {latestBlogs.name}
                      </button>
                      </div>
                      <div className="font-bold text-xl mb-2">
                        {latestBlogs.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {latestBlogs.headline}
                      </p>
                      <div className="flex mt-11">
                          <img
                            className="w-16 h-16 rounded-full mr-4"
                            src={element}
                          />
                        <div className="text-sm">
                          <p className="text-white font-bold m-0 text-lg">
                            {latestBlogs.user}
                          </p>
                          <p className="text-base text-gray-500">
                            {latestBlogs.file_path}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
