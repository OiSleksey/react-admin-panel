import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const DataInput = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '100%',
        marginBottom: '20px',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: '10px 20px',
          minWidth: '100%',
        }}
      >
        <Typography
          sx={{
            marginBottom: '10px',
          }}
          variant="h5"
        >
          Data for entering the Admin panel:
        </Typography>
        <Typography
          sx={{
            marginBottom: '10px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          Email: admin@admin.com
        </Typography>
        <Typography
          sx={{
            margin: '0 auto',
          }}
        >
          Password: admin123
        </Typography>
      </Paper>
    </Box>
  );
};

export default DataInput;

// const [widthInput, setWidthInput] = React.useState(35);
// const matchesVerPhone = useMediaQuery('(min-width:0px)');
// const matchesHorPhone = useMediaQuery('(min-width:500px)');
// const matchesDesktop = useMediaQuery('(min-width:900px)');

// function setWidthMedia() {
//   // console.log('matchesDesktop', matchesDesktop);
//   if (matchesDesktop) return setWidthInput(35);
//   // console.log('matchesHorPhone', matchesHorPhone);
//   if (matchesHorPhone) return setWidthInput(20);
//   // console.log('matchesHorPhone', matchesVerPhone);
//   if (matchesVerPhone) return setWidthInput(35);
// }

// React.useEffect(() => {
//   setWidthMedia();
//   // console.log(widthInput);
// }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);
