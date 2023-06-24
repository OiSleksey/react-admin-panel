import * as React from 'react';
import Box from '@mui/material/Box';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import SettingsIcon from '@mui/icons-material/Settings';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import './DrawerAppBar.scss';
import LoginIcon from '@mui/icons-material/Login';
import { connect } from 'react-redux';
import {
  getActivePanel,
  getLoggedIn,
} from '../../../../store/selectors/ui.selector';
import { activePanel } from '../../../../store/actions/ui.actions';
import { Link } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// const drawerWidth = '4rem';

const MobileAppBar = ({
  handleDrawerToggle,
  handleClick,
  activePanel,
  isLoggin,
  setActivePanel,
  handleClickSetModal,
  // handleGetAllUsers,
}) => {
  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: { sm: '100%' },
        padding: { xs: '50px 0' },
      }}
    >
      <Box>
        <EmojiObjectsIcon
          fontSize="large"
          sx={{
            display: { sm: 'none' },
            opacity: { xs: '0' },
          }}
        />
      </Box>
      <Link to="/">
        <Box
          className="sidebar-icons"
          data-value="users"
          onClick={handleClick}
          sx={{
            width: { sm: '100%' },
            background: activePanel === 'users' ? 'grey' : '#08c',
            display: isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <StorageIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: '10px auto',
            }}
          />
        </Box>
      </Link>
      <Link to="/login">
        <Box
          className="sidebar-icons"
          data-value="login"
          onClick={handleClick}
          sx={{
            width: { sm: '100%' },
            background: activePanel === 'login' ? 'grey' : '#08c',
            display: !isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <LoginIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: '10px auto',
            }}
          />
        </Box>
      </Link>

      <Box>
        <Box
          className="sidebar-icons"
          data-value="profile"
          onClick={handleClickSetModal}
          sx={{
            cursor: 'pointer',
            width: { xs: '100%' },
            marginBottom: { xs: '20px ' },
            padding: { xs: '7px 0' },
            display: isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <HdrAutoIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: { xs: '0 auto ' },
            }}
          />
        </Box>

        <Box
          className="sidebar-icons"
          data-value="setting"
          onClick={handleClickSetModal}
          sx={{
            cursor: 'pointer',
            width: { xs: '100%' },
            padding: { xs: '10px 0' },
          }}
        >
          <RoomPreferencesIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: '0 auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const mapState = state => {
  return {
    activePanel: getActivePanel(state),
    isLoggin: getLoggedIn(state),
  };
};

const mapDispath = {
  setActivePanel: activePanel,
};

export default connect(mapState, mapDispath)(MobileAppBar);

// import { connect } from 'react-redux';

//   const handleClick = () => {
//     getAllUserChallenge(token);
//   };
// const mapDispatch = {
//   setActivePanel: activePanel,
//   getAllUserChallenge: getAllUsersDispath,
// };

// export default connect(mapState, mapDispatch)(PanelPage);