import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import LoginIcon from '@mui/icons-material/Login';
import StorageIcon from '@mui/icons-material/Storage';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import {
  getActivePanel,
  getLoggedIn,
} from '../../../../store/selectors/ui.selector';
import { activePanel } from '../../../../store/actions/ui.actions';
import OiLogo from '../../../../assets/Images/OI-logo.svg';

const MobileAppBar = ({
  handleDrawerToggle,
  handleClick,
  activePanel,
  isLoggin,
  handleClickSetModal,
}) => {
  const theme = useTheme();
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
        background: theme.palette.primary[500],
      }}
    >
      <Box>
        <Avatar
          alt="logo"
          src={OiLogo}
          sx={{
            position: 'absolute',
            right: 14,
            display: { sm: 'none', sx: 'block' },
            width: '30px',
            height: '30px',
            marginTop: '-33px',
          }}
        />
      </Box>

      {/* <Link to="/login" style={{ display: !isLoggin ? 'block' : 'none' }}>
        <Box
          className="sidebar-icons"
          data-value="login"
          onClick={handleClick}
          sx={{
            padding: '5px 0',
            width: { sm: '100%' },
            color: theme.palette.text.primary,
            background:
              activePanel === 'login'
                ? theme => theme.palette.background.default
                : 'rgba(255, 255, 255, 0)',
            display: !isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <LoginIcon
            sx={{
              fontSize: '40px',
              display: { sm: 'none', xs: 'block' },
              margin: '10px auto',
            }}
          />
        </Box>
      </Link> */}

      <Box>
        <Link to="/" style={{ display: isLoggin ? 'block' : 'none' }}>
          <Box
            className="sidebar-icons"
            data-value="users"
            onClick={handleClick}
            sx={{
              padding: '5px 0',
              width: { sm: '100%' },
              color: theme.palette.text.primary,
              background:
                activePanel === 'users'
                  ? theme => theme.palette.background.default
                  : 'rgba(255, 255, 255, 0)',
              display: isLoggin
                ? { xs: 'block', sm: 'none' }
                : { xs: 'none', sm: 'none' },
            }}
          >
            <StorageIcon
              sx={{
                fontSize: '40px',
                display: { sm: 'none', xs: 'block' },
                margin: '10px auto',
              }}
            />
          </Box>
        </Link>
        <Box
          className="sidebar-icons"
          data-value="profile"
          onClick={handleClickSetModal}
          sx={{
            cursor: 'pointer',
            width: { xs: '100%' },
            // marginBottom: { xs: '5px ' },
            padding: { xs: '7px 0' },
            display: isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <HdrAutoIcon
            sx={{
              fontSize: '40px',
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
