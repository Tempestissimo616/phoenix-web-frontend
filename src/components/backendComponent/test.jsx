import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/UserService';
import { Box, Pagination, Typography } from '@mui/material';
import UserTablePagination, { UserTable } from './UserTableComponents';

export const ListUserComponent = () => {
  // user list data
  const [users, setUsers] = useState([]);
  // numOfPage
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  // display cur page
  const currentData = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="div" gutterBottom>
        UserList
      </Typography>

      {/* 调用 UserTable 组件 */}
      <UserTable currentData={currentData} />

      {/* 调用 Pagination 组件 */}
      <UserTablePagination
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ListUserComponent;