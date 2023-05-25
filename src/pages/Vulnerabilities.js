

import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { VULNERABILITIES } from "@/Data/Data";
import DataTable, {createTheme} from "react-data-table-component";
import { useEffect, useState } from "react";

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

  return (
    <Layout>
      <div className=" px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className=" flex flex-col mb-8 sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
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

        <div className="flex flex-col sm:flex-col lg:justify-end lg:flex-row">
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
            className=" mr-10  lg:mr-5 mb-4 lg:mb-0   flex justify-between"
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

        <div className=" hidden lg:block md:block mt-14">
          {isLoaded && (
            <DataTable
              columns={columns}
              pagination
              allowOverflow
              data={VULNERABILITIES}
              theme="custombackground"
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
