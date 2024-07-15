import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const UserHeaderComponent = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // 如果当前路径不是 /home，则重定向到 /home
    if (location.pathname === '/') {
      window.location.replace('/home');
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="首页" component={Link} to="/home" {...a11yProps(0)} />
          <Tab label="Test" component={Link} to="/test" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
}