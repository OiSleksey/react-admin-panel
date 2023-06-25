import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwitchFilter from '../SwitchFilter/SwitchFilter';
import { Box } from '@mui/material';
import { filterSwitchState } from '../../../store/actions/filterTable.actions';
import { getObjStateSwitch } from '../../../store/selectors/filterTable.selector';
import { connect } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const FilterMenu = ({ buttonRef, objStateSwitch, setStateSwitch }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, nameSwitch) => {
    const isChecked = event.target.checked;
    setStateSwitch(nameSwitch, isChecked);
  };

  const namesDataServer = [
    'id',
    'name',
    'email',
    'phone',
    'homePhone',
    'createdAt',
    'hireDate',
    'dateOfBirth',
    'lastLoginAt',
    'blocked',
    'role',
  ];

  const namesLabel = [
    'Id',
    'Name',
    'Email',
    'Phone',
    'Home phone',
    'Created',
    'Date of hire',
    'Birthday',
    'Last entry',
    'Blocked',
    'Role',
  ];

  const objState = objStateSwitch === {} ? {} : objStateSwitch;

  const items = namesDataServer.map((value, index) => (
    <MenuItem key={value} sx={{ padding: '0 20px' }}>
      <SwitchFilter
        dataName={value}
        labelName={namesLabel[index]}
        handleChange={handleChange}
        isChecked={objState?.[value]}
      />
    </MenuItem>
  ));

  return (
    <div>
      <Button
        sx={{ width: '0', minWidth: '0', height: '0', padding: '0' }}
        ref={buttonRef}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      ></Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ display: 'flex', padding: '4px 10px 0 10px' }}>
          <Box sx={{ margin: '0 10px 0 0 ', textAlign: 'center' }}>
            Show table columns
          </Box>
          <Box>
            <IconButton
              onClick={handleClose}
              aria-label="close"
              sx={{
                minWidth: '24px',
                minHeight: '24px',
                position: 'absolute',
                right: '10px',
                top: '9px',
                // color: theme => theme.palette.grey[500],
              }}
            />
            <CloseIcon />
          </Box>
        </Box>
        {items}
      </StyledMenu>
    </div>
  );
};

const mapState = state => {
  return {
    objStateSwitch: getObjStateSwitch(state),
  };
};

const mapDispatch = {
  setStateSwitch: filterSwitchState,
};

export default connect(mapState, mapDispatch)(FilterMenu);
