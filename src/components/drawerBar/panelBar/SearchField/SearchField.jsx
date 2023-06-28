import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { getArrConvertedAllUsers } from '../../../../store/selectors/dataUsers.selector';
import { getSearchUser } from '../../../../utils/searchUser';
import { displayDataUsers } from '../../../../store/actions/dataUsers.actions';
import { valueSearch } from '../../../../store/actions/filterTable.actions';
import { getThemeMode } from '../../../../store/selectors/ui.selector';

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
    // marginLeft: theme.spacing(1),
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
    padding: theme.spacing(1, 1, 1, 1),
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

const SearchField = ({
  arrAllUsers,
  setDisplayDataUsers,
  setValueSearch,
  themeMode,
}) => {
  const theme = useTheme();

  const handleChange = e => {
    const value = e.target.value;
    setValueSearch(value);
    if (value === '') return setDisplayDataUsers(arrAllUsers);
    const displayUsers = getSearchUser(arrAllUsers, value);
    setDisplayDataUsers(displayUsers);
  };

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      onChange={handleChange}
      onFocus={handleChange}
    >
      <Search
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.33)',
          fontWeight: 900,
          color:
            themeMode === 'dark'
              ? theme.palette.background.default
              : theme.palette.background.default,
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="
          Search by id, name, email…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
};

const mapState = state => {
  return {
    arrAllUsers: getArrConvertedAllUsers(state),
    themeMode: getThemeMode(state),
  };
};

const mapDispath = {
  setDisplayDataUsers: displayDataUsers,
  setValueSearch: valueSearch,
};

export default connect(mapState, mapDispath)(SearchField);
