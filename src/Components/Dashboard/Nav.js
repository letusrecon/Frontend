import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
export default function Nav({ onClickHandler, isShowSideBar }) {
  return (
    <nav className="bg-[#232223] md:hidden lg:hidden  py-0 px-7 flex justify-between">
      <Image
        src="/assets/logo-removebg-preview.png"
        width="100"
        height="30"
        alt="LetUsRecon"
        className="h-20 w-30"
      />
      <div className="">
        {!isShowSideBar ? (
          <FontAwesomeIcon
            onClick={onClickHandler}
            className="text-slate-300 text-lg mt-8"
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            onClick={onClickHandler}
            className="text-slate-300 text-lg mt-8"
            icon={faXmark}
          />
        )}
      </div>
    </nav>
  );
}
