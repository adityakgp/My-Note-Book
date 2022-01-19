import React from 'react'
import { Link} from "react-router-dom";
// import { useLocation } from "react-router-dom";
  

const Navbar = () => {
    // let location = useLocation();
    return (
        <div>
            <header className="text-gray-600 body-font" >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     {/* eslint-disable-next-line */}
    <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> 
      <span className="ml-3 text-2xl">MyNoteBook</span>
    </a >
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-white text-lg text-black bg-white-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded" to="/">Home</Link >
      <Link className="mr-5 hover:text-white text-lg text-black bg-white-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded" to="about/">About</Link >
      <Link to="/login" className="mr-5 hover:text-white text-lg text-black bg-white-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded" >Login</Link >
      <Link to="/signup" className="mr-5 hover:text-white text-lg text-black bg-white-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded" >Sign Up</Link >
    </nav>
  </div>
</header>
        </div>
    )
}

export default Navbar
