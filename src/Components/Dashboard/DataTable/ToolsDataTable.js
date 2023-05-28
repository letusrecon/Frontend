import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import { useState,useEffect } from 'react';

createTheme("custombackground", {
  background: {
    default: "transparent",
  },
  text: {
    primary: "white",
  },
});

const tableStyles = {
  headCells: {
    style: {
      fontSize: "15px",
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      backgroundColor: "#141C1E",
    },
  },

  pagination: {
    style: {
      color: "white",
      fontSize: "13px",
      minHeight: "56px",
      borderTopStyle: "solid",
      borderTopWidth: "1px",
    },
  },
};

export default function ToolsDataTable(props) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    setIsLoaded(true)

  },[])
  return (
    <div className='mt-5'>
      {isLoaded && 
      <DataTable
        theme="custombackground"
        pagination
        responsive={true}
        {...props}
        customStyles={tableStyles}
      />
}
    </div>
  );
}
