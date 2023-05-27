import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'

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

export default function ToolDataTable() {
  return (
    <DataTable
      theme="custombackground"
      pagination
      responsive={true}
      {...props}
      customStyles={tableStyles}
    />
  );
}
