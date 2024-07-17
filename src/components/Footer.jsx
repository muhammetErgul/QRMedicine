import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0A568C] text-white py-10 px-5 w-full opacity-90 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className="mb-8 lg:mb-0 w-full lg:w-1/3">
          <h1 className="text-3xl font-bold">Atlas Üniversitesi Medicine Hastanesi</h1>
        
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <MdPhone className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>444 0 205</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MdEmail className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:info@medicinehospital.com.tr">
                  info@medicinehospital.com.tr
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MdLocationOn className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>
                  Barbaros Mah, H. Ahmet Yesevi Cad, No: 149 Güneşli - Bağcılar
                  / İstanbul
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
