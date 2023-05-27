import React from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';

export default function interesting_json() {
 return (
   <Layout>
     <div>
       <ToolsHeader />
       <ToolsSearchInput>JSON file discovery</ToolsSearchInput>
       <ToolsFilterBox></ToolsFilterBox>
     </div>
   </Layout>
 );
}
