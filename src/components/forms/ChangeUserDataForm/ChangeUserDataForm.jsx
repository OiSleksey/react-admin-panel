import * as React from 'react';
import EmailField from '../EmailField/EmailField';
import PasswordField from '../PasswordField/PasswordField';
import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import Btn from '../Btn/Btn';
import { Formik, Form } from 'formik';
// import './LoginForm.scss';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { getTokenDispatch } from '../../../store/middleware/requestsServer.middleware';
import { rememberAuthorized } from '../../../store/actions/authorization.actions';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputTextField from '../InputTextField/InputTextField';
import NumberField from '../NumberField/NumberField';
import CalendarField from '../CalendarField/CalendarField';
import InputRadioGroup from '../InputRadioGroup/InputRadioGroup';
import ModalWindow from '../../ui/ModalWindow/ModalWindow';
import { openModalWindow } from '../../../store/actions/ui.actions';
// import Box from '@mui/material/Box';
//  <Box sx={{ width: '100%' }}></Box>

// export let beAutorized = true;

// change-user-data
// ChangeUserDataForm
const ChangeUserDataForm = ({
  logIn,
  setRememberToken,
  loggedIn,
  setOpenModalWindow,
  openModalWindow,
}) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    homePhone: '',
    dateOfBirth: '',
    hireDate: '',
    // acceptedTerms: true,
  };
  const userSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Please enter a valid email address with letters, @ symbol, and numbers. For example, goo@test.com'
        // 'Email may contain letters, @, numbers. For example goo@test.co'
      )
      .required('Is a required field'),
    name: Yup.string().required('Is a required field'),
    phone: Yup.string().required('Is a required field'),
    homePhone: Yup.string().required('Is a required field'),
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

  const handleClickOpen = () => {
    setOpenModalWindow(true);
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <div className="change-data-user">
        {/* <h1 className="login-form__header">Sign In</h1> */}
        <Formik
          validateOnBlur={true}
          validateOnChange={false}
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <InputTextField
                label="Name"
                name="name"
                type="text"
                width={widthEmail}
              />
              <EmailField
                label="Email"
                name="email"
                type="email"
                width={widthEmail}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <InputTextField
                label="Home phone"
                name="homePhone"
                type="text"
                width={widthEmail}
              />
              <InputTextField
                label="Phone"
                name="phone"
                type="text"
                width={widthEmail}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <CalendarField
                label="Birthday"
                name="dateOfBirth"
                // type="date"
                width={widthEmail}
              />
              <CalendarField
                label="Hire date"
                name="hireDate"
                // type="date"
                width={widthEmail}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '15px',
              }}
            >
              <InputRadioGroup />
            </Box>

            {/* <CheckboxLabels name="acceptedTerms" width={widthCheked} /> */}
            <div className="login-form__submit">
              <Btn
                variant="contained"
                type="submit"
                text="Submit"
                width={widthBtn}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </Box>
  );
};

const mapState = state => {
  return {
    loggedIn: state.ui.loggedIn,
    openModalWindow: state.ui.openModalWindow,
  };
};

const mapDispath = {
  logIn: getTokenDispatch,
  setRememberToken: rememberAuthorized,
  setOpenModalWindow: openModalWindow,
};

export default connect(mapState, mapDispath)(ChangeUserDataForm);
