import * as React from 'react';
import Email from '../Email/Email';
import Password from '../Password/Password';
import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import Btn from '../Btn/Btn';
import { Formik, Form } from 'formik';
import './LoginForm.scss';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { getTokenDispatch } from '../../../store/middleware/requestsServer.middleware';
import { rememberAuthorized } from '../../../store/actions/authorization.actions';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import SnakeBar from '../../ui/SnakeBar/SnakeBar';
import { useNavigate } from 'react-router-dom';

// export let beAutorized = true;

const LoginForm = ({ logIn, setRememberToken, loggedIn }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (loggedIn) {
      navigate('/');
    }
  };

  React.useEffect(() => {
    handleRedirect();
  }, [loggedIn]);

  const initialValues = {
    email: '',
    password: '',
    acceptedTerms: true,
  };
  const userSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Please enter a valid email address with letters, @ symbol, and numbers. For example, goo@test.com'
        // 'Email may contain letters, @, numbers. For example goo@test.co'
      )
      .required('Email is a required field'),
    password: Yup.string()
      .matches(
        /^.{6,12}$/,
        'Password must contain minimum 6 to 12 include symbols.'
      )
      .required('Password is a required field'),
  });
  const onSubmit = (values, { resetForm }) => {
    // beAutorized = values.acceptedTerms;
    const beAutorized = values.acceptedTerms;

    const user = {
      email: values.email,
      password: values.password,
    };
    logIn(user);
    setRememberToken(beAutorized);
    // dispatch(logIn(user));
    console.log('LoginPage ', loggedIn);
    resetForm();
  };
  const widthEmail = 35;
  const widthPassword = 35;
  const widthCheked = 35;
  const widthBtn = 25;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card elevation={10}>
        <div className="login-form">
          <SnakeBar />
          <h1 className="login-form__header">Sign In</h1>
          <Formik
            validateOnBlur={true}
            validateOnChange={false}
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Email
                label="Email Address"
                name="email"
                type="email"
                width={widthEmail}
              />
              <Password
                label="Password"
                name="password"
                type="password"
                width={widthPassword}
              />
              <CheckboxLabels name="acceptedTerms" width={widthCheked} />
              <div className="login-form__submit">
                <Btn
                  variant="contained"
                  type="submit"
                  text="Log In"
                  width={widthBtn}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </Card>
    </Box>
  );
};

const mapState = state => {
  return {
    loggedIn: state.ui.loggedIn,
  };
};

const mapDispath = {
  logIn: getTokenDispatch,
  setRememberToken: rememberAuthorized,
};

export default connect(mapState, mapDispath)(LoginForm);
