import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import AvatarPicture from '../AvatarPicture/AvatarIcon';
import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileLogout from '../ProfileLogout/ProfileLogout';
import Version from '../../ui/Version/Version';
import { loggedIn } from '../../../store/actions/ui.actions';
import { openModalWindow } from '../../../store/actions/ui.actions';
import {
  getExpiredTime,
  getName,
  getRole,
} from '../../../store/selectors/authorization.selector';
import { authData } from '../../../store/actions/authorization.actions';

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
      <ProfileDescription
        nameProfile={name}
        roleProfile={role}
        expiredTime={expiredTime}
      />
      <ProfileLogout handleClickLogout={handleClickLogout} />
      <Version />
    </Box>
  );
};

const mapState = state => {
  return {
    name: getName(state),
    expiredTime: getExpiredTime(state),
    role: getRole(state),
  };
};

const mapDispatch = {
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
