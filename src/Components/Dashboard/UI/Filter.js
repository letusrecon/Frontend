import React from "react";
import { MdArrowDropDown } from "react-icons/md";

export default function Filter(props) {

  return (
    <div className="">
      <div className="flex flex-col py-6 px-5 rounded-lg bg-[#273030] shadow-md lg:flex-row lg:justify-between mt-8 lg:items-center">
        <div className="flex">
          <p className="text-slate-50  mb-4 lg:mb-0 mr-2">{props.children}</p>
        </div>

        <div className="flex flex-col sm:flex-col lg:flex-row">
          <form action="" className="mr-0 flex  lg:mr-3 mb-4 lg:mb-0 ">
            <input
             onChange={props.onSearchFilter}
              type="text"
              placeholder="Filter Query"
              className=" w-4/5 sm:w-4/5 md:w-4/3  focus:outline-0 sm:focus:outline-0  lg:outline-0  -mr-1  rounded-s-xl border py-1 px-5 rounded-e-0  lg:w-72  bg-[#344C51] text-slate-200"
            />
            <button className="border border-slate-100    rounded-e-xl rounded-s-0  px-3 py-1 bg-[#344C51] text-slate-200 flex ">
              Payload{" "}
              <span className="ml-4">
                <MdArrowDropDown className=" text-xl " />
              </span>
            </button>
          </form>

          <div className="">
            <button className="border border-slate-200 rounded-xl px-3 py-1 text-slate-100 flex ">
              Export{" "}
              <span className="ml-4">
                <MdArrowDropDown className=" text-xl " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
