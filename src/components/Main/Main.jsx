import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Loading from '../ui/Loading/Loading';
import Footer from '../ui/Footer/Footer';
import SnakeBar from '../ui/SnakeBar/SnakeBar';
import LoginPage from '../../views/LoginPage/LoginPage';
import PanelPage from '../../views/PanelPage/PanelPage';
import NotFoundPage from '../../views/NotFoundPage/NotFoundPage';
import ErrorServerPage from '../../views/ErrorServerPage/ErrorServerPage';
import './Main.scss';
import { setPropsSnake } from '../../store/selectors/ui.selector';
import { StyledEngineProvider } from '@mui/material/styles';

const Main = ({ propsSnake, handleClickTheme, stateMode }) => {
  return (
    <Box className="main" sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
          height: { xs: '4rem', sm: '0' },
          width: { xs: '100%', sm: '0' },
        }}
      ></Box>

      <Box sx={{ flexGrow: 1 }}>
        <StyledEngineProvider injectFirst maxSnack={3} onClickDismiss={true}>
          <SnakeBar {...propsSnake} />
          <Loading />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PanelPage
                  handleClickTheme={handleClickTheme}
                  stateMode={stateMode}
                />
              }
            />
            <Route
              exact
              path="/login"
              element={
                <LoginPage
                  handleClickTheme={handleClickTheme}
                  stateMode={stateMode}
                />
              }
            />
            <Route exact path="/error" element={<ErrorServerPage />} />
            <Route exact path="/*" element={<NotFoundPage />} />
          </Routes>
        </StyledEngineProvider>
      </Box>

      <Footer />
    </Box>
  );
};

const mapState = state => {
  return {
    propsSnake: setPropsSnake(state),
  };
};

export default connect(mapState)(Main);
