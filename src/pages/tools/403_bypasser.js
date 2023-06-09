import React,{useState} from 'react'
import ToolsHeader from "@/Components/Dashboard/Tools/ToolsHeader";
import Layout from '@/Components/Layout'
import ToolsSearchInput from '@/Components/Dashboard/Tools/ToolsSearchInput';
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { BYPASS_DATA } from '@/Data/ToolsData';


export default function bypasser() {
  const [data, setData] = useState(BYPASS_DATA);

  // Fields
    const columns = [
      {
        name: "Payload",
        sortable: true,
        selector: (row) => row.payload,
      },
      { name: "Status", sortable: true, selector: (row) => row.status },
      { name: "Length", sortable: true, selector: (row) => row.length },
    ];
    // Filtering
    const toolsSearchFilterHandler = (e) => {
      const newAnsData = BYPASS_DATA.filter((item) => {
        return item.payload.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setData(newAnsData);
    };
  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />

        <ToolsSearchInput>403 bypass</ToolsSearchInput>

        <ToolsFilterBox onSearchToolsFilter={toolsSearchFilterHandler}>
          403 bypass attempts: 10
        </ToolsFilterBox>
        <ToolsDataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}

