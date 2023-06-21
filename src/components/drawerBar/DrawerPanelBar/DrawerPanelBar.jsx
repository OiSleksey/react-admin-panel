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
import DisplayAllUsers from '../../ui/DisplayAllUsers/DisplayAllUsers';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
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

  const handleClickUpdate = () => {
    getAllUser(token);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        marginBottom: '1rem',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              //   flexGrow: 1,
              display: 'flex',
            }}
          >
            <DisplayAllUsers handleClick={handleClickUpdate} />
            <UpdateBtn handleClick={handleClickUpdate} />
            <CreateBtn handleClick={handleClickCreate} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                  justifySelf: 'end',
                }}
              />
            </Search>
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