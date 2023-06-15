import React from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import SnakeBar from '../../components/ui/SnakeBar/SnakeBar';
import { connect } from 'react-redux';

const LoginPage = () => {
  return (
    <section className="login-page">
      <div className="login-page__form">
        <LoginForm />
      </div>
    </section>
  );
};

export default connect(null)(LoginPage);
