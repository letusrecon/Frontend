import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { VULNERABILITIES } from "@/Data/Data";
import { createTheme } from "react-data-table-component";
import Table from "@/Components/Dashboard/DataTable/Table";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { getSession } from "next-auth/react";

import FilterWrapper from "@/Components/Dashboard/UI/FilterWrapper";


const filterOptions = [
  { label: "Url", value: "url" },
  { label: "Issue Raised", value: "issue raised" },
  { label: "Issue related", value: "issue related" },
  { label: "Severity", value: "severity" },
  { label: "Notes", value: "notes" },
  
];


// theme

createTheme("custombackground", {
  background: {
    default: "transparent",
  },
  text: {
    primary: "white",
    secondary: "#2aa198",
  },
  divider: {
    default: "#7E8582",
  },
});


export default function Vulnerabilities() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(VULNERABILITIES);
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

    {
      name: "Issue Raised",
      sortable: true,
      selector: (row) => row.issue,
    },
    {
      name: "issue Related",
      sortable: true,
      selector: (row) => row.isseRelated,
    },
    {
      name: "Severity",
      sortable: true,
      selector: (row) => row.severity,
    },
    { name: "Notes", sortable: true, selector: (row) => row.notes },
    {
      name: "Guide",
      sortable: true,
      selector: (row) => row.guides,
    },
  ];

  const SearchFilterHandler = (e) => {
    const filteredData = VULNERABILITIES.filter((item) => {
      return item.url.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setData(filteredData);
  };

  return (
    <Layout>
      <div className=" px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className=" flex flex-col  sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-3 md:mb-3 lg:mb-0">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Vulnerabilities</h1>
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
          <div className="text-slate-200 mb-4 text-lg sm:mb-2 lg:mb-0 md:mb-0">
            Total Issues Found: 0
          </div>

          <div className="flex md:items-center lg:items-center flex-col sm:flex-col md:flex-row lg:flex-row ">
            <div className="flex mb-3 sm:mb-2 lg:mb-0 md:mr-5 lg:mr-5">
              <form action="">
                <input
                  onChange={SearchFilterHandler}
                  type="text"
                  placeholder="filter Query"
                  className="bg-transparent w-[170px] sm:w-[100px] lg:w-[300px] border border-slate-50 rounded-s-xl focus:bg-[#354C50] outline-none text-slate-100  px-5 py-1"
                />
              </form>
              <select
                value={options}
                className="py-1 -ml-0 sm:-ml-0 px-0 sm:px-0 md:px-4 lg:px-3 bg-[#354C50] w-[125px] sm:w-[125px] md:w-[150px] lg:w-[170px]  outline-none border text-slate-100 rounded-e-xl"
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

        <div className=" mt-4">
          {isLoaded && <Table columns={columns} allowOverflow data={data} />}
        </div>
      </div>
    </Layout>
  );
}


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}