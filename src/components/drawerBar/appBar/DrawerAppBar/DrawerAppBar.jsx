import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import './DrawerAppBar.scss';
import { connect } from 'react-redux';
import { getToken } from '../../../../store/selectors/authorization.selector';
import {
  getActivePanel,
  getLoggedIn,
} from '../../../../store/selectors/ui.selector';
import { activePanel } from '../../../../store/actions/ui.actions';
import MobileAppBar from '../MobileAppBar/MobileAppBar';
import DesktopAppBar from '../DesktopAppBar/DesktopAppBar';
import { getAllUsersDispath } from '../../../../store/middleware/getAllUser.middleware';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../../store/actions/ui.actions';

const drawerWidth = '4rem';

const DrawerAppBar = ({
  activePanel,
  setActivePanel,
  isLoggin,
  window,
  getAllUser,
  token,
  setTypeModalWindow,
  setOpenModalWindow,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //active mobile or desktop version
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  //active panel handler
  const handleClickSetModal = event => {
    const target = event.target;
    const activeParent = target.closest('.sidebar-icons');
    const dataset = activeParent.dataset.value;
    setTypeModalWindow(dataset);
    setOpenModalWindow(true);
  };
  const handleClick = event => {
    const target = event.target;
    const activeParent = target.closest('.sidebar-icons');
    const dataset = activeParent.dataset.value;
    setActivePanel(dataset);
  };
  // const handleGetAllUsers = () => {
  //   getAllUser(token);
  // };

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
          paddingRight: { sm: '0 !important' },
        }}
      >
        <DesktopAppBar
          handleDrawerToggle={handleDrawerToggle}
          handleClick={handleClick}
          handleClickSetModal={handleClickSetModal}
          // handleGetAllUsers={handleGetAllUsers}
        />
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
          <MobileAppBar
            handleDrawerToggle={handleDrawerToggle}
            handleClick={handleClick}
            handleClickSetModal={handleClickSetModal}
            // handleGetAllUsers={handleGetAllUsers}
            // isLoggin={isLoggin}
          />
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
    token: getToken(state),
  };
};

const mapDispath = {
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  setActivePanel: activePanel,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispath)(DrawerAppBar);

// import { connect } from 'react-redux';

//   const handleClick = () => {
//     getAllUserChallenge(token);
//   };
// const mapDispatch = {
//   setActivePanel: activePanel,
//   getAllUserChallenge: getAllUsersDispath,
// };

// export default connect(mapState, mapDispatch)(PanelPage);
