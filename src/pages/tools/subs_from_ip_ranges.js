import React, {useState} from 'react'
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import Layout from '@/Components/Layout';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";

import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { SUBDOMAINS_DATA } from '@/Data/ToolsData';
import FilterWrapper from '@/Components/Dashboard/UI/FilterWrapper';
import { MdArrowDropDown } from "react-icons/md";
import { getSession } from 'next-auth/react';

const filterOptions = [
  { label: "Url", value: "url" },
  { label: "Page title", value: "page title" },
  { label: "HTTPS status code", value: "https status code" },
  { label: "Content length", value: "content length" },
  { label: "Technologies", value: "technologies" },
  { label: "IP", value: "ip" },
  { label: "Server Software", value: "server Software" },
  { label: "Location", value: "location" },
];

export default function Subs_from_ip_ranges() {
  const [data, setData] = useState(SUBDOMAINS_DATA)
  const [options, setOptions] = useState("");

  const optionsHandler = (e) => {
    setOptions(e.target.value);
    console.log(options);
  };


  // table fields
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
      {
        name: "Server Software",
        sortable: true,
        selector: (row) => row.server,
      },
      { name: "Location", sortable: true, selector: (row) => row.location },
    ];

    // Filter search

    const toolsSearchFilterHandler = (e) => {
      const newAnsData = SUBDOMAINS_DATA.filter((item) => {
        return item.Url.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setData(newAnsData);
    };

return (
  <Layout>
    <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
      <ToolsHeader />
      <ToolsSearchInput>Subdomains From IP Ranges</ToolsSearchInput>
      <FilterWrapper>
        <h2 className="text-slate-200 mb-4 text-lg sm:mb-2 lg:mb-0 md:mb-0">
          Subdomains From IP Ranges: 10
        </h2>

        <div className="flex md:items-center lg:items-center flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex mb-3 sm:mb-2 lg:mb-0 md:mr-5 lg:mr-5">
            <form action="">
              <input
                onChange={toolsSearchFilterHandler}
                type="text"
                placeholder="filter Query"
                className="bg-transparent w-[170px] sm:w-[100px] lg:w-[300px] border rounded-s-xl focus:bg-[#354C50] outline-none text-slate-100  px-5 py-1"
              />
            </form>
            <select
              value={options}
              className=" py-1 px-2 sm:px-2 md:px-5 lg:px-5 bg-transparent outline-none border  w-[125px] sm:w-[125px] md:w-[150px] lg:w-[170px] text-slate-100 rounded-e-xl"
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
      <ToolsDataTable columns={columns} data={data}></ToolsDataTable>
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