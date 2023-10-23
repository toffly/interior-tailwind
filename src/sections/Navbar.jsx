import { useState } from "react";
import { logo, cartIcon } from "../assets";

import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full max-w-[1490px] py-10 mx-auto px-10 z-10">
      <img src={logo} alt="logo" />
      <div className="flex justify-center items-center">
        <ul className=" hidden md:flex flex-row gap-10 list-none">
          <li className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent">
            <a href="./">Services</a>
          </li>
          <li className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent">
            <a href="./">Shop</a>
          </li>
          <li className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent">
            <a href="./">Reference</a>
          </li>
          <li className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent">
            <a href="./">Care</a>
          </li>
        </ul>
        <img
          src={cartIcon}
          className="cursor-pointer ml-10 md:flex hidden"
          alt=""
        />

        <div className="flex md:hidden w-full">
          {toggle ? (
            <div className="block w-full fixed bg-[#dde0e5] h-[480px] shadow-xl z-10 py-8 px-12 rounded-b-xl top-0 left-0">
              <AiOutlineClose
                size={25}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => settoggle(false)}
              />
              <ul className="text-lg text-black w-full text-center pt-[60px] items-center flex flex-col gap-4">
                <li className="hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full py-4">
                  <a href="./">Services</a>
                </li>
                <li className="hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full py-4">
                  <a href="./">Shop</a>
                </li>
                <li className="hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full py-4">
                  <a href="./">Reference</a>
                </li>
                <li className="hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full py-4">
                  <a href="./">Care</a>
                </li>
                <img src={cartIcon} className="cursor-pointer" alt="" />
              </ul>
            </div>
          ) : (
            <HiMenuAlt3
              size={30}
              className="block md:hidden cursor-pointer text-white"
              onClick={() => settoggle((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
