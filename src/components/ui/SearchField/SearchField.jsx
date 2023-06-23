import * as React from 'react';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { connect } from 'react-redux';
import { getArrConvertedAllUsers } from '../../../store/selectors/dataUsers.selector';
import { getSearchUser } from '../../../utils/searchUser';
import { displayDataUsers } from '../../../store/actions/dataUsers.actions';
// import Btn from '../../forms/Btn/Btn';
// import CreateBtn from '../../ui/CreateBtn/CreateBtn';
// import UpdateBtn from '../../ui/UpdateBtn/UpdateBtn';
// import {
//   typeModalWindow,
//   openModalWindow,
// } from '../../../store/actions/ui.actions';
// import { connect } from 'react-redux';
// import { getAllUsersDispath } from '../../../store/middleware/requestsServer.middleware';
// import DisplayAllUsers from '../../ui/DisplayAllUsers/DisplayAllUsers';

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
const SearchField = ({ handleClick, arrAllUsers, setDisplayDataUsers }) => {
  // const handleClick = e => {
  //   console.log(e.target.value);
  // };
  const handleChange = e => {
    // console.log('handleChange', e.target.value);
    const value = e.target.value;

    if (value === '') return setDisplayDataUsers(arrAllUsers);
    const displayUsers = getSearchUser(arrAllUsers, value);
    // console.log(displayUsers);
    setDisplayDataUsers(displayUsers);
  };
  // const handleBlur = e => {
  //   handleChange(e);
  //   console.log('handleBlur', e.target.value);
  // };

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      // onClick={handleClick}
      onChange={handleChange}
      onFocus={handleChange}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="
          Search by id, name, email…"
          inputProps={{ 'aria-label': 'search' }}
          sx={{
            justifySelf: 'end',
          }}
        />
      </Search>
    </Box>
  );
};

const mapState = state => {
  return {
    arrAllUsers: getArrConvertedAllUsers(state),
  };
};

const mapDispath = {
  setDisplayDataUsers: displayDataUsers,
};

export default connect(mapState, mapDispath)(SearchField);
