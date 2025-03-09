import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa'; // Import icons from react-icons

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-2 bg-transparent border-none text-white cursor-pointer hover:text-gray-300 ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center space-x-2 bg-transparent border-none text-white cursor-pointer hover:text-gray-300 ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          <FaInfoCircle className="text-xl" />
          <span>About</span>
        </NavLink>
        <NavLink
          to="/icon"
          className={({ isActive }) =>
            `flex items-center space-x-2 bg-transparent border-none text-white cursor-pointer hover:text-gray-300 ${
              isActive ? 'font-bold' : ''
            }`
          }
        >
          <span role="img" aria-label="icon" className="text-xl">⭐</span>
          <span>Icon</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;