import * as React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputEmailField from '../InputEmailField/InputEmailField';
import InputTextField from '../InputTextField/InputTextField';
import CalendarField from '../CalendarField/CalendarField';
import InputRadioGroup from '../InputRadioGroup/InputRadioGroup';
import Btn from '../Btn/Btn';
import { openModalWindow } from '../../../store/actions/ui.actions';
import { putUserDispath } from '../../../store/middleware/putUser.middleware';
import { getToken } from '../../../store/selectors/authorization.selector';

const ChangeUserDataForm = ({
  setOpenModalWindow,
  changeUserData,
  setPutUserDispath,
  token,
}) => {
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
  };
  const userSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email'
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
    const roleId = values.role === 'admin' ? 1 : 2;
    const user = {
      id: checkOutValue(changeUserData, 'id'),
      email: values.email,
      name: values.name,
      phone: values.phone,
      homePhone: values.homePhone,
      role: values.role,
      roleId,
      dateOfBirth,
      hireDate,
      departmentId: 0,
      driverCategory: 'string',
    };
    setOpenModalWindow(false);
    setPutUserDispath(user, token);

    resetForm();
  };

  const widthInput = 35;
  const widthBtn = 25;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Box>
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
              <CalendarField
                label="Hire date"
                dateValue={hireDate}
                setDateValue={setHireDate}
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
      </Box>
    </Box>
  );
};

const mapState = state => {
  return {
    token: getToken(state),
  };
};

const mapDispath = {
  setOpenModalWindow: openModalWindow,
  setPutUserDispath: putUserDispath,
};

export default connect(mapState, mapDispath)(ChangeUserDataForm);
