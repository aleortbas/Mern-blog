function NavigationMenu() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"></svg>
                <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 no-underline hover:duration-1000 hover:text-stone-400 mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 no-underline hover:duration-1000 hover:text-stone-400 mr-4">
                        Blog
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 no-underline  hover:duration-1000 hover:text-stone-400 mr-4">
                        Categories
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 no-underline  hover:duration-1000 hover:text-stone-400 mr-4">
                        About
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 no-underline  hover:duration-1000 hover:text-stone-400 ">
                        Contact
                    </a>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none shadow-[4.0px_8.0px_8.0px_rgba(29,78,216,0.38)] border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:duration-1000 hover:bg-blue-950 mt-4 lg:mt-0 ">Download</a>
                </div>
            </div>
        </nav>
    );
}

export default NavigationMenu;