import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { connect } from 'react-redux';
import { getIsProgress } from '../../../store/selectors/ui.selector';

const Progress = ({ isProgress }) => {
  console.log(isProgress);
  return (
    <Box sx={{ width: '100%', opacity: isProgress ? 1 : 0 }}>
      <LinearProgress />
    </Box>
  );
};

const mapState = state => {
  return {
    isProgress: getIsProgress(state),
  };
};

export default connect(mapState)(Progress);
