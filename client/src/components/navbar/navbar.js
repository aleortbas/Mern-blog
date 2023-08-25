import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function NavbarMenu() {

    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-[#101828] py-4 md:px-10 px-7'>
                    <div>
                        {/* logo section */}
                        <div className='text-white text-2xl cursor-pointer flex justify-start items-center gap-1'>
                            <span>Inscribe</span>
                        </div>
                    </div>

                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-0 top-6 cursor-pointer md:hidden w-7 h-7 mr-3'>
                        {
                            open ? <FontAwesomeIcon size="sm" icon={faX} /> : <FontAwesomeIcon size="lg" icon={faBars} />

                        }
                    </div>

                    <div className=""> {/* linke items */}
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#101828] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                            {
                                Links.map((link) => (
                                    <li className='md:ml-8 md:my-0 my-7 '>
                                        <a href={link.link} className='text-[#fff] no-underline hover:text-gray-500 duration-500'>{link.name}</a>
                                    </li>))
                            }
                        </ul>
                        {/* button */}
                    </div>
                    <div className="ml-20">
                        <button id="loginButton" className='bg-[#101828] text-white font-semibold px-3 py-1 h-10 w-24 rounded absolute right-16 top-6 cursor-pointer'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarMenu;