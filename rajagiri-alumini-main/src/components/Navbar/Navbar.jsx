import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-black p-4 bg-white flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center ">
        <a href='/'>
          <img src="https://i.ibb.co/DfPV3LQ/Screenshot-2023-09-18-at-7-18-51-PM.png" alt="Logo" className="h-20 w-40" />
        </a>
      </div>

      <div className="flex-grow mx-16">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-6 rounded-md border border-slate-400 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-10 font-semibold uppercase">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">My Networks</li>
        <li className="hover:underline cursor-pointer">Jobs</li>
        <Link to='/chat'><li className="hover:underline cursor-pointer">Chats</li></Link>
        <div className="flex items-center space-x-2 ml-auto">
          <a href='/profile'><div className="bg-white rounded-full flex items-center justify-center">
            <img src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg" alt="User Icon" className="h-10 mx-3 -mt-2 rounded-lg w-10" />
          </div></a>
          <span className="text-white font-semibold">User Name</span>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
