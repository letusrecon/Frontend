import React from 'react'
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import Layout from '@/Components/Layout'
import ToolsSearchInput from '@/Components/Dashboard/Tools/ToolsSearchInput';


export default function bypasser() {
  return (
    <Layout>
      <div>
        <ToolsHeader />

        <ToolsSearchInput>
          Subdomains bypass

        </ToolsSearchInput>

      </div>
    </Layout>
  );
}

