import * as React from 'react';
import './PanelPage.scss';
import { connect } from 'react-redux';
import { getLoggedIn } from '../../store/selectors/getTokenLocalStorage.selector';
import { getChangeUserDataObj } from '../../store/selectors/dataUsers.selector';
import { useNavigate } from 'react-router-dom';
import { getAllUsersDispath } from '../../store/middleware/requestsServer.middleware';
import { activePanel } from '../../store/actions/ui.actions';
import DrawerPanelBar from '../../components/drawerBar/DrawerPanelBar/DrawerPanelBar';
import EnhancedTable from '../../components/table/EnhancedTable/EnhancedTable';
import ModalWindow from '../../components/ui/ModalWindow/ModalWindow';
import ChangeUserDataForm from '../../components/forms/ChangeUserDataForm/ChangeUserDataForm';

const PanelPage = ({
  loggedIn,
  getAllUser,
  token,
  setActivePanel,
  getChangeUserData,
}) => {
  const navigate = useNavigate();
  console.log(getChangeUserData);
  const handleRedirect = () => {
    if (!loggedIn) {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    setActivePanel('users');
    // console.log(loggedIn);
    handleRedirect();
  }, [loggedIn]);

  // const handleClick = () => {
  //   getAllUser(token);
  // };
  return (
    <section className="panel-page">
      <DrawerPanelBar />
      <EnhancedTable />
      <ModalWindow titleModal={'Change user data'}>
        <ChangeUserDataForm />
      </ModalWindow>
      {/* <button onClick={handleClick} type="button">
        Get all user
      </button> */}
    </section>
  );
};

const mapState = state => {
  return {
    token: state.authorization.code,
    loggedIn: getLoggedIn(state),
    getChangeUserData: getChangeUserDataObj(state),
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispatch)(PanelPage);
