import * as React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import Version from '../Version/Version';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Instruction = ({
  logIn,
  setRememberToken,
  loggedIn,
  setOpenModalWindow,
  openModalWindow,
  changeUserData,
  setPutUserDispath,
  token,
}) => {
  const [widthInput, setWidthInput] = React.useState(35);
  const matchesVerPhone = useMediaQuery('(min-width:0px)');
  const matchesHorPhone = useMediaQuery('(min-width:500px)');
  const matchesDesktop = useMediaQuery('(min-width:900px)');

  function setWidthMedia() {
    if (matchesDesktop) return setWidthInput(35);
    if (matchesHorPhone) return setWidthInput(20);
    if (matchesVerPhone) return setWidthInput(35);
  }

  React.useEffect(() => {
    setWidthMedia();
  }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);

  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' },
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: '10px 20px ',
      }}
    >
      <Box>
        <Typography
          sx={{
            marginBottom: '10px',
            borderBottom: `1px solid ${theme.palette.text.secondary}`,
          }}
        >
          The data for logging into the admin control panel are indicated above.
          If the server is not working, then switch " Work from a real server:"
          to another position. In this position, the Admin panel works with a
          fake server and data stored in localStorage. Thank you for choosing
          our product!
        </Typography>

        <Version />
      </Box>
    </Box>
  );
};

// const mapState = state => {
//   return {
//     loggedIn: state.ui.loggedIn,
//     token: state.authorization.code,
//     openModalWindow: state.ui.openModalWindow,
//   };
// };

// const mapDispath = {
//   logIn: autorizationDispatch,
//   setRememberToken: rememberAuthorized,
//   setOpenModalWindow: openModalWindow,
//   setPutUserDispath: putUserDispath,
// };

export default connect(null, null)(Instruction);
