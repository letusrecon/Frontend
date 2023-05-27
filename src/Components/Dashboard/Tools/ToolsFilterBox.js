import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

export default function ToolsFilterBox(props) {
  return (
    <div className="px-5 md:px-8   lg:px-10">
      <div className="flex flex-col py-6 px-5 rounded-lg bg-[#273030] lg:flex-row lg:justify-between mt-10 lg:items-center">
        <div className="flex">
          <p className="text-slate-50  mb-4 lg:mb-0 mr-2">
            Subdomains from ASN scan: 10
          </p>
        </div>

        <div className="flex flex-col sm:flex-col lg:flex-row">
          <div>
            <h3 className="text-slate-200 mr-3 text-lg lg:mt-1">Filter</h3>
          </div>

          <div className="">
            <button className="border border-cyan-400 rounded-md px-2 py-1 text-slate-100 flex ">
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
