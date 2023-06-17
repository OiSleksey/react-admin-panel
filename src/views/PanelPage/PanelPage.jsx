import * as React from 'react';
import './PanelPage.scss';
import { connect } from 'react-redux';
import { getLoggedIn } from '../../store/selectors/getTokenLocalStorage.selector';
import { useNavigate } from 'react-router-dom';
import { getAllUsersDispath } from '../../store/middleware/requestsServer.middleware';

const PanelPage = ({ loggedIn, getAllUserChallenge, token }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!loggedIn) {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    console.log(loggedIn);
    handleRedirect();
  }, [loggedIn]);

  const handleClick = () => {
    getAllUserChallenge(token);
  };
  return (
    <section className="panel-page">
      <h1>Panel</h1>
      <button onClick={handleClick} type="button">
        Get all user
      </button>
    </section>
  );
};

const mapState = state => {
  return {
    token: state.authorization.code,
    loggedIn: getLoggedIn(state),
  };
};

const mapDispatch = {
  getAllUserChallenge: getAllUsersDispath,
};

export default connect(mapState, mapDispatch)(PanelPage);
