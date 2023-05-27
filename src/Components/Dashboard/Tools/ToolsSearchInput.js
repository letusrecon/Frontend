import React from 'react'


export default function ToolsSearchInput(props) {
  return (
    <div className="px-5  md:px-8 mt-10 lg:px-10">
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center">
        <div className=" lg:mr-5">
          <h3 className="text-slate-100 font-bold mb-4 lg:mb-0 mr-2">
            {props.children}
          </h3>
        </div>

        <div className="">
          <form action="" className=" mb-4 lg:mb-0   ">
            <input
              type="text"
              placeholder=" Search here"
              className="rounded-md border py-1 px-5 w-4/5 lg:w-96 bg-[#333A3C] text-slate-100 "
            />
          </form>
        </div>
      </div>
    </div>
  );
}
