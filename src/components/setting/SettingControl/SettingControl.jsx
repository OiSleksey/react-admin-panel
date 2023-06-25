import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { activePanel } from '../../../store/actions/ui.actions';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../store/actions/ui.actions';
import ToggleColorBtn from '../../ui/ToggleColorBtn/ToggleColorBtn';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import Version from '../../ui/Version/Version';

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
          Work from the server:{' '}
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
            // checked={isChecked}
            // onChange={event => {
            //   handleChange(event, dataName);
            // }}
            name="gilad"
          />
        </Paper>
      </Box>
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
          elevation={3}
          sx={{
            padding: '10px 20px',
            // borderRadius: '20px !important',
            minWidth: '100%',
            // display: 'flex',
          }}
        >
          <Typography
            sx={{
              // marginRight: '10px',
              marginBottom: '10px',
            }}
            variant="h5"
            // component="h2"
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
      <Version />
    </Box>
  );
};

const mapState = state => {
  return {
    modalType: state.ui.typeModalWindow,
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
};

export default connect(mapState, mapDispatch)(SettingControl);

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
