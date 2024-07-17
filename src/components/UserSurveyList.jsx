import React from "react";
import { FaLink } from "react-icons/fa";


function SurveyList() {
  const surveys = [
    {
      id: 31,
      department: "DENEME ANKETİ SİLİN",
      title: "DENEYİM ANKETİ",
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/31"
    },
    { 
      id: 36, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
    { 
      id: 37, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
    { 
      id: 38, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
    { 
      id: 39, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
    { 
      id: 40, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
    { 
      id: 41, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
    { 
      id: 42, 
      department: "sdfafs", 
      title: "asfasdfd", 
      type: "DİĞER ANKETLER",
      link: "https://example.com/survey/36" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
    <div className="w-full max-w-4xl overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#0A568C] text-white">
          <tr>
            <th className="px-4 py-2 text-left">Anket No</th>
            <th className="px-4 py-2 text-left">Anket Başlık</th>
            <th className="px-4 py-2 text-left">Anket Tipi</th>
            <th className="px-4 py-2 text-center">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey) => (
            <tr
              key={survey.id}
              className="even:bg-gray-50 hover:bg-blue-100 hover:shadow-lg transition duration-300"
            >
              <td className="border-t px-4 py-2">{survey.id}</td>
              <td className="border-t px-4 py-2">{survey.title}</td>
              <td className="border-t px-4 py-2">{survey.type}</td>
              <td className="border-t px-4 py-2 text-center">
                <a
                  href={survey.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 flex justify-center items-center"
                >
                  <FaLink size={24} className="mr-2" />
                  <span>Anket Linki</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default SurveyList;