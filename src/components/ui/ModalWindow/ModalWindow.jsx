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
import Box from '@mui/material/Box';
import './ModalWindow.scss';

import { connect } from 'react-redux';
import { openModalWindow } from '../../../store/actions/ui.actions';
import ChangeUserDataForm from '../../forms/ChangeUserDataForm/ChangeUserDataForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    maxWidth: '100%',
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

const ModalWindow = ({
  openModalWindow,
  setOpenModalWindow,
  children,
  titleModal,
}) => {
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModalWindow(true);
  };
  const handleClose = () => {
    setOpenModalWindow(false);
  };

  return (
    <Box elevation={10}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModalWindow}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {titleModal}
        </BootstrapDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </Box>
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
