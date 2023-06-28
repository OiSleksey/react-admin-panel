import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Instruction from '../../ui/Instruction/Instruction';
import DataInput from '../../ui/DataInput/DataInput';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import ChangeServer from '../ChangeServer/ChangeServer';

const SettingControl = ({ handleClickTheme, stateMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ChangeTheme handleClickTheme={handleClickTheme} stateMode={stateMode} />
      <ChangeServer />
      <DataInput />
      <Instruction />
    </Box>
  );
};

export default SettingControl;

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
