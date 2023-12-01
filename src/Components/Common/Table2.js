import React from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv'; //or use your library of choice here

//PASS IN DATA EITHER DUMMY OR FROM BACKEND ENDPOINTS
//COMMENT/DELETE 'DATA' IF USING ENDPOINT DATA
// const data = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
      
//       address: '261 Erdman Ford',
//       city: 'East Daphne',
//       state: 'Kentucky',
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Doe',
      
//       address: '769 Dominic Grove',
//       city: 'Columbus',
//       state: 'Ohio',
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Doe',
      
//       address: '566 Brakus Inlet',
//       city: 'South Linda',
//       state: 'West Virginia',
//     },
//     {
//         firstName: 'Kevin',
//         lastName: 'Vandy',
      
//       address: '722 Emie Stream',
//       city: 'Lincoln',
//       state: 'Nebraska',
//     },
//     {
//         firstName: 'Joshua',
//         lastName: 'Rolluffs',
      
//       address: '32188 Larkin Turnpike',
//       city: 'Charleston',
//       state: 'South Carolina',
//     },
//   ];
// //defining columns outside of the component is fine, is stable
// const columns = [
//   {
//     accessorKey: 'id',
//     header: 'ID',
//     size: 40,
//   },
//   {
//     accessorKey: 'firstName',
//     header: 'First Name',
//     size: 120,
//   },
//   {
//     accessorKey: 'lastName',
//     header: 'Last Name',
//     size: 120,
//   },
//   {
//     accessorKey: 'company',
//     header: 'Company',
//     size: 300,
//   },
//   {
//     accessorKey: 'city',
//     header: 'City',
//   },
//   {
//     accessorKey: 'country',
//     header: 'Country',
//     size: 220,
//   },
// ];



const Table = (props) => {
  const data = async() =>{
    const response = await fetch(
      "https://localhost/SCPPS-API/vehicle/list"
    ).then((response) => response.json());
  
  }

  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: props.columns.map((c) => c.header),
  };
  
  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(props.data);
  };

  return (
    <MaterialReactTable
      columns={props.columns}
      data={props.data}
      style={{backgroundColor:'yellow !important'}}
      enableRowSelection
      positionToolbarAlertBanner="bottom"
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
        >
          <Button
            color="primary"
            //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
            onClick={handleExportData}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Data
          </Button>
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export All Rows
          </Button>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Page Rows
          </Button>
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="contained"
          >
            Export Selected Rows
          </Button>
        </Box>
      )}
    />
  );
};

export default Table;
