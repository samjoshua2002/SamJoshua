import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Home.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import { Details, icons } from "../constants/contents";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Front-end Developer", "Software Engineer", "Coder"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true,
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      {/* Desktop view */}
      <motion.div
        className="hidden lg:grid lg:grid-cols-4 gap-6 items-center"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
          <p className="text-lg mt-2">
            I'm a <span className="auto-type"></span>
          </p>
          <p className="mt-2">{Details.quotes}</p>

          <a
            href="/Sam.pdf" // Correct path for a file in the 'public' folder
            target="_blank" // Opens the file in a new tab (optional, not necessary for download)
            rel="noopener noreferrer" // Security feature when using target="_blank"
            download // This ensures that the file is downloaded instead of opened
            className="flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-5 bg-black text-white"
          >
            Download Resume <IoDocumentTextOutline />
          </a>
        </div>

        <div className="blob"></div>
      </motion.div>

      {/* Mobile view */}
      <motion.div
        className="lg:hidden max-w-screen mx-auto p-5"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
            <p className="text-lg flex gap-2 mt-2">
              I'm a{" "}
              <Typewriter
                options={{
                  strings: ["Software Developer", "Front-end Designer", "Coder"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="mt-4">{Details.quotes}</p>

            <a
              href="/Sam.pdf" // Correct path for a file in the 'public' folder
              target="_blank" // Opens the file in a new tab (optional, not necessary for download)
              rel="noopener noreferrer" // Security feature when using target="_blank"
              download // This ensures that the file is downloaded instead of opened
              className="flex items-center gap-2 text-lg border border-black p-3 rounded-2xl mt-8 bg-black text-white"
            >
              Download Resume <IoDocumentTextOutline />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
