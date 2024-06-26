import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const UserTablePagination = ({ count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => {
  return (
    <TablePagination
      rowsPerPageOptions={[6, 12, 24]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

const UserTable = ({ currentData }) => {
    return (
      <TableContainer component={Paper} sx={{ width: '50%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>userId</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>name</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>username</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
export default UserTablePagination;
export {UserTable};