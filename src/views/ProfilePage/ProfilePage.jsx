import * as React from 'react';
import { connect } from 'react-redux';
import './ProfilePage.scss';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getLoggedIn } from '../../store/selectors/ui.selector';
// import ProfileForm from '../../components/forms/ProfileForm/ProfileForm';
import ProfileControl from '../../components/profile/ProfileControl/ProfileControl';

const ProfilePage = ({ loggedIn }) => {
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
    <div className="profile-page">
      <ProfileControl />
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

export default connect(mapState, null)(ProfilePage);
