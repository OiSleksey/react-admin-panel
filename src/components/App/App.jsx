import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import ToggleColorMode from '../ui/ToggleColorMode/ToggleColorMode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router>
        <ToggleColorMode />
      </Router>
    </div>
  );
};

export default App;
