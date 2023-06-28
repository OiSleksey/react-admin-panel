import * as React from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './DrawerPanelBar.scss';
import CreateBtn from '../CreateBtn/CreateBtn';
import UserDisplayControl from '../UserDisplayControl/UserDisplayControl';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../../store/actions/ui.actions';
import { getAllUsersDispath } from '../../../../store/middleware/getAllUser.middleware';
import { getToken } from '../../../../store/selectors/authorization.selector';

const DrawerPanelBar = ({ setTypeModalWindow, setOpenModalWindow }) => {
  const handleClickCreate = () => {
    setTypeModalWindow('createUser');
    setOpenModalWindow(true);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            padding: { xs: '5px', sm: '12px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              minWidth: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <CreateBtn handleClick={handleClickCreate} />
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <UserDisplayControl />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapState = state => {
  return {
    token: getToken(state),
  };
};

const mapDispath = {
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispath)(DrawerPanelBar);
