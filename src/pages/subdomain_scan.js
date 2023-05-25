import React from "react";
import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { SCANNED_DATA } from "@/Data/Data";
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

export default function Subdomain_scan() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const columns = [
    { name: "URL", sortable: true, selector: (row) => row.Url },
    { name: "Page Title", sortable: true, selector: (row) => row.title },
    { name: "HTTP Status Code", sortable: true, selector: (row) => row.http },
    { name: "Content Lenth", sortable: true, selector: (row) => row.lenth },
    {
      name: "Technologies",
      sortable: true,
      selector: (row) => row.technologies,
    },
    { name: "IP", sortable: true, selector: (row) => row.ip },
    { name: "Server Software", sortable: true, selector: (row) => row.server },
    { name: "Loaction", sortable: true, selector: (row) => row.location },
  ];
  return (
    <Layout>
      <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className=" flex flex-col mb-8 sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 sm:mb-3">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Resolved Domain</h1>
              <h2 className="text-cyan-400">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex ">
            <form action="" className=" mr-8 sm:mr-6 lg:mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-md border text-slate-300 py-1 px-6 w-3/4 md:w-4/3 lg:w-4/3 bg-transparent "
              />
            </form>
            <div>
              <Link className="text-slate-100" href="/profile">
                <CgProfile className="text-xl mx-auto text-slate-100" />
                My profile
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between mt-20 lg:items-center">
          <div className="flex">
            <h3 className="text-slate-100  mb-4 lg:mb-0 mr-2">Scan history:</h3>
            <span className="text-slate-100  text-lg ">0</span>
          </div>

          <div className="flex flex-col sm:flex-col lg:flex-row">
            <div className=" mb-4 lg:mb-0 lg:mr-5">
              <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
                Entries{" "}
                <span className="ml-4">
                  <MdArrowDropDown className=" text-xl " />
                </span>
              </button>
            </div>

            <form
              action=""
              className=" mr-5  lg:mr-4 mb-4 lg:mb-0   flex justify-between"
            >
              <input
                type="text"
                placeholder=" Search"
                className="rounded-md border py-1 px-6 w-4/3 bg-transparent text-slate-100 mr-3 "
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
          <div className="hidden sm:hidden lg:block md:block mt-8 ">
            <DataTable
              columns={columns}
              pagination
              data={SCANNED_DATA}
              theme="custombackground"
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
