import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { connect } from 'react-redux';
import { openModalWindow } from '../../../store/actions/ui.actions';
import { typeModalWindow } from '../../../store/actions/ui.actions';

const options = ['Edit'];

const ITEM_HEIGHT = 48;
const MenuBtn = ({
  id,
  handleClickEdit,
  setOpenModalWindow,
  setTypeModalWindow,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = event => {
    setTypeModalWindow('changeUserData');
    setOpenModalWindow(true);
    // console.log(event.target.dataset.id);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '7ch',
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            data-id={id}
            sx={{ margin: '0 auto' }}
            key={option}
            selected={option === 'Pyxis'}
            onClick={event => {
              handleClose();
              handleClickEdit(event);
              handleClickOpen(event);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const mapDispath = {
  setOpenModalWindow: openModalWindow,
  setTypeModalWindow: typeModalWindow,
  // setChangeDataUserId: сhangeDataUserId
};
export default connect(null, mapDispath)(MenuBtn);
