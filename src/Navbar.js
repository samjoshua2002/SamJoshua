import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { Links } from "./constants/contents";
import { Details } from "./constants/contents";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-slate-100  top-0 left-0 w-full cursor-pointer  md:static">
        <div className="lg:px-10 py-4 ml-10 mr-10 flex justify-between items-center">
          <div className="text-slate-900 text-2xl  lg:text-3xl font-semibold">
            {Details.name}
          </div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <button className="text-slate-900">
              {open ? (
                <IoIosCloseCircleOutline className="text-2xl" />
              ) : (
                <AiOutlineMenu />
              )}
            </button>
          </div>

          <div className="hidden md:flex">
            <ul className="flex text-slate-900 gap-5">
              {Links.map((link, index) => (
                <li key={index} className="hover:text-slate-950">
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset to position the section correctly after scrolling
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <ul className="flex flex-col text-slate-900 gap-4 p-4">
              {Links.map((link, index) => (
                <li key={index} className="hover:text-slate-950">
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset for mobile view as well
                    onClick={() => setOpen(false)} // Close menu after clicking
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
