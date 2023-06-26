import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
// import dotenv from 'dotenv';
// require('dotenv').config();
const version = process.env.REACT_APP_VERSION;
const Version = () => {
  //   console.log(typeof version);
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: 'center',
        color: theme.palette.text.disabled,
        margin: 0,
      }}
    >
      OI version: {version}
    </Box>
  );
};

export default connect(null, null)(Version);
