import React from "react";
import ReactTyped from "./Typing";
import "./Home.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Details, icons } from "../constants/contents";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto p-7">
      {/* Desktop view */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 items-center">
        <div className="flex flex-col gap-y-6 text-2xl">
          {icons.map((icn) => (
            <a
              key={icn.key}
              href={icn.link}
              className="flex justify-center items-center"
            >
              {icn.icon}
            </a>
          ))}
        </div>

        <div className="text-content flex flex-col items-start col-span-2">
          <h1 className="text-5xl font-semibold">{Details.name}</h1>
          <div className=" flex items-center">
            <p className="text-lg mt-2">I'm a&nbsp;</p>
            <p className="text-lg mt-2"> <ReactTyped  /></p>
          </div>



          <p className="mt-2">{Details.quotes}</p>

          <a
            href="/Sam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-5 bg-black text-white"
          >
            Download Resume <IoDocumentTextOutline />
          </a>
        </div>

        <div className="blob"></div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden max-w-screen mx-auto p-5">
        <div className="grid grid-cols-1 items-center gap-4">
          {/* Blob */}
          <div className="blob flex justify-center items-center mt-5 mb-5">
            {/* Add your blob content here */}
          </div>

          {/* Icons in a single row */}
          <div className="flex justify-center items-center gap-4">
            {icons.map((icn) => (
              <a
                key={icn.key}
                href={icn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center text-4xl"
              >
                {icn.icon}
              </a>
            ))}
          </div>

          {/* Text content */}
          <div className="text-content flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold">{Details.name}</h1>
            <div className=" flex items-center">
            <p className="text-lg mt-2">I'm a&nbsp;</p>
            <p className="text-lg mt-2"> <ReactTyped  /></p>
          </div>
            <p className="mt-4">{Details.quotes}</p>

            <a
              href="\Sam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sam_Joshua_Resume.pdf"
              className="flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-8 bg-black text-white"
            >
              Download Resume <IoDocumentTextOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
