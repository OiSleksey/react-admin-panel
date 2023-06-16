import * as React from 'react';
import './PanelPage.scss';
import { connect } from 'react-redux';
import { getLoggedIn } from '../../store/selectors/getTokenLocalStorage.selector';
import { useNavigate } from 'react-router-dom';

const PanelPage = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!loggedIn) {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    console.log(loggedIn);
    handleRedirect();
  }, [loggedIn]);

  return (
    <section className="panel-page">
      <h1>Panel</h1>
    </section>
  );
};

const mapState = state => {
  return {
    loggedIn: getLoggedIn(state),
  };
};

export default connect(mapState, null)(PanelPage);
