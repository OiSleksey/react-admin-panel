import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { getBackDropLoading } from '../../../store/selectors/ui.selector';

const Loading = ({ stateLoading }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
        open={stateLoading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

const mapState = state => {
  return {
    stateLoading: getBackDropLoading(state),
  };
};

export default connect(mapState)(Loading);
