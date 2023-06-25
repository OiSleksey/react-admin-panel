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
import DrawerAppBar from '../../drawerBar/appBar/DrawerAppBar/DrawerAppBar';
import { getThemeMode } from '../../../store/selectors/ui.selector';
import { setThemeMode } from '../../../store/actions/ui.actions';
import './ToggleColorMode.scss';
import { connect } from 'react-redux';
import {
  purple,
  amber,
  grey,
  deepOrange,
  deepPurple,
  indigo,
  blue,
} from '@mui/material/colors';

const colorDarkGrey = '#1a1c22';
const colorLightGrey = '#3d3a50';
const colorBlue = '#580ef6';
const colorWhite = '#f7f7f7';

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: blue,
          divider: 'rgba(0, 0, 0, 0.12)',
          background: {
            default: colorWhite,
            paper: '#fff',
          },
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
          },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
          },
        }
      : {
          // palette values for dark mode
          // primary: 'rgba(88, 14, 246, 1.0)',
          // primary: '#570ef6',
          // primary: deepPurple[500],
          primary: blue,
          divider: 'rgba(255, 255, 255, 0.12)',
          background: {
            default: '#121212',
            paper: '#121212',
          },
          text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
          },
          action: {
            active: '#fff',
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
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
      <Main handleClickTheme={handleClick} stateMode={theme.palette.mode} />
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
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

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
