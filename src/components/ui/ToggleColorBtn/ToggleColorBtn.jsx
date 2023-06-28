import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { setThemeMode } from '../../../store/actions/ui.actions';

const ToggleColorBtn = ({ handleClickTheme, stateMode, setThemeModeColor }) => {
  React.useEffect(() => {
    setThemeModeColor(stateMode);
  }, [stateMode]);

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={handleClickTheme}>
      {stateMode} mode
      <IconButton sx={{ ml: 1 }} color="inherit">
        {stateMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

const mapDispath = {
  setThemeModeColor: setThemeMode,
};

export default connect(null, mapDispath)(ToggleColorBtn);
