import * as React from 'react';
import './PanelPage.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTokenLocalStorage } from '../../store/selectors/getTokenLocalStorage.selector';
const PanelPage = ({ code }) => {
  const navigate = useNavigate();

  const handleRedirect = value => {
    if (!value) {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    handleRedirect(code);
  }, []);

  return (
    <section className="panel-page">
      <h1>Panel</h1>
    </section>
  );
};

const mapState = state => {
  return {
    code: getTokenLocalStorage(state),
  };
};

// const mapDispath = {
//   logIn: getTokenDispatch,
// }
export default connect(mapState, null)(PanelPage);
