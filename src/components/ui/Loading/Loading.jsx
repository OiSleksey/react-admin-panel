import * as React from 'react';
import { connect } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { getBackDropLoading } from '../../../store/selectors/ui.selector';

const Loading = ({ stateLoading }) => {
  return (
    <Box>
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
    </Box>
  );
};

const mapState = state => {
  return {
    stateLoading: getBackDropLoading(state),
  };
};

export default connect(mapState)(Loading);
