import * as React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputEmailField from '../InputEmailField/InputEmailField';
import PasswordField from '../PasswordField/PasswordField';
import Btn from '../Btn/Btn';
// import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import { backDropLoading } from '../../../store/actions/ui.actions';
import { autorizationDispatch } from '../../../store/middleware/authorization.middleware';
import { rememberAuthorized } from '../../../store/actions/authorization.actions';

const LoginForm = ({ logIn, setRememberToken, setBackDropLoading }) => {
  const initialValues = {
    email: '',
    password: '',
    acceptedTerms: true,
  };
  const userSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email')
      .required('Email is a required field'),
    password: Yup.string()
      .matches(/^.{6,12}$/, 'Invalid password')
      .required('Password is a required field'),
  });
  const onSubmit = (values, { resetForm }) => {
    const beAutorized = values.acceptedTerms;
    const user = {
      email: values.email,
      password: values.password,
    };
    logIn(user);
    setRememberToken(beAutorized);
    setBackDropLoading(true);
    resetForm();
  };
  const widthInput = 35;

  return (
    <Box sx={{ minWidth: 275, margin: '20px 0' }}>
      <Card elevation={10}>
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
              <InputEmailField
                label="Email"
                name="email"
                type="email"
                width={widthInput}
              />
              <PasswordField
                label="Password"
                name="password"
                type="password"
                width={widthInput}
              />
              {/* <CheckboxLabels name="acceptedTerms" width={widthCheked} /> */}
              <Box sx={{ marginBottom: '8px' }}></Box>
              <div className="login-form__submit">
                <Btn
                  variant="contained"
                  type="submit"
                  text="Log In"
                  width={widthInput}
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
  logIn: autorizationDispatch,
  setRememberToken: rememberAuthorized,
  setBackDropLoading: backDropLoading,
};

export default connect(mapState, mapDispath)(LoginForm);
