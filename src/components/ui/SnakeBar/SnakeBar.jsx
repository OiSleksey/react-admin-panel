// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import { connect } from 'react-redux';
// import {
//   errorMessage,
//   positiveMessage,
// } from '../../../store/actions/ui.actions';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const openMessageTime = 3000;

// const SnakeBar = ({
//   resErrorMessage,
//   resPositiveMessage,
//   typeSnake,
//   message,
// }) => {
//   const openSnakeBar = () => {
//     setOpen(true);
//   };

//   const closeSnakeBar = () => {
//     resErrorMessage(null);
//     resPositiveMessage(null);
//     setOpen(false);
//   };

//   React.useEffect(() => {
//     if (typeSnake === undefined && message === undefined) return;
//     openSnakeBar();
//     setTimeout(() => {
//       closeSnakeBar();
//     }, openMessageTime);
//   }, [typeSnake, message]);
//   const [open, setOpen] = React.useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <Stack spacing={2} sx={{ width: '100%' }}>
//       {/* <Button variant="outlined" onClick={openSnakeBar}>
//         Open success snackbar
//       </Button> */}
//       <Snackbar
//         open={open}
//         autoHideDuration={openMessageTime}
//         onClose={handleClose}
//       >
//         <Alert
//           onClose={handleClose}
//           severity={typeSnake}
//           sx={{ width: '100%' }}
//         >
//           {message}
//         </Alert>
//       </Snackbar>
//       {/* <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert> */}
//     </Stack>
//   );
// };

// // const mapState = state => {
// //   return {};
// // };

// // const mapDispath = {
// //   resErrorMessage: errorMessage,
// //   resPositiveMessage: positiveMessage,
// // };

// // export default connect(null, mapDispath)(SnakeBar);

import * as React from 'react';
import Button from '@mui/material/Button';
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
  console.log(typeSnake, message);
  React.useEffect(() => {
    console.log('before');
    if (typeSnake === undefined && message === undefined) return;
    console.log('after');
    openSnakeBar(message, typeSnake);
    // setTimeout(() => {
    // closeSnakeBar();
    // }, openMessageTime);
  }, [typeSnake, message]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const openSnakeBar = (message, variant) => {
    console.log('openSnakeBar');
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
  console.log(props);
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
