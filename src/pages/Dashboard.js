import Layout from "@/Components/Layout"
import Link from "next/link";
import {CgProfile} from "react-icons/cg"
import styles from "./Dasboard.module.css"


export default function Dashboard (){
    return (
      <Layout>
        <div className={styles.dashboard_container}>
          <div className=" flex justify-between items-center">
            <div className="flex items-center">
              <CgProfile className=" text-7xl text-slate-100 mr-3" />
              <div className="">
                <h2 className="text-slate-100">Hell Ismail,</h2>
                <h2 className="text-slate-100">Welcome Back</h2>
              </div>
            </div>

            <div className="flex ">

              <form action="" className="mr-8 mt-3">
                <input type="text" placeholder="Example.com" className="rounded-md border py-1 px-6 w-4/3 bg-transparent " />
              </form>
              <div>
                <CgProfile className="text-2xl mx-auto text-slate-100"/>
                <Link className="text-slate-100" href="/"> My profile</Link>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-slate-100 text-3xl">Today</h3>
            <div className="flex mt-10">
              <div className="border bg-[#141C1D] py-4 px-10 rounded-xl mr-7">
                <h3 className="text-slate-100 ">Scan Performed</h3>
                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
              <div className="border bg-[#141C1D] py-4 px-10  rounded-xl mr-7">
                <h3 className="text-slate-100">Running scans</h3>
                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
              <div className="border bg-[#141C1D] py-4 px-20 rounded-xl mr-7">
                <h3 className="text-slate-100">Target</h3>
                <h1 className="text-center text-white mt-3 text-5xl">0</h1>
              </div>
              <div className="border bg-[#141C1D] py-4 px-10  rounded-xl p-5">
                <h3 className="text-slate-100">Subdomains Found</h3>
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
        </div>
      </Layout>
    );
}