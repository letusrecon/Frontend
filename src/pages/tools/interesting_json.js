import React from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";

export default function interesting_json() {
 return (
   <Layout>
     <div>
       <ToolsHeader />
       <ToolsSearchInput>JSON file discovery</ToolsSearchInput>
     </div>
   </Layout>
 );
}
