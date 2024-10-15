import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { shortDownArrowIcon, shortRightArrowIcon } from "../assets/icons";
import ButtonWithBg from "../components/buttons/ButtonWithBg";

const DocumentRow = ({ document, isActive, onToggle }) => (
  <div
    className={`rounded-lg flex items-center p-4 text-[10px] mb-2 overflow-x-auto ${
      isActive ? "bg-[rgba(136,112,255,0.1)]" : "bg-gray-50"
    }`}
  >
    <div className="w-[25%]">
      <span className="font-medium">{document.name}</span>
    </div>
    <div className="w-[40%] flex items-center">
      <div className="flex items-center space-x-2">
        <div
          className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer ${
            isActive ? "bg-[#8770ff]" : "bg-gray-300"
          }`}
          onClick={() => onToggle(document.id)}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              isActive ? "translate-x-4" : ""
            }`}
          ></div>
        </div>
        <a
          href={document.url}
          className="text-[#8770ff] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {document.url}
        </a>
      </div>
    </div>
    <div className="w-[35%] flex items-center">
      <span className="w-1/3 text-gray-500">{document.lastUpdated}</span>
      <button className="w-1/3 text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>
      <button className=" bg-[#8770ff] text-white px-4 py-2 rounded hover:bg-[#8870ffdc] w-full">
        Download
      </button>
    </div>
  </div>
);

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Privacy Policy",
      url: "https://itermmm...",
      lastUpdated: "01-17-2021",
      isActive: true,
    },
    {
      id: 2,
      name: "Terms & Condi...",
      url: "https://itermmm...",
      lastUpdated: "01-17-2021",
      isActive: true,
    },
    {
      id: 3,
      name: "Cookie Policy",
      url: "https://itermmm...",
      lastUpdated: "01-17-2021",
      isActive: false,
    },
    {
      id: 4,
      name: "Terms & Condi...",
      url: "https://itermmm...",
      lastUpdated: "01-17-2021",
      isActive: false,
    },
    {
      id: 5,
      name: "Cookie Policy",
      url: "https://itermmm...",
      lastUpdated: "01-17-2021",
      isActive: false,
    },
  ]);

  const toggleDocument = (id) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === id ? { ...doc, isActive: !doc.isActive } : doc
      )
    );
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl">Documents</h2>
        <div className="flex items-center">
          <span className="mr-1 text-[15px]">Select Your Website</span>
          <img src={shortDownArrowIcon} alt="short arrow" />
        </div>
        <ButtonWithBg text={"Create"} bgColor={"#8770ff"} />
      </div>
      <div className="overflow-x-auto">
        <div className="w-full">
          <div className="flex text-left text-gray-400 border-b mb-4 text-[13px] pb-2">
            <div className="w-[25%]">Document</div>
            <div className="w-[40%]">Active URL</div>
            <div className="w-[35%] flex">
              <span className="w-1/3 text-nowrap -ml-6">Last updated</span>
              {/* <span className="w-1/3 text-center ml-6">Edit</span> */}
              <span className="w-1/3 text-center ml-10">Download</span>
            </div>
          </div>
          {documents.map((doc) => (
            <DocumentRow
              key={doc.id}
              document={doc}
              isActive={doc.isActive}
              onToggle={toggleDocument}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 space-x-2 text-[12px]">
        <div className="rotate-[180deg]">
          <img src={shortRightArrowIcon} alt="" />
        </div>
        <span className="bg-gray-300 text-[#202020] w-5 h-5 flex items-center justify-center rounded-sm">
          1
        </span>
        <span className="text-[#202020]">2</span>
        <span className="text-[#202020]">3</span>
        <span className="text-[#202020]">...</span>
        <img src={shortRightArrowIcon} alt="right arrow" />
      </div>
    </div>
  );
};

DocumentManagement;

const Generate = () => {
  return (
    <main className="flex flex-col gap-6 w-full">
      <div className="bg-white rounded-lg shadow-xl px-4 py-8 flex flex-col  gap-2 items-start w-full">
        <h2 className="">
          Monitor & Manage <br /> Your Legal Documents
        </h2>

        <p className="text-[#646464] text-[10px]">
          Through our user-friendly dashboard
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-xl px-4 py-8 w-full">
        <DocumentManagement />
      </div>
    </main>
  );
};

export default Generate;
