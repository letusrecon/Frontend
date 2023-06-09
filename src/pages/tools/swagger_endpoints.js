import React,{useState} from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { SWAGGER_ENDPOINTS_DATA } from '@/Data/ToolsData';


export default function swagger_endpoints() {
   const [data, setData] = useState(SWAGGER_ENDPOINTS_DATA);
  const columns = [
    { name: "#", sortable: true, selector: (row) => row.number },
    {
      name: "Swagger Endpoints",
      sortable: true,
      selector: (row) => row.endpoints,
    },
  ];

  // Filter search

  const toolsSearchFilterHandler = (e) => {
    const newAnsData = SWAGGER_ENDPOINTS_DATA.filter((item) => {
      return item.endpoints.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setData(newAnsData);
  };
  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />
        <ToolsSearchInput>Swagger.json Endpoint Extraction</ToolsSearchInput>
        <ToolsFilterBox onSearchToolsFilter={toolsSearchFilterHandler}>
          Swagger.json Endpoint Extraction: 10
        </ToolsFilterBox>
        <ToolsDataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}
