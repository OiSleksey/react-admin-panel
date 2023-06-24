import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterMenu from '../FilterMenu/FilterMenu';

export default function EnhancedTableToolbar({ numSelected }) {
  const buttonRef = React.useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Users
        </Typography>
      )}
      <Tooltip
        onClick={handleClick}
        // title="Filter list"
      >
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <FilterMenu buttonRef={buttonRef} />
    </Toolbar>
  );
}
