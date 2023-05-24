

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
      <div className="py-4 px-10">
        <div className=" flex justify-between items-center  mb-8">
          <div className="">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Vulnerabilities</h1>
              <h2 className="text-cyan-400">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-md border py-1 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <CgProfile className="text-2xl mx-auto text-slate-100" />
              <Link className="text-slate-100" href="/">
                My profile
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 items-center">
          <div className="flex justify-end">
            <div className="mr-5">
              <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
                Entries{" "}
                <span className="ml-4">
                  <MdArrowDropDown className=" text-xl " />
                </span>
              </button>
            </div>

            <form action="" className="mr-5 ">
              <input
                type="text"
                placeholder=" Search"
                className="rounded-md border py-1 px-6 w-4/3 bg-transparent text-slate-100 "
              />
            </form>

            <div className="mr-5">
              <button className="text-slate px-5 rounded-md py-1 bg-cyan-300">
                Search
              </button>
            </div>

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

        <div className="mt-14">
          { isLoaded && 
          <DataTable
            columns={columns}
            pagination
            allowOverflow
            data={VULNERABILITIES}
            theme="custombackground"
          />
       }
        </div>
      </div>
    </Layout>
  );
}
