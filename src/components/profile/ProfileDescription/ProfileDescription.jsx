import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProfileDescription = ({ roleProfile, nameProfile }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        textAlign: 'center',
        padding: '20px 20px 0 20px',
      }}
    >
      <Box>
        <h3>{nameProfile}</h3>
      </Box>
      <Box>
        <p> Role: {roleProfile}</p>
      </Box>
    </Box>
  );
};

export default ProfileDescription;

// const [widthInput, setWidthInput] = React.useState(35);
// const matchesVerPhone = useMediaQuery('(min-width:0px)');
// const matchesHorPhone = useMediaQuery('(min-width:500px)');
// const matchesDesktop = useMediaQuery('(min-width:900px)');

// function setWidthMedia() {
//   if (matchesDesktop) return setWidthInput(35);
//   if (matchesHorPhone) return setWidthInput(20);
//   if (matchesVerPhone) return setWidthInput(35);
// }

// React.useEffect(() => {
//   setWidthMedia();
// }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);
