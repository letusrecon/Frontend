import React from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';

export default function subs_by_ssl() {
  return (
    <Layout>
      <div>
        <ToolsHeader />
        <ToolsSearchInput>
          Subdomains From SSL Configurations: 0
        </ToolsSearchInput>
        <ToolsFilterBox></ToolsFilterBox>
      </div>
    </Layout>
  );
}
