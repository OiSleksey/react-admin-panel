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
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
// import AvatarPicture from '../AvatarPicture/AvatarIcon';

const DescriptionOwn = ({ handleClickLogout }) => {
  const [widthInput, setWidthInput] = React.useState(35);
  const matchesVerPhone = useMediaQuery('(min-width:0px)');
  const matchesHorPhone = useMediaQuery('(min-width:500px)');
  const matchesDesktop = useMediaQuery('(min-width:900px)');

  function setWidthMedia() {
    // console.log('matchesDesktop', matchesDesktop);
    if (matchesDesktop) return setWidthInput(35);
    // console.log('matchesHorPhone', matchesHorPhone);
    if (matchesHorPhone) return setWidthInput(20);
    // console.log('matchesHorPhone', matchesVerPhone);
    if (matchesVerPhone) return setWidthInput(35);
  }

  React.useEffect(() => {
    setWidthMedia();
    // console.log(widthInput);
  }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);

  return (
    <Box
      sx={{
        minWidth: '100%',
        // display: 'flex',
        // flexDirection: { xs: 'column', sm: 'column' },
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          justifyContent: 'start',
          cursor: 'pointer',
          padding: '10px 20px',
          bgcolor: 'background.paper',
        }}
        onClick={handleClickLogout}
      >
        <p style={{ margin: '0 10px 0 0', display: 'inline-block' }}>Log out</p>
        <LogoutSharpIcon />
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
