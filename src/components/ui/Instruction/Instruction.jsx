import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Version from '../Version/Version';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Instruction() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        padding: '10px 20px ',
      }}
    >
      <Box>
        <Typography>
          The admin control panel login details are above. If the server is not
          working, then you need to go to "Work from a real server": to another
          position in "FAKE SERVER". In this position, the admin panel works
          with a fake server and the data is stored in localStorage.
        </Typography>
        <Typography
          sx={{
            marginBottom: '10px',
            borderBottom: `1px solid ${theme.palette.text.secondary}`,
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#e8bb49' }}>WARNING!</span> The server can be
          switched only during authorization. Thank you for choosing our
          product!
        </Typography>

        <Version />
      </Box>
    </Box>
  );
}
