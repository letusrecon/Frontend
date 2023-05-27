import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

export default function ToolsFilterBox(props) {
  return (
    <div className="px-5 md:px-8   lg:px-10">
      <div className="flex flex-col py-6 px-5 rounded-lg bg-[#273030] lg:flex-row lg:justify-between mt-10 lg:items-center">
        <div className="flex">
          <p className="text-slate-50  mb-4 lg:mb-0 mr-2">
         {props.children}
          </p>
        </div>

        <div className="flex flex-col sm:flex-col lg:flex-row">
          {/* <div>
            <h3 className="text-slate-200 mr-3 text-lg lg:mt-1">Filter</h3>
          </div> */}
          <form
            action=""
            className="mr-0  lg:mr-3 mb-4 lg:mb-0 "
          >
            <input
              type="text"
              placeholder="Filter Query"
              className=" w-4/5 sm:w-4/5 md:w-4/3 rounded-xl border py-1 px-5  lg:w-72  bg-[#344C51] text-slate-200"
            />
          </form>

          <div className="flex ">
            <button className="border border-slate-100 rounded-xl mr-2  md:mr-2 lg:mr-3  px-3 py-1 bg-[#344C51] text-slate-200 flex ">
              Payload{" "}
              <span className="ml-4">
                <MdArrowDropDown className=" text-xl " />
              </span>
            </button>
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
