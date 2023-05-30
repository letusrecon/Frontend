import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
export default function Nav({onClickHandler}) {
  
  return (
    <nav className="bg-[#5ba2b2] md:hidden lg:hidden  py-0 px-4 flex justify-between">
      <Image
        src="/assets/logo-removebg-preview.png"
        width="50"
        height="40"
        alt="LetUsRecon"
        className="h-20 w-20"
      />
      <div className="">
        <FontAwesomeIcon
          onClick={onClickHandler}
          className="text-slate-300 text-xl mt-8"
          icon={faBars}
        />
      </div>
    </nav>
  ); 
}
