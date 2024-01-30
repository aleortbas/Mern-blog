import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faX } from "@fortawesome/free-solid-svg-icons";

function Profile({ onClose }) {
  const [isShowBlogForm, setBlogForm] = useState(true);

  const handleClick = () => {
    setBlogForm(false);
  };

  const handleClose = () => {
    setBlogForm(false);
    onClose();
  };

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
                className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-auto rounded-[50px] cursor-pointer mt-3"
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
          className="bg-[#101828] text-white font-semibold px-4 py-1 h-10 w-56 rounded-[50px] cursor-pointer mt-3"
          onClick={() => setBlogForm(!isShowBlogForm)}
        >
          New Post
        </button>
      </div>
      <div>{isShowBlogForm && <Box onClose={() => handleClose(false)} />}</div>
    </>
  );
}

function Box({ onClose }) {
  const [isShowBlogForm, setBlogForm] = useState(true);
  const inputImage = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const textareaRows = selectedImage ? 10 : 22; // CONDICIONAL

  const handleClick2 = () => {
    // 👇️ open file input box on click of another element
    inputImage.current.click();
  };

  const handleImage = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    setSelectedImage(URL.createObjectURL(fileObj));
    if (!fileObj) {
      return;
    }
    event.target.value = null;
    console.log(fileObj);
    console.log(fileObj.name);
  };

  const handleClose = () => {
    setBlogForm(false);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm flex items-center justify-center">
      <div className="w-[800px] h-[750px] bg-white rounded-xl">
        <div className="flex p-4">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-white font-bold m-0 text-lg">blog.user</p>
            <p className="text-base text-gray-500">blog.published_date</p>
          </div>
          <div className="ml-auto">
            <button onClick={handleClose}>
              <FontAwesomeIcon className="text-black" size="xl" icon={faX} />
            </button>
          </div>
        </div>

        <div className="justify-center p-4">
          <textarea
            rows={textareaRows}
            className="bg-transparent w-full outline-none text-black resize-none"
            type="text"
            placeholder="Type your message..."
            name="feedback"
            required
          ></textarea>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[300px]"
            />
          )}
        </div>
        <div className="justify-start p-4 border-t">
          <input
            className="absolute inset-0 opacity-0 cursor-pointer"
            ref={inputImage}
            type="file"
            onChange={handleImage}
          />
          <button
            className="bg-[#101828] text-white text-center font-semibold h-11 w-11 mr-2 rounded-full cursor-pointer"
            onClick={() => inputImage.current.click()} // Trigger click on input element when button is clicked
          >
            <FontAwesomeIcon className="text-white" size="sm" icon={faImage} />
          </button>
          <button className="bg-[#101828] text-white text-center font-semibold  h-11  w-32 mr-2 rounded-full  cursor-pointer">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
