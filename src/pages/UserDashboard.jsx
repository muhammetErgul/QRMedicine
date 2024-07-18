import React from "react";
import { Link } from "react-router-dom";
import { FaPoll, FaInfoCircle, FaCalendarAlt, FaList } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useTranslation } from "react-i18next";

const UserDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col mt-10 bg-gray-100">
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Link
            to="/anketler"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
          >
            <FaPoll className="text-4xl text-[#0A568C] mb-2" />
            <span className="text-xl font-semibold text-[#0A568C]">
              {t("survey-page")}
            </span>
          </Link>
          <Link
            to="/tanitim"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
          >
            <FaInfoCircle className="text-4xl text-[#0A568C] mb-2" />
            <span className="text-xl font-semibold text-[#0A568C]">
              {t("about-us")}
            </span>
          </Link>
          <a
            href="https://randevu.medicinehospital.com.tr/appointment.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
          >
            <FaCalendarAlt className="text-4xl text-[#0A568C] mb-2" />
            <span className="text-xl font-semibold text-[#0A568C]">
              {t("appointment")}
            </span>
          </a>
          <Link
            to="/listeler"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
          >
            <FaList className="text-4xl text-[#0A568C] mb-2" />
            <span className="text-xl font-semibold text-[#0A568C]">
              {t("info")}
            </span>
          </Link>
          <Link
            to="/listeler"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
          >
            <MdShoppingCartCheckout className="text-4xl text-[#0A568C] mb-2" />
            <span className="text-xl font-semibold text-[#0A568C]">
              {t("order-screen")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
