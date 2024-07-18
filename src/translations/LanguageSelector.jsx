import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { code: "tr", lang: "Türkçe", flag: "./turkey.png" },
  { code: "en", lang: "English", flag: "./united-kingdom.png" },
  { code: "ar", lang: "Arabic", flag: "./united-arab-emirates.png" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-28">
      <div
        className="block w-full p-3  flex items-center justify-center text-gray-700   rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
          
        <img
          src={langs.find((lang) => lang.code === i18n.language)?.flag}
          alt={`${langs.find((lang) => lang.code === i18n.language)?.lang} flag`}
          className="w-8 h-auto"
        />
       
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {langs.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={lang.flag}
                alt={`${lang.lang} flag`}
                className="w-6 h-auto"
              />
              <span className="text-gray-700">{lang.lang}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
