import React from "react";
import Layout from "@/Components/Layout";
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from "@/Components/Dashboard/Tools/ToolsFilterBox";

export default function admin_panel_inder() {
  return (
    <Layout>
      <div>
        <ToolsHeader />

        <ToolsSearchInput>Admin Panel Finder</ToolsSearchInput>
        <ToolsFilterBox></ToolsFilterBox>
      </div>
    </Layout>
  );
}
