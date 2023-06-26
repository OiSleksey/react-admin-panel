import * as React from 'react';
import { connect } from 'react-redux';
import { Box, styled } from '@mui/system';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '2px 15px 2px 15px',
  borderRadius: '20px !important',
  width: 'fit-content',
  margin: '0 auto',
  cursor: 'pointer',
  backgroundColor: theme.palette.background.default,
  boxShadow: '0 0 10px #1a1c22',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.divider,
  },
}));

const DescriptionOwn = ({ handleClickLogout }) => {
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
  // const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: '100%',
        padding: '20px',
      }}
    >
      <StyledBox
        elevation={3}
        // className="not-found-page__return"
        // onHover={handleHover}
        onClick={handleClickLogout}
      >
        <Typography style={{ margin: '0 10px 0 0', display: 'inline-block' }}>
          Log out
        </Typography>
        <LogoutSharpIcon />
      </StyledBox>
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

export default connect(null, null)(DescriptionOwn);
