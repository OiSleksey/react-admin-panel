import * as React from 'react';
import Email from '../Email/Email';
import Password from '../Password/Password';
import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import Btn from '../Btn/Btn';
import { Formik, Form } from 'formik';
import './LoginForm.scss';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { getTokenDispatch } from '../../../store/middleware/requestServerThunk';
import { rememberAuthorized } from '../../../store/actions/requestsServer.actions';

export let beAutorized = true;

const LoginForm = ({ logIn, setRememberToken }) => {
  const initialValues = {
    email: '',
    password: '',
    acceptedTerms: true, // added for our checkbox
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
    resetForm();
  };
  const widthEmail = 35;
  const widthPassword = 35;
  const widthCheked = 35;
  const widthBtn = 25;

  return (
    <div className="login-form">
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
  );
};

const mapDispath = {
  logIn: getTokenDispatch,
  setRememberToken: rememberAuthorized,
};

export default connect(null, mapDispath)(LoginForm);
