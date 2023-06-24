import * as React from 'react';
import { connect } from 'react-redux';
import './SettingPage.scss';
import ToggleColorBtn from '../../components/ui/ToggleColorBtn/ToggleColorBtn';
import Box from '@mui/material/Box';

const SettingPage = ({ handleClick, stateMode }) => {
  return (
    <div className="avatar-page">
      <h1> Setting Page</h1>
      {/* <ToggleColorBtn handleClick={handleClick} stateMode={stateMode} /> */}
    </div>
  );
};

// const mapState = state => {
//   return {
//     // loggedIn: state.ui.loggedIn,
//     propsSnake: setPropsSnake(state),
//   };
// };

export default connect(null)(SettingPage);
