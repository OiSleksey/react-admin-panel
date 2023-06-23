import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import { connect } from 'react-redux';
import {
  getActivePanel,
  getLoggedIn,
} from '../../../../store/selectors/ui.selector';
import { activePanel } from '../../../../store/actions/ui.actions';
import { Link } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';

const drawerWidth = '4rem';

const DesktopAppBar = ({
  activePanel,
  isLoggin,
  setActivePanel,
  handleClick,
  handleDrawerToggle,
  // handleGetAllUsers,
}) => {
  return (
    <Toolbar
      sx={{
        padding: { sm: '10px 0' },
        flexDirection: { sm: 'column' },
        alignItems: { sm: 'center' },
        justifyContent: { sm: 'space-between' },
        minHeight: { sm: '100vh' },
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

      <EmojiObjectsIcon
        fontSize="large"
        sx={{
          position: 'absolute',
          right: '10px',
          display: { sm: 'none' },
        }}
      />

      <Box>
        <EmojiObjectsIcon
          sx={{
            fontSize: '60px',
            // display: { sm: 'none' },
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </Box>

      <Box
        className="sidebar-icons"
        data-value="users"
        onClick={event => {
          // handleGetAllUsers();
          handleClick(event);
        }}
        sx={{
          width: { sm: '100%' },
          background: activePanel === 'users' ? 'grey' : 'transparent',
          display: isLoggin
            ? { xs: 'none', sm: 'block' }
            : { xs: 'none', sm: 'none' },
        }}
      >
        <Link to="/">
          <StorageIcon
            sx={{
              fontSize: '50px',
              // display: { sm: 'none' },
              display: { xs: 'none', sm: 'block' },
              margin: '10px auto',
            }}
          />
        </Link>
      </Box>

      <Link to="/login">
        <Box
          className="sidebar-icons"
          data-value="login"
          onClick={handleClick}
          sx={{
            width: { sm: '100%' },
            background: activePanel === 'login' ? 'grey' : 'transparent',
            display: !isLoggin
              ? { xs: 'none', sm: 'block' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <LoginIcon
            sx={{
              fontSize: '50px',
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
        <Link to="/avatar">
          <Box
            className="sidebar-icons"
            data-value="avatar"
            onClick={handleClick}
            sx={{
              background: activePanel === 'avatar' ? 'grey' : 'transparent',
              width: { sm: '100%' },
              marginBottom: { sm: '20px ' },
              padding: { sm: '7px 0' },
              display: isLoggin
                ? { xs: 'none', sm: 'block' }
                : { xs: 'none', sm: 'none' },
            }}
          >
            <HdrAutoIcon
              sx={{
                fontSize: '50px',
                // display: { sm: 'none' },
                display: { xs: 'none', sm: 'block' },
                margin: { sm: '0 auto ' },
              }}
            />
          </Box>
        </Link>
        <Link to="/setting">
          <Box
            className="sidebar-icons"
            data-value="setting"
            onClick={handleClick}
            sx={{
              background: activePanel === 'setting' ? 'grey' : 'transparent',
              width: { sm: '100%' },
              padding: { sm: '10px 0' },
            }}
          >
            <SettingsIcon
              sx={{
                fontSize: '40px',
                // display: { sm: 'none' },
                display: { xs: 'none', sm: 'block' },
                margin: '0 auto',
              }}
            />
          </Box>
        </Link>
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
