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
import { putUserDispath } from '../../../store/middleware/requestsServer.middleware';
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
  changeUserData,
  setPutUserDispath,
  token,
}) => {
  console.log(changeUserData);
  const checkOutValue = (obj, value) => {
    if (!obj) return '';
    const correctValue = obj[value] ? obj[value] : '';
    return correctValue;
  };
  const [dateOfBirth, setDateOfBiryh] = React.useState(
    checkOutValue(changeUserData, 'dateOfBirth')
  );
  const [hireDate, setHireDate] = React.useState(
    checkOutValue(changeUserData, 'hireDate')
  );

  const initialValues = {
    name: checkOutValue(changeUserData, 'name'),
    email: checkOutValue(changeUserData, 'email'),
    phone: checkOutValue(changeUserData, 'phone'),
    homePhone: checkOutValue(changeUserData, 'homePhone'),
    dateOfBirth: checkOutValue(changeUserData, 'dateOfBirth'),
    hireDate: checkOutValue(changeUserData, 'hireDate'),
    role: checkOutValue(changeUserData, 'role'),

    // acceptedTerms: true,
  };

  //   const initialValues = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     homePhone: '',
  //     dateOfBirth: '',
  //     hireDate: '',
  //     // acceptedTerms: true,
  //   };
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
    const roleId = values.role === 'admin' ? 1 : 2;
    const user = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      homePhone: values.homePhone,
      dateOfBirth: values.dateOfBirth,
      hireDate: values.hireDate,
      role: values.role,
      roleId,
      dateOfBirth,
      hireDate,
      departmentId: 0,
      driverCategory: 'string',
      id: checkOutValue(changeUserData, 'id'),
    };
    setPutUserDispath(user, token);
    setOpenModalWindow(false);
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
                dateValue={dateOfBirth}
                setDateValue={setDateOfBiryh}
                width={widthEmail}
              />
              <CalendarField
                label="Hire date"
                dateValue={hireDate}
                setDateValue={setHireDate}
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
  setPutUserDispath: putUserDispath,
};

export default connect(mapState, mapDispath)(ChangeUserDataForm);
