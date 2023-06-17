import * as React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import './ToggleColorBtn.scss';

const ToggleColorBtn = ({ handleClick, stateMode }) => {
  console.log(stateMode);
  return (
    <div className="change-theme">
      {stateMode} mode
      <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
        {stateMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export default ToggleColorBtn;
