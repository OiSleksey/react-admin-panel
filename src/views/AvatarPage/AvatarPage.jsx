import * as React from 'react';
import { connect } from 'react-redux';
import './AvatarPage.scss';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getLoggedIn } from '../../store/selectors/ui.selector';

const AvatarPage = ({ loggedIn }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (!loggedIn) {
      navigate('/login');
    }
  };
  React.useEffect(() => {
    // console.log(loggedIn);
    handleRedirect();
  }, [loggedIn]);

  return (
    <div className="avatar-page">
      <h1> Avatar Page</h1>
    </div>
  );
};

// const mapState = state => {
//   return {
//     // loggedIn: state.ui.loggedIn,
//     propsSnake: setPropsSnake(state),
//   };
// };

const mapState = state => {
  return {
    token: state.authorization.code,
    loggedIn: getLoggedIn(state),
  };
};

// const mapDispatch = {
//   getAllUserChallenge: getAllUsersDispath,
// };

export default connect(mapState, null)(AvatarPage);
