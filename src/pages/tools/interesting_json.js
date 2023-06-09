import React,{useState} from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { JSON_DISCOVERY_DATA } from '@/Data/ToolsData';

export default function interesting_json() {
    const [data, setData] = useState(JSON_DISCOVERY_DATA);
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
       <ToolsFilterBox onSearchToolsFilter={toolsSearchFilterHandler}>
         JSON file discovery: 0
       </ToolsFilterBox>
       <ToolsDataTable columns={columns} data={data} />
     </div>
   </Layout>
 );
}
