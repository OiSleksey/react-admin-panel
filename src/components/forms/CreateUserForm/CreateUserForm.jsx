import * as React from 'react';
import InputEmailField from '../InputEmailField/InputEmailField';
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
import NumberField from '../---NumberField/NumberField';
import CalendarField from '../CalendarField/CalendarField';
import InputRadioGroup from '../InputRadioGroup/InputRadioGroup';
import ModalWindow from '../../ui/ModalWindow/ModalWindow';
import { openModalWindow } from '../../../store/actions/ui.actions';
import { createUserDispath } from '../../../store/middleware/requestsServer.middleware';
import { isoInIsoPlusOneDay } from '../../../utils/convertDate';

const CreateUserForm = ({
  logIn,
  setRememberToken,
  loggedIn,
  setOpenModalWindow,
  openModalWindow,
  changeUserData,
  setCreateUserDispath,
  token,
}) => {
  // console.log(changeUserData);
  // const checkOutValue = (obj, value) => {
  //   if (!obj) return '';
  //   const correctValue = obj[value] ? obj[value] : '';
  //   return correctValue;
  // };
  const [dateOfBirth, setDateOfBiryh] = React.useState('');

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    homePhone: '',
    role: 'manager',
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
    phone: Yup.string()
      .matches(/^\+?\d+$/, "Enter a valid phone number using numbers and '+'.")
      .required('Is a required field'),
    homePhone: Yup.string()
      .matches(/^\+?\d+$/, "Enter a valid phone number using numbers and '+'.")
      .required('Is a required field'),
  });
  const onSubmit = (values, { resetForm }) => {
    console.log(dateOfBirth);
    if (dateOfBirth === '') return;
    const roleId = values.role === 'admin' ? 1 : 2;
    const nowDate = new Date();
    const isoDate = nowDate.toISOString();
    const user = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      homePhone: values.homePhone,
      roleId,
      hireDate: isoDate,
      dateOfBirth: isoInIsoPlusOneDay(dateOfBirth),
      driverCategory: 'string',
    };

    console.log(user);
    setCreateUserDispath(user, token);
    setOpenModalWindow(false);
    resetForm();
  };
  const widthInput = 35;
  // const widthPassword = 35;
  // const widthCheked = 35;
  const widthBtn = 25;

  // const handleClickOpen = () => {
  //   setOpenModalWindow(true);
  // };
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
                width={widthInput}
              />
              <InputEmailField
                label="Email"
                name="email"
                type="email"
                width={widthInput}
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
                width={widthInput}
              />
              <InputTextField
                label="Phone"
                name="phone"
                type="text"
                width={widthInput}
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
                dateValue={dateOfBirth}
                setDateValue={setDateOfBiryh}
                width={widthInput}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '15px',
              }}
            >
              <InputRadioGroup label="Role" name="role" type="checkbox" />
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
    token: state.authorization.code,
    openModalWindow: state.ui.openModalWindow,
  };
};

const mapDispath = {
  logIn: getTokenDispatch,
  setRememberToken: rememberAuthorized,
  setOpenModalWindow: openModalWindow,
  setCreateUserDispath: createUserDispath,
};

export default connect(mapState, mapDispath)(CreateUserForm);
