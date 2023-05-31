import React from 'react'
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import Layout from '@/Components/Layout'
import ToolsSearchInput from '@/Components/Dashboard/Tools/ToolsSearchInput';
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { BYPASS_DATA } from '@/Data/ToolsData';


export default function bypasser() {
    const columns = [
      {
        name: "Payload",
        sortable: true,
        selector: (row) => row.payload,
      },
      { name: "Status", sortable: true, selector: (row) => row.status },
      { name: "Length", sortable: true, selector: (row) => row.length },
    ];
  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />

        <ToolsSearchInput>403 bypass</ToolsSearchInput>

        <ToolsFilterBox>403 bypass attempts: 10</ToolsFilterBox>
        <ToolsDataTable columns={columns} data={BYPASS_DATA} />
      </div>
    </Layout>
  );
}

