import * as React from 'react';
// import Btn from '../Btn/Btn';
// import './LoginForm.scss';

import { connect } from 'react-redux';
// import { autorizationDispatch } from '../../../store/middleware/requestsServer.middleware';
// import { rememberAuthorized } from '../../../store/actions/authorization.actions';
import Box from '@mui/material/Box';
// import InputTextField from '../InputTextField/InputTextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import { openModalWindow } from '../../../store/actions/ui.actions';
// import { putUserDispath } from '../../../store/middleware/requestsServer.middleware';
// import { isoInIsoPlusOneDay } from '../../../utils/convertData';
import useMediaQuery from '@mui/material/useMediaQuery';
// import AvatarPicture from '../AvatarPicture/AvatarIcon';
import './DescriptionOwner.scss';
import Version from '../Version/Version';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DescriptionOwn = ({
  logIn,
  setRememberToken,
  loggedIn,
  setOpenModalWindow,
  openModalWindow,
  changeUserData,
  setPutUserDispath,
  token,
}) => {
  const [widthInput, setWidthInput] = React.useState(35);
  const matchesVerPhone = useMediaQuery('(min-width:0px)');
  const matchesHorPhone = useMediaQuery('(min-width:500px)');
  const matchesDesktop = useMediaQuery('(min-width:900px)');

  function setWidthMedia() {
    if (matchesDesktop) return setWidthInput(35);
    if (matchesHorPhone) return setWidthInput(20);
    if (matchesVerPhone) return setWidthInput(35);
  }

  React.useEffect(() => {
    setWidthMedia();
  }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);

  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: '10px 20px ',
      }}
    >
      <Box>
        <Typography
          sx={{
            marginBottom: '10px',
            borderBottom: `1px solid ${theme.palette.text.secondary}`,
          }}
        >
          This pet project was created to implement an admin control panel.
          Instructions for entering and working with control panel in settings.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center',
          }}
        >
          <Typography>
            Write to the e-mail address of{' '}
            <a
              style={{
                color: theme.palette.primary[500],
                textDecoration: 'none',
              }}
              href="mailto:schokk8193@gmail.com"
            >
              Oleksii
            </a>
            .
          </Typography>
          <Version />
        </Box>
      </Box>
    </Box>
  );
};

// const mapState = state => {
//   return {
//     loggedIn: state.ui.loggedIn,
//     token: state.authorization.code,
//     openModalWindow: state.ui.openModalWindow,
//   };
// };

// const mapDispath = {
//   logIn: autorizationDispatch,
//   setRememberToken: rememberAuthorized,
//   setOpenModalWindow: openModalWindow,
//   setPutUserDispath: putUserDispath,
// };

export default connect(null, null)(DescriptionOwn);
