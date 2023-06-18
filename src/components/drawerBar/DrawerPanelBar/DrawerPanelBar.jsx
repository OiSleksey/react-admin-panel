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
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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
export default function DrawerPanelBar() {
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
          <Btn
            variant="contained"
            type="button"
            text="Filter"
            width={widthBtn}
            // sx={{ marginRight: '35px' }}
          />

          <Box
            sx={{
              //   flexGrow: 1,
              display: 'flex',
            }}
          >
            <AutorenewIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ fontSize: '35px', mr: 2, ml: 2 }}
            >
              <MenuIcon />
            </AutorenewIcon>

            <PersonAddIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                fontSize: '35px',
                mr: 2,
                //   flexGrow: 1,
                //   display: { xs: 'none', sm: 'block' },
                justifySelf: 'end',
              }}
            />
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
}
