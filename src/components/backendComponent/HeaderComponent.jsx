import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ListUserComponent } from './ListUserComponent';
import { Typography } from '@mui/material';
import TestHello from './TestHelloWorld';
import { Link } from 'react-router-dom';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HeaderComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="用户数据" component={Link} to="/admin" {...a11yProps(0)} />
          <Tab label="Test" component={Link} to="/test" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
}