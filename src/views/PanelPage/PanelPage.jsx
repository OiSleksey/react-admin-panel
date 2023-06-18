import * as React from 'react';
import './PanelPage.scss';
import { connect } from 'react-redux';
import { getLoggedIn } from '../../store/selectors/getTokenLocalStorage.selector';
import { useNavigate } from 'react-router-dom';
import { getAllUsersDispath } from '../../store/middleware/requestsServer.middleware';
import { activePanel } from '../../store/actions/ui.actions';
import DrawerPanelBar from '../../components/ui/DrawerPanelBar/DrawerPanelBar';
import EnhancedTable from '../../components/table/EnhancedTable/EnhancedTable';

const PanelPage = ({
  loggedIn,
  getAllUserChallenge,
  token,
  setActivePanel,
}) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!loggedIn) {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    setActivePanel('users');
    console.log(loggedIn);
    handleRedirect();
  }, [loggedIn]);

  const handleClick = () => {
    getAllUserChallenge(token);
  };
  return (
    <section className="panel-page">
      <DrawerPanelBar />
      <EnhancedTable />
      <button onClick={handleClick} type="button">
        Get all user
      </button>
    </section>
  );
};

const mapState = state => {
  return {
    token: state.authorization.code,
    loggedIn: getLoggedIn(state),
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
  getAllUserChallenge: getAllUsersDispath,
};

export default connect(mapState, mapDispatch)(PanelPage);
