import React from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";

export default function swagger_endpoints() {
 return (
   <Layout>
     <div>
       <ToolsHeader />
       <ToolsSearchInput>Swagger.json Endpoint Extraction</ToolsSearchInput>
     </div>
   </Layout>
 );
}
