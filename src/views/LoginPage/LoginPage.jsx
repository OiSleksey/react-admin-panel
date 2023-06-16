import React from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoggedIn } from '../../store/selectors/getTokenLocalStorage.selector';

const LoginPage = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (loggedIn) {
      navigate('/');
    }
  };

  React.useEffect(() => {
    console.log(loggedIn);
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

export default connect(mapState)(LoginPage);
