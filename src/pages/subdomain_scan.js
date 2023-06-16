import React from "react";
import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { SCANNED_DATA } from "@/Data/Data";
import { useState, useEffect } from "react";
import Table from "@/Components/Dashboard/DataTable/Table";
import FilterWrapper from "@/Components/Dashboard/UI/FilterWrapper";
import { MdArrowDropDown } from "react-icons/md";

const filterOptions = [
  { label: "Url", value: "url" },
  { label: "Page title", value: "page title" },
  { label: "Http status code", value: "http status code" },
  { label: "Content length", value: "Content length" },
  { label: "Technologies", value: "technologies" },
  { label: "IP", value: "ip" },
  { label: "Server Software", value: "server Software" },
  { label: "Location", value: "location" },
];


export default function Subdomain_scan(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(SCANNED_DATA);
    const [options, setOptions] = useState("");

    const optionsHandler = (e) => {
      setOptions(e.target.value);
      console.log(options);
    };

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
    { name: "Location", sortable: true, selector: (row) => row.location },
  ];

  const searchHandler = (e) => {
    const filteredData = SCANNED_DATA.filter((item) => {
      return item.Url.toLowerCase().includes(e.target.value);
    });

    setData(filteredData);
  };
  return (
    <Layout>
      <div className="px-4 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className=" flex flex-col  sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 sm:mb-3">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Resolved Domain</h1>
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
          <h3 className="text-slate-100 text-lg md:text-sm">
            Total Alive subdomains Found: 0
          </h3>

          <div className="flex md:items-center lg:items-center flex-col sm:flex-col md:flex-row lg:flex-row ">
            <div className="flex mb-3 sm:mb-2 lg:mb-0 md:mr-5 lg:mr-5">
              <form action="">
                <input
                  onChange={searchHandler}
                  type="text"
                  placeholder="filter Query"
                  className="bg-transparent w-[150px] sm:w-[100px] lg:w-[300px] border rounded-s-xl focus:bg-[#354C50] outline-none text-slate-100  px-5 py-1"
                />
              </form>
              <select
                value={options}
                className=" py-1 -ml-0 sm:-ml-0 px-0 sm:px-0 md:px-4 lg:px-3 bg-[#354C50]  outline-none border text-slate-100 rounded-e-xl"
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
          <div className=" mt-3 sm:mt-2 lg:mt-4 ">
            <Table columns={columns} allowOverflow={true} data={data} />
          </div>
        )}
      </div>
    </Layout>
  );
}
