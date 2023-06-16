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

const Main = ({ propsSnake }) => {
  return (
    <div className="main">
      <Router>
        <div className="container">
          <SnakeBar {...propsSnake} />
          <Routes>
            <Route exact path="/" element={<PanelPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/error" element={<ErrorServerPage />} />
            <Route exact path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
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
