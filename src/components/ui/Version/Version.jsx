import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
// import dotenv from 'dotenv';
// require('dotenv').config();
const version = process.env.REACT_APP_VERSION;
const Version = () => {
  //   console.log(typeof version);
  return (
    <Box>
      <p
        className="version"
        style={{ textAlign: 'center', color: 'rgb(186, 195, 200)', margin: 0 }}
      >
        version: {version}
      </p>
    </Box>
  );
};

export default connect(null, null)(Version);
