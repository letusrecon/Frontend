import React from "react";
import Layout from "@/Components/Layout";
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from "@/Components/Dashboard/Tools/ToolsFilterBox";
import { ADMIN_PATH_FINDER } from "@/Data/ToolsData";
import ToolsDataTable from "@/Components/Dashboard/DataTable/ToolsDataTable";


export default function admin_panel_finder() {
  const columns = [
    { name: "Pontential Admin Path", sortable: true, selector: (row) => row.path },
    { name: "Status Code", sortable: true, selector: (row) => row.status },
    { name: "Length", sortable: true, selector: (row) => row.length },
    
  ];

  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />

        <ToolsSearchInput>Admin Panel Finder</ToolsSearchInput>
        <ToolsFilterBox>Admin Panel Finder: 0</ToolsFilterBox>
        <ToolsDataTable columns={columns} data={ADMIN_PATH_FINDER} />
      </div>
    </Layout>
  );
}
