import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
          <span className="text-2xl font-medium pl-2"><i className="em em-grinning" /> Resiklo</span>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleNavbar()}
          id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 ` + (navbar ? 'hidden' : null)}
        id="nav-content">
        <ul className="list-reset lg:flex justify-start flex-1 items-center">
          <li className="mr-3 ml-auto">
            <a className="inline-block text-white no-underline hover:text-gray-300 hover:text-underline text-2xl py-2 px-4" href="#">Home</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-white no-underline hover:text-gray-300 hover:text-underline text-2xl py-2 px-4" href="#">Market</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-white no-underline hover:text-gray-300 hover:text-underline text-2xl py-2 px-4" href="#">FAQs</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-white no-underline hover:text-gray-300 hover:text-underline text-2xl py-2 px-4" href="#">Education</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-white no-underline hover:text-gray-300 hover:text-underline text-2xl py-2 px-4" href="#">Contact Us</a>
          </li>
          <li className="mr-3 ml-auto">
            <a className="inline-block text-white no-underline hover:text-gray-300 hover:text-underline text-2xl py-2 px-4" href="#">Log In</a>
          </li>
          <li className="mr-3 ">
            <a className="inline-block text-white no-underline bg-secondary rounded-[20px] uppercase hover:text-black hover:bg-white py-2 px-4" href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Header