import * as React from 'react';
import { connect } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {
  errorMessage,
  positiveMessage,
} from '../../../store/actions/ui.actions';

function SnakeBar({ propsSnake }) {
  const { resErrorMessage, resPositiveMessage, typeSnake, message } =
    propsSnake;

  React.useEffect(() => {
    if (typeSnake === undefined && message === undefined) return;
    openSnakeBar(message, typeSnake);
  }, [typeSnake, message]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const openSnakeBar = (message, variant) => {
    resErrorMessage(null);
    resPositiveMessage(null);
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
      action: key => (
        <IconButton aria-label="close" onClick={() => closeSnackbar(key)}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };
}

const IntegrationNotistack = props => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <SnakeBar propsSnake={props} />
    </SnackbarProvider>
  );
};

const mapDispath = {
  resErrorMessage: errorMessage,
  resPositiveMessage: positiveMessage,
};

export default connect(null, mapDispath)(IntegrationNotistack);
