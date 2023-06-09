import React from "react";
import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

import { DISCOVERY_PORT_DATA } from "@/Data/Data";
import Table from "@/Components/Dashboard/DataTable/Table";
import { useState, useEffect } from "react";
import Filter from "@/Components/Dashboard/Filter";
import { useTime } from "framer-motion";

export default function Port_discovvery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentData, setCurrentdata] = useState(DISCOVERY_PORT_DATA);

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

        <Filter onSearchFilter={filterSearchHandler}>
          Additional Attack Surface: 100
        </Filter>

        {isLoaded && (
          <div className="mt-4">
            <Table columns={columns} data={currentData} />
          </div>
        )}
      </div>
    </Layout>
  );
}
