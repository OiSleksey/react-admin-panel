import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import SettingsIcon from '@mui/icons-material/Settings';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import LoginIcon from '@mui/icons-material/Login';
import { connect } from 'react-redux';
import {
  getActivePanel,
  getLoggedIn,
} from '../../../../store/selectors/ui.selector';
import { activePanel } from '../../../../store/actions/ui.actions';
import { Link } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import { useTheme } from '@mui/material/styles';
import OiLogo from '../../../../assets/Images/OI-logo.svg';
import Avatar from '@mui/material/Avatar';

const drawerWidth = '4rem';

const DesktopAppBar = ({
  activePanel,
  isLoggin,
  setActivePanel,
  handleClick,
  handleDrawerToggle,
  handleClickSetModal,

  // handleGetAllUsers,
}) => {
  const theme = useTheme();
  return (
    <Toolbar
      sx={{
        padding: { sm: '10px 0 10px 0' },
        flexDirection: { sm: 'column', xs: 'row' },
        alignItems: { sm: 'space-between' },
        justifyContent: { sm: 'space-between', xs: 'space-between' },
        minHeight: { sm: '100vh' },
        width: '100%',
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Avatar
        alt="logo"
        src={OiLogo}
        sx={{
          position: 'absolute',
          right: 14,
          display: { sm: 'none', sx: 'block' },
          width: '30px',
          height: '30px',
        }}
      />

      <Box>
        <Avatar
          alt="logo"
          src={OiLogo}
          sx={{ width: '40px', display: { xs: 'none', sm: 'block' } }}
        />

        {/* <EmojiObjectsIcon
          sx={{
            fontSize: '60px',
            // display: { sm: 'none' },
            display: { xs: 'none', sm: 'block' },
          }}
        /> */}
      </Box>
      <Link to="/" style={{ width: '100%' }}>
        <Box
          className="sidebar-icons"
          data-value="users"
          onClick={event => {
            // handleGetAllUsers();
            handleClick(event);
          }}
          sx={{
            width: { sm: '100%' },
            color:
              activePanel === 'users'
                ? theme.palette.primary[500]
                : theme.palette.text.primary,
            background:
              activePanel === 'users'
                ? theme.palette.background.default
                : '#FFFFFF00',
            display: isLoggin
              ? { xs: 'none', sm: 'block' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <StorageIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { xs: 'none', sm: 'block' },
              margin: '10px auto',
            }}
          />
        </Box>
      </Link>

      <Link to="/login" style={{ width: '100%' }}>
        <Box
          className="sidebar-icons"
          data-value="login"
          onClick={handleClick}
          sx={{
            color:
              activePanel === 'login'
                ? theme.palette.primary[500]
                : theme.palette.text.primary,
            background:
              activePanel === 'login'
                ? theme.palette.background.default
                : '#FFFFFF00',
            display: !isLoggin
              ? { xs: 'none', sm: 'block' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <LoginIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { xs: 'none', sm: 'block' },
              margin: '10px auto',
            }}
          />
        </Box>
      </Link>

      <Box
        sx={{
          width: { sm: '100%' },
        }}
      >
        {/* <Link to="/profile"> */}
        <Box
          className="sidebar-icons"
          data-value="profile"
          onClick={handleClickSetModal}
          sx={{
            cursor: 'pointer',
            background: activePanel === 'profile' ? 'grey' : 'transparent',
            width: { sm: '100%' },
            marginBottom: { sm: '10px ' },
            padding: { sm: '7px 0' },
            display: isLoggin
              ? { xs: 'none', sm: 'block' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <HdrAutoIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { xs: 'none', sm: 'block' },
              margin: { sm: '0 auto ' },
            }}
          />
        </Box>
        {/* </Link> */}

        <Box
          className="sidebar-icons"
          data-value="setting"
          onClick={handleClickSetModal}
          sx={{
            cursor: 'pointer',
            background: activePanel === 'setting' ? 'grey' : 'transparent',
            width: { sm: '100%' },
            padding: { sm: '10px 0' },
          }}
        >
          <RoomPreferencesIcon
            sx={{
              fontSize: '40px',
              // display: { sm: 'none' },
              display: { xs: 'none', sm: 'block' },
              margin: '0 auto',
            }}
          />
        </Box>
      </Box>
    </Toolbar>
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

export default connect(mapState, mapDispath)(DesktopAppBar);

// import { connect } from 'react-redux';

//   const handleClick = () => {
//     getAllUserChallenge(token);
//   };
// const mapDispatch = {
//   setActivePanel: activePanel,
//   getAllUserChallenge: getAllUsersDispath,
// };

// export default connect(mapState, mapDispatch)(PanelPage);
