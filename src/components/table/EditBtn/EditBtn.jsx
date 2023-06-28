import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import Box from '@mui/material/Box';

const EditBtn = () => {
  const handleClick = () => {};

  return (
    <Box className="edit-btn" onClick={handleClick}>
      <EditIcon fontSize="large" />
    </Box>
  );
};

export default EditBtn;
