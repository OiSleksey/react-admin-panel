import * as React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { connect } from 'react-redux';
import {
  errorMessage,
  positiveMessage,
} from '../../../store/actions/ui.actions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SnakeBar({ propsSnake }) {
  const { resErrorMessage, resPositiveMessage, typeSnake, message } =
    propsSnake;
  // console.log(typeSnake, message);
  React.useEffect(() => {
    // console.log('before');
    if (typeSnake === undefined && message === undefined) return;
    // console.log('after');
    openSnakeBar(message, typeSnake);
    // setTimeout(() => {
    // closeSnakeBar();
    // }, openMessageTime);
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

  // return (
  //   <React.Fragment>
  //     {/* <Button
  //     // onClick={handleClickVariant('success')}
  //     >
  //       Show success snackbar
  //     </Button> */}
  //   </React.Fragment>
  // );
}

const IntegrationNotistack = props => {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnakeBar propsSnake={props} />
    </SnackbarProvider>
  );
};

const mapDispath = {
  resErrorMessage: errorMessage,
  resPositiveMessage: positiveMessage,
};

export default connect(null, mapDispath)(IntegrationNotistack);
