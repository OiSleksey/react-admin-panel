import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import DescriptionOwner from '../../ui/DescriptionOwner/DescriptionOwner';
// import AvatarPicture from '../AvatarPicture/AvatarIcon';
// import ProfileDescription from '../ProfileDescription/ProfileDescription';
// import ProfileLogout from '../ProfileLogout/ProfileLogout';

// import { activePanel, loggedIn } from '../../../store/actions/ui.actions';
// import {
//   typeModalWindow,
//   openModalWindow,
// } from '../../../store/actions/ui.actions';
// import {
//   getExpiredTime,
//   getName,
//   getRole,
// } from '../../../store/selectors/authorization.selector';
// import { authData } from '../../../store/actions/authorization.actions';
// import { getLoggedIn } from '../../../store/selectors/ui.selector';
// import Version from '../../ui/Version/Version';

const Footer = ({
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
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
      }}
    >
      <DescriptionOwner />
    </Paper>
  );
};

// const mapState = state => {
//   return {
//     modalType: state.ui.typeModalWindow,
//     name: getName(state),
//     expiredTime: getExpiredTime(state),
//     role: getRole(state),
//   };
// };

// const mapDispatch = {
//   setActivePanel: activePanel,
//   setTypeModalWindow: typeModalWindow,
//   setOpenModalWindow: openModalWindow,
//   setLogout: authData,
//   setLoggedIn: loggedIn,
//   setOpenModalWindow: openModalWindow,
// };

export default connect(null, null)(Footer);

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
