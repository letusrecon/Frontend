import React from 'react'
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import Layout from '@/Components/Layout'
import ToolsSearchInput from '@/Components/Dashboard/Tools/ToolsSearchInput';
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';


export default function bypasser() {
  return (
    <Layout>
      <div>
        <ToolsHeader />

        <ToolsSearchInput>
          Subdomains bypass

        </ToolsSearchInput>
        <ToolsFilterBox></ToolsFilterBox>

      </div>
    </Layout>
  );
}

