import * as React from 'react';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const DisplayAllUsers = ({ handleClick }) => {
  return (
    <Box sx={{ cursor: 'pointer' }} onClick={handleClick}>
      <PeopleAltIcon
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{
          fontSize: '35px',
          mr: 2,
          //   flexGrow: 1,
          //   display: { xs: 'none', sm: 'block' },
          justifySelf: 'end',
        }}
      />
    </Box>
  );
};

export default DisplayAllUsers;
