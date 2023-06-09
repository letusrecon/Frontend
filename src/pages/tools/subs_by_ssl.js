import React,{useState} from 'react'
import Layout from '@/Components/Layout';
import ToolsHeader from '@/Components/Dashboard/Tools/ToolsHeader';
import ToolsSearchInput from "@/Components/Dashboard/Tools/ToolsSearchInput";
import ToolsDataTable from '@/Components/Dashboard/DataTable/ToolsDataTable';
import { SUBDOMAINS_DATA } from '@/Data/ToolsData';
import ToolsFilterBox from '@/Components/Dashboard/Tools/ToolsFilterBox';

export default function subs_by_ssl() {
      const [data, setData] = useState(SUBDOMAINS_DATA);
      const columns = [
        { name: "URL", sortable: true, selector: (row) => row.Url },
        { name: "Page Title", sortable: true, selector: (row) => row.title },
        {
          name: "HTTP Status Code",
          sortable: true,
          selector: (row) => row.http,
        },
        { name: "Content Lenth", sortable: true, selector: (row) => row.lenth },
        {
          name: "Technologies",
          sortable: true,
          selector: (row) => row.technologies,
        },
        { name: "IP", sortable: true, selector: (row) => row.ip },
        {
          name: "Server Software",
          sortable: true,
          selector: (row) => row.server,
        },
        { name: "Location", sortable: true, selector: (row) => row.location },
      ];

      const toolsSearchFilterHandler = (e) => {
        const newAnsData = SUBDOMAINS_DATA.filter((item) => {
          return item.Url
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });

        setData(newAnsData);
      };
  return (
    <Layout>
      <div className="px-5 md:px-8 sm:py-5 py-5  lg:px-10">
        <ToolsHeader />
        <ToolsSearchInput>
          Subdomains From SSL Configurations: 0
        </ToolsSearchInput>
        <ToolsFilterBox onSearchToolsFilter={toolsSearchFilterHandler}>
          Subdomains From SSL Configurations: 10
        </ToolsFilterBox>
        <ToolsDataTable
          columns={columns}
          data={data}
        ></ToolsDataTable>
      </div>
    </Layout>
  );
}
