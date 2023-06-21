import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Btn from '../../forms/Btn/Btn';
import './DrawerPanelBar.scss';
import CreateBtn from '../../ui/CreateBtn/CreateBtn';
import UpdateBtn from '../../ui/UpdateBtn/UpdateBtn';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../store/actions/ui.actions';
import { connect } from 'react-redux';
import { getAllUsersDispath } from '../../../store/middleware/requestsServer.middleware';
import DisplayAllUsers from '../../ui/DisplayUsersBtn/DisplayUsersBtn';
import SearchField from '../../ui/SearchField/SearchField';
import UserDisplayControl from '../UserDisplayControl/UserDisplayControl';

const widthBtn = 12;

const DrawerPanelBar = ({
  setTypeModalWindow,
  setOpenModalWindow,
  getAllUser,
  token,
}) => {
  const handleClickCreate = () => {
    setTypeModalWindow('createUser');
    setOpenModalWindow(true);
  };

  // const handleClickUpdate = () => {
  //   getAllUser(token);
  // };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        marginBottom: '1rem',
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
              //   flexGrow: 1,
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
    token: state.authorization.code,
  };
};

const mapDispath = {
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispath)(DrawerPanelBar);
