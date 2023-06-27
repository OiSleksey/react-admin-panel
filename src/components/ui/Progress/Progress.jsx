import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { connect } from 'react-redux';
import { getIsProgress } from '../../../store/selectors/ui.selector';
import { motion, AnimatePresence } from 'framer-motion';

const Progress = ({ isProgress }) => {
  console.log(isProgress);
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
