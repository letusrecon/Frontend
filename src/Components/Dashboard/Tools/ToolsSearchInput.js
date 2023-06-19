import React from "react";

export default function ToolsSearchInput(props) {
  
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  mt-7 lg:justify-between lg:items-center">
        <div className=" lg:mr-5">
          <h3 className="text-slate-100 text-md font-bold mb-3 lg:mb-0 mr-2">
            {props.children}
          </h3>
        </div>

        <div className="">
          <form action="" className="  lg:mb-0">
            <input
              type="text"
              placeholder="Type here"
              className="rounded-lg border focus:bg-[#344c51] focus:outline-0 py-1 px-5 w-[325px] sm:w-[325px] md:w-[500px] lg:w-[900px] bg-[#333A3C] text-slate-100 "
            />
          </form>
        </div>
      </div>
    </div>
  );
}
