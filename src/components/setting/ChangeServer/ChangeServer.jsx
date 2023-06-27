import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { activePanel } from '../../../store/actions/ui.actions';
// import {
//   typeModalWindow,
//   openModalWindow,
// } from '../../../store/actions/ui.actions';
import ToggleColorBtn from '../../ui/ToggleColorBtn/ToggleColorBtn';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
// import Version from '../../ui/Version/Version';
import Instruction from '../../ui/Instruction/Instruction';
import { fakeServer } from '../../../store/actions/ui.actions';
import {
  getIsFakeServer,
  getLoggedIn,
} from '../../../store/selectors/ui.selector';
import { useTheme } from '@mui/material';

const ChangeServer = ({ isFakeServer, setFakeServer, isLoggedIn }) => {
  const handleChange = e => {
    const isChecked = e.target.checked;
    setFakeServer(isChecked);
  };

  const theme = useTheme();
  const nameServer = isFakeServer ? 'fake server' : 'real server';
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
      <Typography
        sx={{
          marginRight: '10px',
        }}
      >
        Work from{' '}
        <span
          style={{
            color: theme.palette.primary[500],
            textTransform: 'uppercase',
          }}
        >
          {nameServer}
        </span>
        :
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '2px 5px 2px 5px',
          borderRadius: '20px !important',
        }}
      >
        {' '}
        <Switch
          checked={isFakeServer}
          disabled={isLoggedIn}
          onChange={handleChange}
          name="gilad"
        />
      </Paper>
    </Box>
  );
};

const mapState = state => {
  return {
    isFakeServer: getIsFakeServer(state),
    isLoggedIn: getLoggedIn(state),
  };
};

const mapDispatch = {
  setFakeServer: fakeServer,
};

export default connect(mapState, mapDispatch)(ChangeServer);

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
