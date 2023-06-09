import React, {useState} from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';
import ToolsDataTable from "@/Components/Dashboard/DataTable/ToolsDataTable";
import { SUBDOMAINS_DATA, SUBDOMAIN_TAKEOVER_DATA } from '@/Data/ToolsData';


export default function subs_takeover() {
  const [data, setData] = useState(SUBDOMAIN_TAKEOVER_DATA);
  const columns = [
    { name: "Domain", sortable: true, selector: (row) => row.domain },
    { name: " Issue", sortable: true, selector: (row) => row.issue },
    { name: "Severity", sortable: true, selector: (row) => row.severity },
    { name: "Reference", sortable: true, selector: (row) => row.refrence },
  ];

  // Filter search

  const toolsSearchFilterHandler = (e) => {
    const newAnsData = SUBDOMAINS_DATA.filter((item) => {
      return item.domain.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setData(newAnsData);
  };
  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />
        <ToolsSearchInput>Subdomain Takeover</ToolsSearchInput>
        <ToolsFilterBox onSearchToolsFilter={toolsSearchFilterHandler}>
          Subdomain Takeover: 10
        </ToolsFilterBox>
        <ToolsDataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}
