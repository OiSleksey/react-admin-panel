import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPropsSnake } from '../../store/selectors/getTokenLocalStorage.selector';
import SnakeBar from '../ui/SnakeBar/SnakeBar';
import LoginPage from '../../views/LoginPage/LoginPage';
import PanelPage from '../../views/PanelPage/PanelPage';
import NotFoundPage from '../../views/NotFoundPage/NotFoundPage';
import ErrorServerPage from '../../views/ErrorServerPage/ErrorServerPage';
import './Main.scss';
import ToggleColorBtn from '../ui/ToggleColorBtn/ToggleColorBtn';

import Box from '@mui/material/Box';
import SettingPage from '../../views/SettingPage/SettingPage';
import AvatarPage from '../../views/AvatarPage/AvatarPage';

const Main = ({ propsSnake, handleClick, stateMode }) => {
  return (
    <div className="main">
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
          height: { xs: '4rem', sm: '0' },
          width: { xs: '100%', sm: '0' },
        }}
      ></Box>

      <div className="container">
        <SnakeBar {...propsSnake} />
        <Routes>
          <Route exact path="/" element={<PanelPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/error" element={<ErrorServerPage />} />
          <Route
            exact
            path="/setting"
            element={
              <SettingPage handleClick={handleClick} stateMode={stateMode} />
            }
          />
          <Route exact path="/avatar" element={<AvatarPage />} />
          <Route exact path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    // loggedIn: state.ui.loggedIn,
    propsSnake: setPropsSnake(state),
  };
};

export default connect(mapState)(Main);
