import React from 'react'
import { Socials } from "@/constants";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="https://www.linkedin.com/in/mr-akhil-malvi-013a82282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="h-auto w-auto flex flex-row items-center">
        <Image
            src="/logo1.png"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[8px] hidden md:block text-gray-300">
           AKHIL MALVIYA
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="https://github.com/MrAkhilMalvi/" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;