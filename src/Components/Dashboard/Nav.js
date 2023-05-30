import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Nav(props) {
  
  return (
    <nav className="bg-[#5ba2b2] md:hidden lg:hidden  py-4 px-4 flex justify-between">
      <h2 className="text-black text-xl">LetUsRecon</h2>
      <div className="">
        <FontAwesomeIcon onClick={props.onClickHandler}  className="text-black-200 text-xl" icon={faBars} />
      </div>
    </nav>
  ); 
}
