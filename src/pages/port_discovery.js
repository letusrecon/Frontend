import React from 'react'
import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { DISCOVERY_PORT_DATA } from "@/Data/Data";
import DataTable, { createTheme } from "react-data-table-component";
import { useState, useEffect } from "react";

createTheme("custombackground", {
  background: {
    default: "transparent",
  },
  text: {
    primary: "white",
    secondary: "#2aa198",
  },
});

export default function Port_discovvery() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const columns = [
    { name: "URL", sortable: true, selector: (row) => row.url },
    { name: "Title", sortable: true, selector: (row) => row.title },
    { name: "HTTP Status Code", sortable: true, selector: (row) => row.status },

    {
      name: "Technologies",
      sortable: true,
      selector: (row) => row.technologies,
    },
    { name: "Web Server ", sortable: true, selector: (row) => row.server },
    { name: "Location", sortable: true, selector: (row) => row.location },
  ];
  return (
    <Layout>
      <div className="py-7 px-5 sm:py-4 md:py-4 lg:py-5 lg:px-10">
        <div className=" flex flex-col lg:flex-row justify-between lg:items-center  mb-5">
          <div className="mb-3 md:mb-3 lg:mb-0">
            <div className="">
              <h1 className="text-slate-100 text-1xl">
                Additional Exposed Ports
              </h1>
              <h2 className="text-cyan-400">Fireeye.com</h2>
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

        <div className=" mt-20 items-center">
          <div className="flex flex-col lg:flex-row lg:justify-end">
            <div className="mb-4 lg:mb-0 lg:mr-5">
              <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
                Url{" "}
                <span className=" ml-4">
                  <MdArrowDropDown className=" text-xl " />
                </span>
              </button>
            </div>

            <form action="" className="mr-5 flex mb-4 lg:mb-0  ">
              <input
                type="text"
                placeholder=" type here"
                className="rounded-md border py-1 mr-3 px-6 w-4/3 bg-transparent text-slate-100 "
              />
            </form>

            <div className="">
              <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
                Export{" "}
                <span className="ml-4">
                  <MdArrowDropDown className=" text-xl " />
                </span>
              </button>
            </div>
          </div>
        </div>

        {isLoaded && (
          <div className="hidden lg:block md:block mt-10">
            <DataTable
              columns={columns}
              pagination
              allowOverflow
              data={DISCOVERY_PORT_DATA}
              theme="custombackground"
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
