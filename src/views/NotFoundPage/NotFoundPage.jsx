import * as React from 'react';
import './NotFoundPage.scss';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import './NotFoundPage.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getActivePanel, getLoggedIn } from '../../store/selectors/ui.selector';

const styleBody = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'background.default',
  color: 'text.primary',
  borderRadius: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  minHeight: '100vh',
  zIndex: '1101',
};

const styleMain = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
};

const NotFoundPage = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!loggedIn) return navigate('/login');
    navigate('/');
  };

  const [sizeHeader, setSizeHeader] = React.useState('h1');
  const matchesVerPhone = useMediaQuery('(min-width:0px)');
  const matchesHorPhone = useMediaQuery('(min-width:500px)');
  const matchesDesktop = useMediaQuery('(min-width:900px)');

  function setSizeMedia() {
    if (matchesDesktop) return setSizeHeader('h1');
    if (matchesHorPhone) return setSizeHeader('h2');
    if (matchesVerPhone) return setSizeHeader('h2');
  }

  React.useEffect(() => {
    setSizeMedia();
  }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);

  return (
    <Box sx={styleBody}>
      <Box sx={styleMain}>
        <Typography
          variant={sizeHeader}
          sx={{
            textAlign: 'center',
            marginBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.32)',
          }}
        >
          Error 404
        </Typography>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', marginBottom: '60px' }}
        >
          Not found page
        </Typography>
        <Paper
          elevation={3}
          className="not-found-page__return"
          onClick={handleRedirect}
          sx={{
            padding: '2px 15px 2px 15px',
            borderRadius: '20px !important',
            // display: 'inline',
            width: 'fit-content',
            margin: '0 auto',
          }}
        >
          {/* <span>return on work page</span> */}
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', display: 'inline-flex' }}
          >
            return on work page
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

const mapState = state => {
  return {
    loggedIn: getLoggedIn(state),
  };
};

export default connect(mapState)(NotFoundPage);
