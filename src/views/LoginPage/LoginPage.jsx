import React from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <section className="login-page">
      <div className="login-page__form">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
