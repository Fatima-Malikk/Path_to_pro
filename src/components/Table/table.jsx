import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const BasicTable = ({ headers, data }) => {
  return (
    <TableContainer>
      <Table sx={{
        width: "1000px",
        borderCollapse: 'separate',
        borderSpacing: '0 10px',
      }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            height: "55px",
            borderRadius: "40px"
          }}>
            {headers.map((header) => (
              <TableCell key={header} sx={{ color: 'white', fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '50px' }}>
              {Object.values(row).map((value, index) => (
                <TableCell key={index} sx={{ color: 'white' }}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;