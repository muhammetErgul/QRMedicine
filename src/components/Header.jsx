import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Telefon ikonu için react-icons kullanılabilir
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#0A568C] text-white flex flex-col md:flex-row items-center justify-between py-6 px-4 hidden md:flex">
      <Link to="/" className="flex items-center mb-2 md:mb-0">
        <p className="italic text-lg">1998'den bu yana...</p>
      </Link>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <button className="bg-white text-blue-800 rounded py-1 px-3 w-full md:w-auto">
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 11-9 9 9.01 9.01 0 019-9m0-1a10 10 0 1010 10A10 10 0 0012 2z"></path>
              <path d="M10 17h4v-2h-4zM10 13h4V7h-4z"></path>
            </svg>
            Medicine TV
          </span>
        </button>
        <button className="bg-white text-blue-800 rounded py-1 px-3 w-full md:w-auto">
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 00-3.72 19.31c.29.06.4-.12.4-.28s0-.5 0-1c-1.45.32-1.75-.7-1.75-.7a1.38 1.38 0 00-.57-.75c-.48-.32 0-.32.06-.32a1.11 1.11 0 01.84.56 1.17 1.17 0 001.56.46 1.17 1.17 0 01.35-.7c-1.15-.14-2.35-.58-2.35-2.55a2 2 0 01.53-1.39 1.91 1.91 0 01.05-1.37s.44-.14 1.45.55a5 5 0 012.64 0c1-.69 1.45-.55 1.45-.55a1.91 1.91 0 01.05 1.37 2 2 0 01.53 1.39c0 2-1.2 2.41-2.35 2.55a1.31 1.31 0 01.37 1s0 .78 0 1c0 .16.1.34.41.28A10 10 0 0012 2z"></path>
            </svg>
            Üniversitemiz
          </span>
        </button>
        <button className=" text-white rounded py-1 px-3 w-full md:w-auto">
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 22a10 10 0 1110-10 10 10 0 01-10 10zm-.5-17h1v6h-1zm1 8h-1v1h1z"></path>
            </svg>
            International Patients
          </span>
        </button>
      </div>
      <div className="flex items-center mt-2 md:mt-0">
        <FaPhone className="mr-2" />
        <span>444 0 205</span>
      </div>
    </header>
  );
}

export default Header;
