import React from 'react'
import Table from '@/Components/Dashboard/DataTable/Table'
import { VULNERABILITIES } from '@/Data/Data';
import { useState, useEffect } from 'react';

export default function Rough() {
      const [isLoaded, setIsLoaded] = useState(false);

      useEffect(() => {
        setIsLoaded(true);
      }, []); 

    const columns = [
    { name: "URL", sortable: true, selector: (row) => row.url },

    {
      name: "Issue Raised",
      sortable: true,
      selector: (row) => row.issue,
    },
    {
      name: "issue Related",
      sortable: true,
      selector: (row) => row.isseRelated,
    },
    {
      name: "Severity",
      sortable: true,
      selector: (row) => row.severity,
    },
    { name: "Notes", sortable: true, selector: (row) => row.notes },
    {
      name: "Guide",
      sortable: true,
      selector: (row) => row.guides,
    },
  ];
  return (
    <div>
        {isLoaded && 
      <Table columns={columns} data={VULNERABILITIES} />}
    </div>
  );
}
