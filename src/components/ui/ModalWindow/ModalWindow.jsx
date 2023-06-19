import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { openModalWindow } from '../../../store/actions/ui.actions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ModalWindow = ({ openModalWindow, setOpenModalWindow, children }) => {
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModalWindow(true);
  };
  const handleClose = () => {
    setOpenModalWindow(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModalWindow}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {children}
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogContent>
        {/* <DialogActions>
     
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
};

const mapState = state => {
  return {
    openModalWindow: state.ui.openModalWindow,
  };
};

const mapDispath = {
  setOpenModalWindow: openModalWindow,
};

export default connect(mapState, mapDispath)(ModalWindow);
