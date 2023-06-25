import React from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <section className="login-page">
      <div className="login-page__form">
        <ModalWindow modalType={modalType} titleModal={titleModal}>
          {modalType === 'setting' && (
            <SettingControl
              handleClickTheme={handleClickTheme}
              stateMode={stateMode}
            />
          )}
        </ModalWindow>
        <LoginForm />
      </div>
    </section>
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
