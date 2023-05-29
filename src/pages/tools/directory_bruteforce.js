import React from 'react'
import Layout from '@/Components/Layout'
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader'
import ToolsSearchInput from '@/Components/Dashboard/Tools/ToolsSearchInput';
import ToolsFilterBox from "@/Components/Dashboard/Tools/ToolsFilterBox";
import { DIRECTORY_BRUCEFORCE_DATA } from '@/Data/ToolsData';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';

export default function directory_bruteforce() {
  const columns = [
    { name: "Directory Path", sortable: true, selector: (row) => row.directory },
    { name: "Status code", sortable: true, selector: (row) => row.status },
    { name: "Length", sortable: true, selector: (row) => row.length },
    
  ];

  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />
        <ToolsSearchInput>Directory Bruceforce</ToolsSearchInput>
        <ToolsFilterBox>Directory Bruceforce: 10</ToolsFilterBox>
        <ToolsDataTable columns={columns} data={DIRECTORY_BRUCEFORCE_DATA} />
      </div>
    </Layout>
  );
  
}