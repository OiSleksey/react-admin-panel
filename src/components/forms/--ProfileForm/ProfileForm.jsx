import * as React from 'react';
import InputEmailField from '../InputEmailField/InputEmailField';
import PasswordField from '../PasswordField/PasswordField';
import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import Btn from '../Btn/Btn';
import { Formik, Form } from 'formik';
// import './LoginForm.scss';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { autorizationDispatch } from '../../../store/middleware/requestsServer.middleware';
import { rememberAuthorized } from '../../../store/actions/authorization.actions';
import Box from '@mui/material/Box';
import InputTextField from '../InputTextField/InputTextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { openModalWindow } from '../../../store/actions/ui.actions';
import { putUserDispath } from '../../../store/middleware/requestsServer.middleware';
import { isoInIsoPlusOneDay } from '../../../utils/convertData';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProfileForm = ({
  logIn,
  setRememberToken,
  loggedIn,
  setOpenModalWindow,
  openModalWindow,
  changeUserData,
  setPutUserDispath,
  token,
}) => {
  const checkOutValue = (obj, value) => {
    if (!obj) return '';
    const correctValue = obj[value] ? obj[value] : '';
    return correctValue;
  };

  const initialValues = {
    name: checkOutValue(changeUserData, 'name'),
    email: checkOutValue(changeUserData, 'email'),
    phone: checkOutValue(changeUserData, 'phone'),
    homePhone: checkOutValue(changeUserData, 'homePhone'),
    dateOfBirth: checkOutValue(changeUserData, 'dateOfBirth'),
    hireDate: checkOutValue(changeUserData, 'hireDate'),
    role: checkOutValue(changeUserData, 'role'),
  };

  const matchesVerPhone = useMediaQuery('(min-width:0px)');
  const matchesHorPhone = useMediaQuery('(min-width:500px)');
  const matchesDesktop = useMediaQuery('(min-width:900px)');

  const [widthInput, setWidthInput] = React.useState(35);

  React.useEffect(() => {
    setWidthMedia();
    console.log(widthInput);
  }, [matchesVerPhone, matchesHorPhone, matchesDesktop]);

  const setWidthMedia = () => {
    console.log('matchesDesktop', matchesDesktop);
    if (matchesDesktop) return setWidthInput(35);
    console.log('matchesHorPhone', matchesHorPhone);
    if (matchesHorPhone) return setWidthInput(20);
    console.log('matchesHorPhone', matchesVerPhone);
    if (matchesVerPhone) return setWidthInput(35);
  };

  const handleClickOpen = () => {
    setOpenModalWindow(true);
  };
  return (
    <Card sx={{ minWidth: 275, padding: '20px' }} elevation={10}>
      <Formik
        validateOnBlur={true}
        validateOnChange={false}
        initialValues={initialValues}
      >
        <Form>
          <Box
            sx={
              {
                // display: 'flex',
                // flexDirection: { xs: 'column', sm: 'row' },
              }
            }
          >
            <h2 style={{ textAlign: 'center' }}>General information</h2>
            <InputEmailField
              label="Email"
              name="email"
              type="email"
              width={widthInput}
            />
            <PasswordField
              label="Email"
              name="email"
              type="email"
              width={widthInput}
            />
            <InputTextField
              label="Phone"
              name="phone"
              type="text"
              width={widthInput}
            />
          </Box>
        </Form>
      </Formik>
    </Card>
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
  logIn: autorizationDispatch,
  setRememberToken: rememberAuthorized,
  setOpenModalWindow: openModalWindow,
  setPutUserDispath: putUserDispath,
};

export default connect(mapState, mapDispath)(ProfileForm);
