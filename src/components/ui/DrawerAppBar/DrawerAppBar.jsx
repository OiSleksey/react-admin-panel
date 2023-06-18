import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './DrawerAppBar.scss';
import LoginIcon from '@mui/icons-material/Login';
import { connect } from 'react-redux';
import {
  getActivePanel,
  getLoggedIn,
} from '../../../store/selectors/getTokenLocalStorage.selector';
import { activePanel } from '../../../store/actions/ui.actions';
import { Link } from 'react-router-dom';

const drawerWidth = '4rem';

const DrawerAppBar = ({ activePanel, setActivePanel, isLoggin, window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //active mobile or desktop version
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  //active panel handler
  const handleClick = event => {
    const target = event.target;
    const activeParent = target.closest('.sidebar-icons');
    const dataset = activeParent.dataset.value;
    setActivePanel(dataset);
  };

  //mobile version
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Link to="/">
        <Box
          className="sidebar-icons"
          data-value="users"
          onClick={handleClick}
          sx={{
            width: { sm: '100%' },
            background: activePanel === 'users' ? 'grey' : 'transparent',
            display: isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <PeopleAltIcon
            sx={{
              fontSize: '50px',
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
            background: activePanel === 'login' ? 'grey' : 'transparent',
            display: !isLoggin
              ? { xs: 'block', sm: 'none' }
              : { xs: 'none', sm: 'none' },
          }}
        >
          <LoginIcon
            sx={{
              fontSize: '50px',
              // display: { sm: 'none' },
              display: { sm: 'none', xs: 'block' },
              margin: '10px auto',
            }}
          />
        </Box>
      </Link>

      <Box>
        <Link to="/avatar">
          <Box
            className="sidebar-icons"
            data-value="avatar"
            onClick={handleClick}
            sx={{
              background: activePanel === 'avatar' ? 'grey' : 'transparent',
              width: { xs: '100%' },
              marginBottom: { xs: '20px ' },
              padding: { xs: '7px 0' },
              display: isLoggin
                ? { xs: 'none', sm: 'block' }
                : { xs: 'none', sm: 'none' },
            }}
          >
            <HdrAutoIcon
              sx={{
                fontSize: '50px',
                // display: { sm: 'none' },
                display: { sm: 'none', xs: 'block' },
                margin: { xs: '0 auto ' },
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
              width: { xs: '100%' },
              padding: { xs: '10px 0' },
            }}
          >
            <SettingsIcon
              sx={{
                fontSize: '40px',
                // display: { sm: 'none' },
                display: { sm: 'none', xs: 'block' },
                margin: '0 auto',
              }}
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //desktop version
  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: { sm: '100%' },
          width: { sm: '4rem' },
          left: { sm: '0' },
        }}
      >
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
            onClick={handleClick}
            sx={{
              width: { sm: '100%' },
              background: activePanel === 'users' ? 'grey' : 'transparent',
              display: isLoggin
                ? { xs: 'none', sm: 'block' }
                : { xs: 'none', sm: 'none' },
            }}
          >
            <Link to="/">
              <PeopleAltIcon
                hover
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
                  background:
                    activePanel === 'setting' ? 'grey' : 'transparent',
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
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: { xs: '0', sm: '4rem' },
        }}
      ></Box>
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

export default connect(mapState, mapDispath)(DrawerAppBar);
