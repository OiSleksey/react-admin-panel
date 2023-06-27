import * as React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { getIsProgress } from '../../../store/selectors/ui.selector';

const Progress = ({ isProgress }) => {
  return (
    <motion.div
      animate={{
        opacity: isProgress ? 1 : 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    </motion.div>
  );
};

const mapState = state => {
  return {
    isProgress: getIsProgress(state),
  };
};

export default connect(mapState)(Progress);
