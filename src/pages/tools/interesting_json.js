import React,{useState} from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { JSON_DISCOVERY_DATA } from '@/Data/ToolsData';
import FilterWrapper from '@/Components/Dashboard/UI/FilterWrapper';
import { MdArrowDropDown } from "react-icons/md";

// 
const filterOptions = [
  { label: "Title", value: "title" },
  { label: "HTTPS status code", value: "https status code" },
  { label: "Content length", value: "content length" },
];

export default function Interesting_json() {
    const [data, setData] = useState(JSON_DISCOVERY_DATA);
      const [options, setOptions] = useState("");

      const optionsHandler = (e) => {
        setOptions(e.target.value);
        console.log(options);
      };

      // 

    const columns = [
      {
        name: "Url",
        sortable: true,
        selector: (row) => row.url,
      },
      { name: "Title", sortable: true, selector: (row) => row.title },
      { name: "Status Code", sortable: true, selector: (row) => row.status },
      { name: "Content Length", sortable: true, selector: (row) => row.length},
    ];

   const toolsSearchFilterHandler = (e) => {
     const newAnsData = JSON_DISCOVERY_DATA.filter((item) => {
       return item.title
         .toLowerCase()
         .includes(e.target.value.toLowerCase());
     });

     setData(newAnsData);
   };
 return (
   <Layout>
     <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
       <ToolsHeader />
       <ToolsSearchInput>JSON file discovery</ToolsSearchInput>
       <FilterWrapper>
         <h2 className="text-slate-200 mb-4 text-lg sm:mb-2 lg:mb-0 md:mb-0">
           JSON file discovery: 0
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
