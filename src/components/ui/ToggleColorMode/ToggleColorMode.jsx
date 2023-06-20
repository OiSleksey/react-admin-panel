import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from '../../Main/Main';
import './ToggleColorMode.scss';
import DrawerAppBar from '../../drawerBar/DrawerAppBar/DrawerAppBar';
import { getThemeMode } from '../../../store/selectors/ui.selector';
import { setThemeMode } from '../../../store/actions/ui.actions';
import './ToggleColorMode.scss';
import { connect } from 'react-redux';
import { purple, amber, grey, deepOrange } from '@mui/material/colors';

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const styleBody = {
  display: 'flex',
  width: '100%',
  // alignItems: 'center',
  // justifyContent: 'center',
  bgcolor: 'background.default',
  color: 'text.primary',
  borderRadius: 1,
};

function Component() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const handleClick = () => {
    colorMode.toggleColorMode();
  };
  return (
    <Box sx={styleBody}>
      <DrawerAppBar />
      <Main handleClick={handleClick} stateMode={theme.palette.mode} />
    </Box>
  );
}

const ToggleColorMode = ({ themeModeColor, setThemeModeColor }) => {
  const [mode, setMode] = React.useState(themeModeColor);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
        console.log(mode);
        // console.log(typeof mode);
        // setThemeModeColor(mode);
      },
    }),
    []
  );

  //  const [mode, setMode] = React.useState<PaletteMode>('light');
  //   const colorMode = React.useMemo(
  //     () => ({
  //       // The dark mode switch would invoke this method
  //       toggleColorMode: () => {
  //         setMode((prevMode: PaletteMode) =>
  //           prevMode === 'light' ? 'dark' : 'light',
  //         );
  //       },
  //     }),
  //     [],
  //   );

  // Update the theme only if the mode changes
  // const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
        <Component />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const mapState = state => {
  return {
    themeModeColor: getThemeMode(state),
  };
};

const mapDispath = {
  setThemeModeColor: setThemeMode,
};

export default connect(mapState, mapDispath)(ToggleColorMode);
