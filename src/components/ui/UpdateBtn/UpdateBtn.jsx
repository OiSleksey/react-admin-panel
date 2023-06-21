import * as React from 'react';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const UpdateBtn = ({ handleClick }) => {
  return (
    <Box sx={{ cursor: 'pointer' }} onClick={handleClick}>
      <AutorenewIcon
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ fontSize: '35px', mr: 2, ml: 2 }}
      >
        <MenuIcon />
      </AutorenewIcon>
    </Box>
  );
};

export default UpdateBtn;
