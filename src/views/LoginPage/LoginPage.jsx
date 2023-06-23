import React from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoggedIn } from '../../store/selectors/ui.selector';
import { activePanel } from '../../store/actions/ui.actions';

const LoginPage = ({ loggedIn, setActivePanel }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (loggedIn) {
      navigate('/');
    }
  };

  React.useEffect(() => {
    setActivePanel('login');
    handleRedirect();
  }, [loggedIn]);

  return (
    <section className="login-page">
      <div className="login-page__form">
        <LoginForm />
      </div>
    </section>
  );
};

const mapState = state => {
  return {
    loggedIn: getLoggedIn(state),
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
};

export default connect(mapState, mapDispatch)(LoginPage);
