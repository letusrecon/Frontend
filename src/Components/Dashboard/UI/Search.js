import React from 'react'

export default function Search() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row lg:justify-between mt-10 lg:items-center">
      <div className="mb-6 sm:mb-6  sm:text-left">
        <h3 className="text-slate-100  lg:text-lg  md:text-lg text-2xl">
          Scan history
        </h3>
      </div>

      <div className="flex">
        <div className="mr-2 lg:mr-5">
          <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
            Entries{" "}
            <span className="ml-4">
              <MdArrowDropDown className=" text-xl " />
            </span>
          </button>
        </div>

        <form action="" className=" ">
          <input
            type="text"
            placeholder=" Search"
            className="rounded-md border py-1 px-6 w-4/5 sm:w-4/5 md:w-4/3 lg:w-72 bg-transparent text-slate-100 "
          />
        </form>
      </div>
    </div>
  );
}
