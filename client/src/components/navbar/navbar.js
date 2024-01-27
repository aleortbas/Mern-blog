import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee, faL, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Login from "../login/login";

function NavbarMenu() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "BLOG'S", link: "/blogs" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token !== null) {
      setLoggedIn(false);
    }
  }, [token]);
  if (token != null) {
    Links.splice(2, 0, { name: "PROFILE", link: "/profile" });
  }

  const closeLoginModal = () => {
    setLogin(false);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-[#101828] py-4 md:px-10 px-7">
          <div>
            {/* logo section */}
            <div className="text-white text-2xl cursor-pointer flex justify-start items-center gap-1">
              <span>TECH BLOG</span>
            </div>
          </div>

          {/* Menu icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen, console.log(menuOpen))}
            className="absolute right-0 top-6 cursor-pointer md:hidden w-7 h-7 mr-3"
          >
            {menuOpen ? (
              <FontAwesomeIcon className="text-white" size="sm" icon={faX} />
            ) : (
              <FontAwesomeIcon className="text-white" size="lg" icon={faBars} />
            )}
          </div>

          <div className="">
            {" "}
            {/* linke items */}
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#101828] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
                menuOpen ? "top-12" : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li className="md:ml-8 md:my-0 my-7 text-center">
                  <a
                    href={link.link}
                    className="text-[#fff] no-underline hover:text-gray-500 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* button */}
          </div>
          <div className="ml-20">
            {loggedIn ? (
              <button
                id="loginButton"
                className="bg-[#101828] text-white font-semibold px-3 py-1 h-10 w-24 rounded-[50px] absolute right-16 top-6 cursor-pointer"
                onClick={() => setLogin(!login)}
              >
                Login
              </button>
            ) : (
              <div className="flex">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png"
                  alt="Avatar of Jonathan Reinink"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {login ? <Login onClose={closeLoginModal} /> : null}
    </>
  );
}
export default NavbarMenu;
