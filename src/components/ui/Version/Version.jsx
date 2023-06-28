import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const version = process.env.REACT_APP_VERSION;
export default function Version() {
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
}
