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
