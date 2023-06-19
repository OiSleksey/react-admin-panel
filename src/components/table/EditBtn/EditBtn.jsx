import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import Box from '@mui/material/Box';

const EditBtn = ({ handleClicks, id }) => {
  const handleClick = () => {
    console.log('edit');
  };

  return (
    <Box
      className="edit-btn"
      // data-id={id}
      onClick={handleClick}
      sx={
        {
          // width: { sm: '100%' },
          // background: activePanel === 'users' ? 'grey' : '#08c',
          // display: isLoggin
          //   ? { xs: 'block', sm: 'none' }
          //   : { xs: 'none', sm: 'none' },
        }
      }
    >
      <EditIcon
        fontSize="large"
        sx={
          {
            // fontSize: '50px',
            // display: { sm: 'none' },
            // display: { sm: 'none', xs: 'block' },
            // margin: '10px auto',
          }
        }
      />
    </Box>
  );
};

export default EditBtn;
