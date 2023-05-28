import React from 'react'
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {

    const FooterDate = ()=>{
      return  new Date().getFullYear()
    }
  return (
    <div className=" bg-[#232223] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center sm:justify-center md:justify-end lg:justify-end px-10 py-5 ">
      <div className="text-center sm:mb-3 mb-3 md:mb-0 lg:mb-0 text-slate-200 mr-9">
        <p className="text-md">
          {FooterDate()} LetUsRecon - All Rights Reserved
        </p>
      </div>

      <div className=" flex items-center justify-center ">
        <a href="https://twitter.com/LetusRecon " target="_blank">
          <FaTwitter className=" mr-2 text-slate-200 text-lg" />
        </a>
        <a c href=" https://www.instagram.com/letusrecon/ " target="_blank">
          <FaInstagram className="mr-2 text-slate-200 text-lg" />
        </a>

        <a href=" https://discord.gg/Wcg7T8hv" target="_blank">
          <FaDiscord className="text-slate-200 text-lg" />
        </a>
      </div>
    </div>
  );
}


