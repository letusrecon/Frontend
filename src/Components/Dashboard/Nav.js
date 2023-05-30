import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
export default function Nav({ onClickHandler, isShowSideBar }) {
  return (
    <nav className="bg-[#5ba2b2] md:hidden lg:hidden  py-0 px-5 flex justify-between">
      <Image
        src="/assets/logo-removebg-preview.png"
        width="50"
        height="40"
        alt="LetUsRecon"
        className="h-24 w-20"
      />
      <div className="">
        {!isShowSideBar ? (
          <FontAwesomeIcon
            onClick={onClickHandler}
            className="text-slate-300 text-2xl mt-8"
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            onClick={onClickHandler}
            className="text-slate-300 text-2xl mt-8"
            icon={faXmark}
          />
        )}
      </div>
    </nav>
  );
}
