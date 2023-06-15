import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginPage from '../../views/LoginPage/LoginPage';
import PanelPage from '../../views/PanelPage/PanelPage';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const styleBody = {
  // display: 'flex',
  width: '100%',
  // alignItems: 'center',
  // justifyContent: 'center',
  bgcolor: 'background.default',
  color: 'text.primary',
  borderRadius: 1,
};

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={styleBody}>
      <div className="change-theme">
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<PanelPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
