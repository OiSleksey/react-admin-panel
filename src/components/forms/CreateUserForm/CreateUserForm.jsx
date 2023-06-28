import * as React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputEmailField from '../InputEmailField/InputEmailField';
import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import Btn from '../Btn/Btn';
import InputTextField from '../InputTextField/InputTextField';
import CalendarField from '../CalendarField/CalendarField';
import InputRadioGroup from '../InputRadioGroup/InputRadioGroup';
import { openModalWindow } from '../../../store/actions/ui.actions';
import { createUserDispath } from '../../../store/middleware/createUser.middleware';
import { getToken } from '../../../store/selectors/authorization.selector';

const CreateUserForm = ({
  setOpenModalWindow,
  setCreateUserDispath,
  token,
}) => {
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
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email')
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
      dateOfBirth,
      driverCategory: 'string',
    };

    setOpenModalWindow(false);
    setCreateUserDispath(user, token);
    resetForm();
  };
  const widthInput = 35;
  const widthBtn = 25;
  return (
    <Box sx={{ minWidth: 275 }}>
      <div className="change-data-user">
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
    token: getToken(state),
  };
};

const mapDispath = {
  setOpenModalWindow: openModalWindow,
  setCreateUserDispath: createUserDispath,
};

export default connect(mapState, mapDispath)(CreateUserForm);
