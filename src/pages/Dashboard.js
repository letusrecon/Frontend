import Layout from "@/Components/Layout";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { SCAN_HISTORY_DATA } from "@/Data/Data";
import { useState, useEffect, use } from "react";
import { RiQrScanLine } from "react-icons/ri";
import { GiTargeting } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { TbClockHour3 } from "react-icons/tb";
import {MdArrowDropDown} from 'react-icons/md'
import Table from "@/Components/Dashboard/DataTable/Table";
import FilterWrapper from "@/Components/Dashboard/UI/FilterWrapper";

const filterOptions = [
  { label: "Target Name", value: "target name" },
  { label: "Scan Type", value: "scan type" },
  { label: "Last Scanned", value: "last scanned" },
  { label: "HTTPS status code", value: "https status code" },
  { label: "Result", value: "result" },
];

export default function Dashboard(props) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(SCAN_HISTORY_DATA);
  const [options, setOptions] = useState('')


  const optionsHandler = (e)=>{
    setOptions(e.target.value)
    console.log(options);
  }

  const filteredDataHandler = (e) => {
    const filteredData = SCAN_HISTORY_DATA.filter((item) => {
      return item.Target.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setData(filteredData);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const columns = [
    { name: "Target name", sortable: true, selector: (row) => row.Target },
    { name: "Scan Type", sortable: true, selector: (row) => row.Type },
    { name: "Last scanned", sortable: true, selector: (row) => row.scanned },
    { name: "Status", sortable: true, selector: (row) => row.Status },
    { name: "Progress", sortable: true, selector: (row) => row.Progress },
    { name: "Result", sortable: true, selector: (row) => row.Result },
    { name: "Action", sortable: true, selector: (row) => row.Action },
  ];

  // const showPayloadHandler = () => {
  //   setPayloadvalue(!showPayloadValue)
  // };
  return (
    <>
      <Layout>
        <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10 ">
          <div className="flex flex-col mb-8 sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
            <div className="flex items-center mb-4 sm:mb-4 lg:items-center">
              <CgProfile className=" text-7xl text-slate-100 mr-3" />
              <div className="">
                <h2 className="text-slate-100">Hello Ismail,</h2>
                <h2 className="text-slate-100">Welcome Back</h2>
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

          <div className="mt-7 sm:mt-5 md:mt-15 lg:mt-15">
            <h3 className="text-slate-100 mb-5 text-3xl">Today</h3>
            <div className="flex flex-col sm:justify-center sm:flex-col md:flex-col  lg:flex-row mt-10">
              <div className="w-full mb-5  sm:mb-5  sm:w-full  md:mb-5    lg:mb-0  lg:w-8/12  border  border-[#3A4245]  bg-[#141C1D] py-4 px-16 rounded-xl lg:mr-6">
                <div className="flex justify-center">
                  <RiQrScanLine className="text-slate-100 text-2xl mr-2" />

                  <h5 className="text-slate-100 text-center ">
                    Scan Performed
                  </h5>
                </div>

                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
              <div className="w-full mb-5 sm:mb-5 md:mb-4  lg:w-8/12  lg:mb-0 border border-[#3A4245] bg-[#141C1D] py-4 px-16  rounded-xl mr-6">
                <div className="flex justify-center">
                  <TbClockHour3 className="text-slate-100 text-2xl mr-2" />

                  <h3 className="text-slate-100 text-center">Running scans</h3>
                </div>

                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
              <div className="w-full mb-5 sm:mb-5 md:mb-4  lg:w-8/12  lg:mb-0 border border-[#3A4245] bg-[#141C1D] py-4 px-16 rounded-xl mr-6">
                <div className="flex justify-center">
                  <GiTargeting className="text-slate-100 text-2xl mr-2" />

                  <h3 className="text-slate-100 text-center">Targets</h3>
                </div>

                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
              <div className="w-full border border-[#3A4245] bg-[#141C1D] py-4 lg:w-8/12 px-16  rounded-xl p-5">
                <div className="flex justify-center">
                  <TbWorld className="text-slate-100 text-2xl mr-2" />

                  <h3 className="text-slate-100 text-center">
                    Subdomains Found
                  </h3>
                </div>

                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center s  flex-col sm:flex-col lg:flex-row lg:justify-between mt-14">
            <div className="  mb-8 sm:mb-4 lg:mb-0">
              <h2 className="text-slate-100 text-lg md:text-sm ">
                {" "}
                This week (300 scans)
              </h2>
            </div>

            <div className="">
              <h2 className="text-slate-100 text-lg md:text-sm">
                Subdomains Details
              </h2>
            </div>
          </div>
          <FilterWrapper>
            <h2 className="text-slate-200 text-xl mb-3 sm:mb-2 lg:mb-0 md:mb-0">
              Subdomains scans
            </h2>

            <div className="flex md:items-center lg:items-center flex-col sm:flex-col md:flex-row lg:flex-row ">
              <div className="flex mr-0 mb-3 sm:mb-2 lg:mb-0 md:mr-5 lg:mr-5">
                <form action="">
                  <input
                    onChange={filteredDataHandler}
                    type="text"
                    placeholder="filter Query"
                    className=" w-[170px] sm:w-[100px] lg:w-[300px] border rounded-s-xl  bg-[#354C50]  outline-none text-slate-100  px-5 py-1"
                  />
                </form>
                <select
                  value={options}
                  className=" py-1 -ml-0 sm:-ml-0 px-0 sm:px-0 md:px-4 lg:px-3 bg-[#354C50]  w-[125px] sm:w-[125px] md:w-[150px] lg:w-[170px] outline-none border text-slate-100 rounded-e-xl"
                  onChange={optionsHandler}
                >
                  {filterOptions.map((option) => (
                    <option
                      value={option.value}
                      key={option.value}
                      className="mt-10 px-4 bg-black"
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
            <div className="mt-4 ">
              <Table columns={columns} data={data} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
