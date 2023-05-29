import React from "react";
import DataTable, {createTheme} from "react-data-table-component";

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

  pageButtonsStyle: {
			borderRadius: '50%',
			height: '40px',
			width: '40px',
			padding: '8px',
			margin: 'px',
			cursor: 'pointer',
			transition: '0.4s',
			color: "white",
			// fill: theme.button.default,
			backgroundColor: 'transparent',
			'&:disabled': {
				cursor: 'unset',
				color: "white",
			
			},
			'&:hover:not(:disabled)': {
				
        color: "white"
			},
			'&:focus': {
				outline: 'none',
			
			},
		},
  
	

    	

};

export default function Table(props) {
  return <DataTable theme="custombackground" pagination responsive={true} {...props} customStyles={tableStyles} />;
}
