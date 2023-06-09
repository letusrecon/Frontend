import React from "react";
import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { SCANNED_DATA } from "@/Data/Data";
import { useState, useEffect } from "react";
import Table from "@/Components/Dashboard/DataTable/Table";
import Filter from "@/Components/Dashboard/Filter";

export default function Subdomain_scan(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(SCANNED_DATA);

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

        <Filter onSearchFilter={searchHandler}>
          Total Alive subdomains Found: 0
        </Filter>

        {isLoaded && (
          <div className=" mt-3 sm:mt-2 lg:mt-4 ">
            <Table columns={columns} allowOverflow={true} data={data} />
          </div>
        )}
      </div>
    </Layout>
  );
}
