import * as React from 'react';
import Box from '@mui/material/Box';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const DisplayAllUsers = ({ handleClick }) => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      onClick={handleClick}
    >
      <PeopleAltIcon
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{
          borderRadius: '4px',
          fontSize: '40px',
          margin: '0 3px',
          justifySelf: 'end',
        }}
      />
    </Box>
  );
};

export default DisplayAllUsers;
