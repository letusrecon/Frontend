import React from 'react'
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import Layout from '@/Components/Layout';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';

export default function subs_from_ip_ranges() {
return (
  <Layout>
    <div>
      <ToolsHeader />
      <ToolsSearchInput>Subdomains From Ip Ranges</ToolsSearchInput>
      <ToolsFilterBox></ToolsFilterBox>
    </div>
  </Layout>
);
}
