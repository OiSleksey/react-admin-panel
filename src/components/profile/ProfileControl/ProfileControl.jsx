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
import AvatarPicture from '../AvatarPicture/AvatarIcon';
import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileLogout from '../ProfileLogout/ProfileLogout';
import DescriptionOwn from '../../ui/DescriptionOwn/DescriptionOwn';
import ModalWindow from '../../ui/ModalWindow/ModalWindow';
import { activePanel, loggedIn } from '../../../store/actions/ui.actions';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../store/actions/ui.actions';
import {
  getExpiredTime,
  getName,
  getRole,
} from '../../../store/selectors/authorization.selector';
import { authData } from '../../../store/actions/authorization.actions';
import { getLoggedIn } from '../../../store/selectors/ui.selector';

const ProfileControl = ({
  name,
  expiredTime,
  role,
  setLogout,
  setLoggedIn,
  setOpenModalWindow,
}) => {
  const handleClickLogout = () => {
    setLogout(null);
    setLoggedIn(false);
    setOpenModalWindow(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '300px',
      }}
    >
      <AvatarPicture nameProfile={name} />
      <ProfileDescription nameProfile={name} roleProfile={role} />
      <ProfileLogout handleClickLogout={handleClickLogout} />
      <DescriptionOwn />
    </Box>
  );
};

const mapState = state => {
  return {
    modalType: state.ui.typeModalWindow,
    name: getName(state),
    expiredTime: getExpiredTime(state),
    role: getRole(state),
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  setLogout: authData,
  setLoggedIn: loggedIn,
  setOpenModalWindow: openModalWindow,
};

export default connect(mapState, mapDispatch)(ProfileControl);

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
