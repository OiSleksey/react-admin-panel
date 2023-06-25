import * as React from 'react';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const UpdateBtn = ({ handleClick }) => {
  return (
    <Box sx={{ cursor: 'pointer', margin: '0 3px' }} onClick={handleClick}>
      <AutorenewIcon
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ fontSize: '40px' }}
      >
        <MenuIcon />
      </AutorenewIcon>
    </Box>
  );
};

export default UpdateBtn;
