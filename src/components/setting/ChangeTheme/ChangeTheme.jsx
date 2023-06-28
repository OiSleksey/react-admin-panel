import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleColorBtn from '../../ui/ToggleColorBtn/ToggleColorBtn';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const ChangeTheme = ({ handleClickTheme, stateMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        justifyContent: 'space-between',
        minWidth: '100%',
      }}
    >
      <Typography
        sx={{
          marginRight: '10px',
        }}
      >
        Change theme:{' '}
      </Typography>
      <Paper
        elevation={3}
        sx={{ padding: '2px 5px 2px 14px', borderRadius: '20px !important' }}
      >
        {' '}
        <ToggleColorBtn
          handleClickTheme={handleClickTheme}
          stateMode={stateMode}
        />
      </Paper>
    </Box>
  );
};

export default ChangeTheme;

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
