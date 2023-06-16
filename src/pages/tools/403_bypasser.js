import React,{useState} from 'react'
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import Layout from '@/Components/Layout'
import ToolsSearchInput from '@/Components/Dashboard/Tools/ToolsSearchInput';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { BYPASS_DATA } from '@/Data/ToolsData';
import {MdArrowDropDown} from 'react-icons/md'
import FilterWrapper from '@/Components/Dashboard/UI/FilterWrapper';

const filterOptions = [
  { label: "Target Name", value: "target name" },
  { label: "Scan Type", value: "scan type" },
  { label: "Last Scanned", value: "last scanned" },
  { label: "HTTPS status code", value: "https status code" },
  { label: "Result", value: "result" },
];



export default function Bypasser() {
  const [data, setData] = useState(BYPASS_DATA);
   const [options, setOptions] = useState("");

   const optionsHandler = (e) => {
     setOptions(e.target.value);
     console.log(options);
   };

  // Fields
    const columns = [
      {
        name: "Payload",
        sortable: true,
        selector: (row) => row.payload,
      },
      { name: "Status", sortable: true, selector: (row) => row.status },
      { name: "Length", sortable: true, selector: (row) => row.length },
    ];
    // Filtering
    const toolsSearchFilterHandler = (e) => {
      const newAnsData = BYPASS_DATA.filter((item) => {
        return item.payload.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setData(newAnsData);
    };
  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />

        <ToolsSearchInput>403 bypass</ToolsSearchInput>

        <FilterWrapper>
          <h2 className="text-slate-100 text-lg md:text-sm">
            403 bypass attempts: 10
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
                className=" py-1 px-2 sm:px-2 md:px-5 lg:px-5 bg-transparent  w-[125px] sm:w-[125px] md:w-[150px] lg:w-[170px] outline-none border text-slate-100 rounded-e-xl"
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
        <ToolsDataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}

