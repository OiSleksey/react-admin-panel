import React from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
  getLoggedIn,
  getTypeModalWindow,
} from '../../store/selectors/ui.selector';
import {
  activePanel,
  openModalWindow,
  typeModalWindow,
} from '../../store/actions/ui.actions';
import ModalWindow from '../../components/ui/ModalWindow/ModalWindow';
import SettingControl from '../../components/setting/SettingControl/SettingControl';

const LoginPage = ({
  loggedIn,
  setActivePanel,
  modalType,
  setTypeModalWindow,
  setOpenModalWindow,
  handleClickTheme,
  stateMode,
}) => {
  const [titleModal, setTitleModal] = React.useState('');

  React.useEffect(() => {
    setTitleModalWinsow();
  }, [modalType]);

  const setTitleModalWinsow = () => {
    if (modalType === 'setting') setTitleModal('Setting');
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    if (loggedIn) {
      navigate('/');
    }
  };

  React.useEffect(() => {
    setActivePanel('login');
    handleRedirect();
  }, [loggedIn]);

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flexGrow: 1,
        // minHeight: 'calc(100vh - 4rem)',
        minHeight: '100%',
      }}
    >
      <ModalWindow modalType={modalType} titleModal={titleModal}>
        {modalType === 'setting' && (
          <SettingControl
            handleClickTheme={handleClickTheme}
            stateMode={stateMode}
          />
        )}
      </ModalWindow>
      <LoginForm />
    </Box>
  );
};

const mapState = state => {
  return {
    loggedIn: getLoggedIn(state),
    modalType: getTypeModalWindow(state),
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
};

export default connect(mapState, mapDispatch)(LoginPage);

// <div className='main'>
//   <div classname='container'>
//   Container
//   </div>
//   <div className='footer'>Footer</div>
// </div>

// .main{
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// }

// .container{
//   //нужно что бы он занимал все оставшееся пространство страници по висоте (то что не занимает footer)
// }
