import * as React from 'react';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CreateBtn = ({ handleClickCreate }) => {
  return (
    <Box sx={{ cursor: 'pointer' }} onClick={handleClickCreate}>
      <PersonAddIcon
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

export default CreateBtn;
