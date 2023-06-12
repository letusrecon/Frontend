import React from "react";


export default function FilterWrapper(props) {

  return (
    <div className="">
      <div className="flex flex-col py-6 px-5 rounded-lg bg-[#273030] shadow-md lg:flex-row lg:justify-between mt-8 lg:items-center">
        {props.children}
     
      </div>
    </div>
  );
}
