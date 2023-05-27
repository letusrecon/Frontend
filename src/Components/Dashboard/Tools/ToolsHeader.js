import React from 'react'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";


export default function ToolsHeader() {
  return (

      <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className=" flex flex-col mb-8 sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 sm:mb-3">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Available tools</h1>
              <h2 className="text-cyan-400">Freeye.com</h2>
            </div>
          </div>

          <div className="flex items-center ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-md border py-1 text-slate-200 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <Link className="text-slate-100" href="/profile">
                <CgProfile className="text-2xl mx-auto text-slate-100" />
                My profile
              </Link>
            </div>
          </div>
        </div>
      </div>

  );
}
