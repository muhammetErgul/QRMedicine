import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbWorldCode } from "react-icons/tb";
import LanguageSelector from "../translations/LanguageSelector";

function Header() {
  return (
    <header className="bg-[#0A568C] text-white py-4 px-4 md:px-8 flex flex-wrap items-center justify-center relative mb-3">
      <div className="absolute top-4 right-0">
        <LanguageSelector />
      </div>
      {/* Logo */}
      <div className="flex items-center  mx-auto space-x-4">
        <Link to="/" className="flex items-center">
          <img
            src="/cv-logo.webp"
            width={50}
            height={50}
            alt="Logo"
            className="mr-2"
          />
        </Link>
      </div>

      <div className="md:hidden absolute top-16 left-0 w-full bg-[#0A568C] flex  flex-col items-center space-y-4 py-4">
        <div className="flex items-center space-x-4">
          <a
            href="https://medicinehospital.com.tr/"
            className="hover:text-gray-400 text-2xl"
            target="_blank"
          >
            <TbWorldCode />
          </a>
          <a
            href="https://www.facebook.com/medicinehospital.com.tr"
            className="hover:text-gray-400 text-2xl"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/medicinehospital/"
            className="hover:text-gray-400 text-2xl"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/medicinehospital"
            className="hover:text-gray-400 text-2xl"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/@MedicineHospitalTurkey"
            className="hover:text-gray-400 text-2xl"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pratikbilisim.medicine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./app.png" alt="Google Play Store" className="h-7" />
          </a>
          <a
            href="https://apps.apple.com/tr/app/medicine-hospital-mobil/id6471742134?l=tr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./app-store.png" alt="App Store" className="h-7" />
          </a>
          <a href="tel:4440205" className="flex items-center space-x-2">
            <FaPhone className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
