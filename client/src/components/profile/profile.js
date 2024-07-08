import React, { useState, useRef, useEffect } from "react";
import useFetchImages from '/home/aleortbas/Documents/Mern-blog/client/src/hooks/useFetchLoader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faX, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useUserId } from "../../User.Context";

function Profile() {
  const [isShowBlogForm, setBlogForm] = useState(false);
  const [userData, setUserData] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/profileData`, {
      method: "GET",
      headers: {
        "Content-Type": "appplication/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.blog);
        console.log("userblog", userData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    setBlogForm(false);
  };

  const handleClose = () => {
    setBlogForm(false);
  };

  const featureBlogs = userData.slice(0, 6);
  const userPhoto = userData.slice(0, 1);
  const imagen = userPhoto;
  console.log("IMAGE", imagen[0]);

  return (
    <>
      <div className="container mt-36 w-fit m-auto" id="profile">
        <a
          href="#"
          id=""
          className="flex flex-colbg-[#101828]  no-underline md:flex-row"
        >
          <div className="px-8 py-8 md:w-3/6">
            {Array.isArray(userData) ? (
              userPhoto.map((userBlogs) => {
                return (
                  <>
                    <div id="imgCard">
                      <img
                        className="w-full md:h-auto rounded-2xl"
                        src="https://c4.wallpaperflare.com/wallpaper/580/201/241/clouds-the-plane-liner-flight-wallpaper-preview.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div className="py-4">
                      <button
                        id="loginButton"
                        className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer mt-3"
                      >
                        {userBlogs.username}
                      </button>
                    </div>
                  </>
                );
              })
            ) : (
              <h2>Nada</h2>
            )}
          </div>
          <div className="flex flex-col md:w-3/6 p-4">
            <div className="">
              <span className="text-xl text-gray-500 mr-9">
                Popular repositories
              </span>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4 pt-4">
              {Array.isArray(userData) ? (
                featureBlogs.map((userBlogs) => {
                  return (
                    <div id="profileCard" className="rounded-xl w-56">
                      <div className="px-6 pb-4">
                        <div className="font-bold text-xl mb-2 p-3">
                          {userBlogs.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>Nada</h2>
              )}
            </div>
          </div>
        </a>
      </div>
      <div className="w-fit m-auto">
        <button
          id="loginButton"
          className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-56 rounded-[50px] cursor-pointer mt-3"
          onClick={() => setBlogForm(!isShowBlogForm)}
        >
          New Post
        </button>
      </div>
      <div>{isShowBlogForm && <Box onClose={() => handleClose(true)} />}</div>
    </>
  );
}

function Box({ onClose }) {
  const [isShowBlogForm, setBlogForm] = useState(true);
  const inputImage = useRef(null);
  const [title, setTitle] = useState(null);
  const [headline, setHeadline] = useState(null);
  const [body, setBody] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  const [files, setFiles] = useState([]);

  /*  const user_id = localStorage.getItem("userId"); */
  const user_id = parseInt(useUserId());

  var file;

  useEffect(() => {
    fetch(`http://localhost:5000/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "appplication/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategoryId(data.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  const packFiles = (files) => {
    const data = new FormData();
    [...files].forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });
  };

  const renderFileList = () => (
    <div className="flex">
      {[...files].slice(0, 3).map((f, i) => {
        file = f;
        const image = URL.createObjectURL(f);
        return (
          <l className="text-black" key={i}>
            {/* {f.name} - {f.type} */}
            <img className="h-20 w-20" src={image} />
          </l>
        );
      })}
    </div>
  );

  const handleClose = () => {
    setBlogForm(false);
    onClose();
  };

  const handleSubmitPostBlog = async (e) => {
    console.log("category", categoryName);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user_id);
    formData.append("titleT", title);
    formData.append("headlineT", headline);
    formData.append("body", body);
    formData.append("category_id",categoryName)
    try {
      const response = await fetch(`http://localhost:5000/uploadImage`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log("datos", data);
        alert("Blog posted");
        handleClose();
      } else {
        console.error("Error else:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error catch:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm flex items-center justify-center">
      <div className="w-[800px] h-auto bg-white rounded-xl">
        <div className="flex p-4">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-500 font-bold m-0 text-lg">blog.user</p>
            <p className="text-base text-gray-500">blog.published_date</p>
          </div>
          <div className="ml-auto">
            <button onClick={handleClose}>
              <FontAwesomeIcon className="text-black" size="xl" icon={faX} />
            </button>
          </div>
        </div>

        <div className="justify-center p-4">
          <form onSubmit={handleSubmitPostBlog}>
            <input
              className="w-full m-1 p-1"
              placeholder="Title"
              name="title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <textarea
              //rows={textareaRows}
              rows="3"
              className="bg-transparent w-full outline-none text-black resize-none border-t m-1"
              type="text"
              placeholder="Type your message..."
              name="feedback"
              onChange={(e) => setHeadline(e.target.value)}
              required
            ></textarea>
            <textarea
              //rows={textareaRows}
              rows="10"
              className="bg-transparent w-full outline-none text-black resize-none border-t m-1"
              type="text"
              placeholder="Type your message..."
              name="feedback"
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
            <div className="justify-start  border-t">
              <input
                className="hidden"
                ref={inputImage}
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setFiles(e.target.files)}
                multiple
              />
              {renderFileList()}
              <button
                className="bg-[#101828] text-white text-center font-semibold h-11 w-11 mr-2 rounded-full cursor-pointer z-10"
                onClick={(e) => {
                  e.preventDefault();
                  inputImage.current.click();
                }}
              >
                <FontAwesomeIcon
                  className="text-white"
                  size="sm"
                  icon={faImage}
                />
              </button>
              {Array.isArray(categoryId) && categoryId.length > 0 ? (
                <select className="bg-[#101828] text-white text-center font-semibold  h-11  w-32 mr-2 mt-4 rounded-full  cursor-pointer" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
                  {categoryId.map((categoriesValues) => (
                    <option
                      key={categoriesValues.category_id}
                      value={categoriesValues.category_id}
                    >
                      {categoriesValues.name}
                    </option>
                  ))}
                </select>
              ) : (
                <h2>Loading...</h2>
              )}
              <button className="bg-[#101828] text-white text-center font-semibold  h-11  w-32 mr-2 mt-4 rounded-full  cursor-pointer">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
