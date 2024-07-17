import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#0A568C] text-white p-8 w-full opacity-90 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className="space-y-4 mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold">DR. Lorem, ipsum dolor.</h1>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★★</span>
            <a href="https://www.provenexpert.com" className="text-gray-400 hover:underline">
              8079 Reviews on ProvenExpert.com
            </a>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="https://youtube.com" className="hover:text-gray-400"><FaYoutube /></a>
          </div>
        </div>
        <div className="space-y-2 mb-8 lg:mb-0">
          <a href="#about" className="block hover:underline">Hakkımızda</a>
          <a href="#hair-transplant" className="block hover:underline">Saç Ekimi</a>
          <a href="#hair-transplant-turkey" className="block hover:underline">Saç Ekimi Türkiye</a>
        
        </div>
        <div className="space-y-4">
         
          <div className="flex items-start space-x-2">
            <MdPhone className="text-2xl mt-1" />
            <div>
              <h2 className="font-bold">TELEFON</h2>
              <p>+90 111 111 11 11</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <MdEmail className="text-2xl mt-1" />
            <div>
              <h2 className="font-bold">E-POSTA</h2>
              <p>info@test.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
