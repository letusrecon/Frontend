import Layout from "@/Components/Layout";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import styles from "./Dasboard.module.css";
import DataTable from "react-data-table-component";
import { SCAN_HISTORY_DATA } from "@/Data/Data";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export default function Dashboard() {
  const columns = [
    { name: "Target name", sortable: true, selector: (row) => row.Target },
    { name: "Scan Type", sortable: true, selector: (row) => row.Type },
    { name: "Last scanned", sortable: true, selector: (row) => row.scanned },
    { name: "Status", sortable: true, selector: (row) => row.Status },
    { name: "Progress", sortable: true, selector: (row) => row.Progress },
    { name: "Result", sortable: true, selector: (row) => row.Result },
    { name: "Action", sortable: true, selector: (row) => row.Action },
  ];
  return (
    <Layout>
      <div className={styles.dashboard_container}>
        <div className=" flex justify-between items-center">
          <div className="flex items-center">
            <CgProfile className=" text-7xl text-slate-100 mr-3" />
            <div className="">
              <h2 className="text-slate-100">Hello Ismail,</h2>
              <h2 className="text-slate-100">Welcome Back</h2>
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
                {" "}
                My profile
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-slate-100 text-3xl">Today</h3>
          <div className="flex mt-10">
            <div className="border border-[#3A4245] bg-[#141C1D] py-4 w-8/12 px-20 rounded-xl mr-6">
              <h5 className="text-slate-100 text-center ">Scan Performed</h5>
              <h1 className="text-center text-white mt-3 text-5xl">0</h1>
            </div>
            <div className="border border-[#3A4245] bg-[#141C1D] py-4 w-8/12 px-16  rounded-xl mr-6">
              <h3 className="text-slate-100 text-center">Running scans</h3>
              <h1 className="text-center text-white mt-3 text-5xl">0</h1>
            </div>
            <div className="border border-[#3A4245] bg-[#141C1D] py-4 w-8/12 px-16 rounded-xl mr-6">
              <h3 className="text-slate-100 text-center">Targets</h3>
              <h1 className="text-center text-white mt-3 text-5xl">0</h1>
            </div>
            <div className="border border-[#3A4245] bg-[#141C1D] py-4 w-8/12 px-16  rounded-xl p-5">
              <h3 className="text-slate-100 text-center">Subdomains Found</h3>
              <h1 className="text-center text-white mt-3 text-5xl">0</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-14">
          <div>
            <h2 className="text-slate-100 text-1xl"> This week (300 scans)</h2>
          </div>

          <div>
            <h2 className="text-slate-100 text-1xl">Subdomains Details</h2>
          </div>
        </div>

        <div className="flex justify-between mt-20 items-center">
          <h3 className="text-slate-100 text-1xl">Scan history</h3>

          <div className="flex">
            <div className="mr-5">
              <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
                Entries{" "}
                <span className="ml-4">
                  <MdArrowDropDown className=" text-xl " />
                </span>
              </button>
            </div>

            <form action="" className=" ">
              <input
                type="text"
                placeholder=" Search"
                className="rounded-md border py-1 px-6 w-4/3 bg-transparent text-slate-100 "
              />
            </form>
          </div>
        </div>

        <div className="mt-10">
          <DataTable
            columns={columns}
            fixedHeader
            pagination
            data={SCAN_HISTORY_DATA}
          />
        </div>
      </div>
    </Layout>
  );
}
