import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import DescriptionOwner from '../../ui/DescriptionOwner/DescriptionOwner';

export default function Footer() {
  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
      }}
    >
      <DescriptionOwner />
    </Paper>
  );
}

// const [widthInput, setWidthInput] = React.useState(35);
// const matchesVerPhone = useMediaQuery('(min-width:0px)');
// const matchesHorPhone = useMediaQuery('(min-width:500px)');
// const matchesDesktop = useMediaQuery('(min-width:900px)');

// function setWidthMedia() {
//   // console.log('matchesDesktop', matchesDesktop);
//   if (matchesDesktop) return setWidthInput(35);
//   // console.log('matchesHorPhone', matchesHorPhone);
//   if (matchesHorPhone) return setWidthInput(20);
//   // console.log('matchesHorPhone', matchesVerPhone);
//   if (matchesVerPhone) return setWidthInput(35);
// }

// React.useEffect(() => {
//   setWidthMedia();
//   // console.log(widthInput);
// }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);
