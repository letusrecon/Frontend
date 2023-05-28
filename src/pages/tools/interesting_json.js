import React from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { JSON_DISCOVERY_DATA } from '@/Data/ToolsData';

export default function interesting_json() {
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
 return (
   <Layout>
     <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
       <ToolsHeader />
       <ToolsSearchInput>JSON file discovery</ToolsSearchInput>
       <ToolsFilterBox>JSON file discovery: 0</ToolsFilterBox>
       <ToolsDataTable columns={columns} data={JSON_DISCOVERY_DATA} />
     </div>
   </Layout>
 );
}
