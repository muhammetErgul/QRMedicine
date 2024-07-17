import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0A568C] text-white py-10 px-5 w-full opacity-90 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className="mb-8 lg:mb-0 w-full lg:w-1/3">
          <h1 className="text-3xl font-bold">DR. Lorem, ipsum dolor.</h1>
          <div className="flex items-center space-x-1 mt-4">
            <span className="text-yellow-400">★★★★★</span>
            <a
              href="https://www.provenexpert.com"
              className="text-gray-400 hover:underline"
            >
              8079 Reviews on ProvenExpert.com
            </a>
          </div>
          <div className="flex space-x-4 text-2xl mt-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="hover:text-gray-400">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="mb-8 lg:mb-0 w-full lg:w-1/3">
          <h2 className="font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <MdPhone className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+90 111 111 11 11</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MdEmail className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>info@test.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MdLocationOn className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>123 Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.pratikbilisim.medicine"
              target="_blank"
            >
              <img
                src="./playstore-tr.webp"
                alt="Google Play Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-6 text-center">
        <p className="text-sm">&copy; 2024 DR. Lorem, ipsum dolor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
