import React,{useState} from 'react'
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import Layout from '@/Components/Layout';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { SUBDOMAINS_DATA } from '@/Data/ToolsData';


export default function subs_by_asn() {
  const [data, setData] = useState(SUBDOMAINS_DATA)
  const columns = [
    { name: "URL", sortable: true, selector: (row) => row.Url },
    { name: "Page Title", sortable: true, selector: (row) => row.title },
    { name: "HTTP Status Code", sortable: true, selector: (row) => row.http },
    { name: "Content Lenth", sortable: true, selector: (row) => row.lenth },
    {
      name: "Technologies",
      sortable: true,
      selector: (row) => row.technologies,
    },
    { name: "IP", sortable: true, selector: (row) => row.ip },
    { name: "Server Software", sortable: true, selector: (row) => row.server },
    { name: "Location", sortable: true, selector: (row) => row.location },
  ];

  const toolsSearchFilterHandler = (e)=>{

    const newAnsData = SUBDOMAINS_DATA.filter((item=>{
      return item.Url.toLowerCase().includes(e.target.value.toLowerCase())
    }))

    setData(newAnsData)

  }
 return (
   <Layout>
     <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
       <ToolsHeader />
       <ToolsSearchInput>Subdomains From ASN Number</ToolsSearchInput>
       <ToolsFilterBox onSearchToolsFilter={toolsSearchFilterHandler}>
         Subdomains from ASN Number: 10
       </ToolsFilterBox>
       <ToolsDataTable columns={columns} data={data} />
     </div>
   </Layout>
 );
}
