import React from "react";
import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

import { DISCOVERY_PORT_DATA } from "@/Data/Data";
import Table from "@/Components/Dashboard/DataTable/Table";
import { useState, useEffect } from "react";
import FilterWrapper from "@/Components/Dashboard/UI/FilterWrapper";
import { MdArrowDropDown } from "react-icons/md";

const filterOptions = [
  { label: "Url", value: "url" },
  { label: "Page title", value: "page title" },
  { label: "Http status code", value: "http status code" },
  { label: "Technologies", value: "technologies" },
  { label: "Web server", value: "web server" },
  { label: "Location", value: "location" },
];



export default function Port_discovvery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentData, setCurrentdata] = useState(DISCOVERY_PORT_DATA);
    const [options, setOptions] = useState("");

    const optionsHandler = (e) => {
      setOptions(e.target.value);
      console.log(options);
    };

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

  const filterSearchHandler = (e) => {
    const filteredData = DISCOVERY_PORT_DATA.filter((item) => {
      return item.url.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setCurrentdata(filteredData);
  };
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

        <FilterWrapper>
          <h3 className="text-slate-200 mb-4 text-lg sm:mb-2 lg:mb-0 md:mb-0">
            {" "}
            Additional Attack Surface: 100
          </h3>

          <div className="flex md:items-center lg:items-center flex-col sm:flex-col md:flex-row lg:flex-row ">
            <div className="flex mb-3 sm:mb-2 lg:mb-0 md:mr-5 lg:mr-5">
              <form action="">
                <input
                  onChange={filterSearchHandler}
                  type="text"
                  placeholder="filter Query"
                  className="bg-transparent w-[170px] sm:w-[100px] lg:w-[300px] border rounded-s-xl focus:bg-[#354C50] outline-none text-slate-100  px-5 py-1"
                />
              </form>
              <select
                value={options}
                className=" py-1 -ml-0 sm:-ml-0 px-0 sm:px-0 md:px-4 lg:px-3 bg-[#354C50] w-[125px] sm:w-[125px] md:w-[150px] lg:w-[170px]  outline-none border text-slate-100 rounded-e-xl"
                onChange={optionsHandler}
              >
                {filterOptions.map((option) => (
                  <option
                    value={option.value}
                    key={option.value}
                    className="mt-10"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button className="border flex px-5 text-slate-100 rounded-md py-1">
                Export
                <MdArrowDropDown className="ml-2 mt-1" />
              </button>
            </div>
          </div>
        </FilterWrapper>

        {isLoaded && (
          <div className="mt-4">
            <Table columns={columns} data={currentData} />
          </div>
        )}
      </div>
    </Layout>
  );
}
