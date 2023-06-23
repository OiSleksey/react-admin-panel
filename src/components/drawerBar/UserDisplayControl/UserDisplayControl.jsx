import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Btn from '../../forms/Btn/Btn';
// import './DrawerPanelBar.scss';
import CreateBtn from '../../ui/CreateBtn/CreateBtn';
import UpdateBtn from '../../ui/UpdateBtn/UpdateBtn';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../store/actions/ui.actions';
import { connect } from 'react-redux';
import { getAllUsersDispath } from '../../../store/middleware/requestsServer.middleware';
import DisplayUsersBtn from '../../ui/DisplayUsersBtn/DisplayUsersBtn';
import SearchField from '../../ui/SearchField/SearchField';
import { motion, AnimatePresence } from 'framer-motion';
import './UserDisplayControl.scss';
import {
  displayDataUsers,
  // showAllUsers,
} from '../../../store/actions/dataUsers.actions';
import {
  activeBtnDisplay,
  // showAllUsers,
} from '../../../store/actions/filterTable.actions';
import { getArrConvertedAllUsers } from '../../../store/selectors/dataUsers.selector';

const nameKind = [<UpdateBtn />, <DisplayUsersBtn />, <SearchField />];
// const nameKind = ['hours', 'time of day'];

// const KindTime = ({ isUI, toggleTimesOfDay }) => {
//   const indexKindWeather = isUI.stateToggle ? 0 : 1;

//   return (
//     <div className="kind-time">
//       <div className="kind-time__wrapper">
//         {nameKind.map((item, index) => (
//           <ToggleItem
//             key={item}
//             item={<h4 className="kind-time__text">{item}</h4>}
//             isSelected={indexKindWeather === index}
//             handleClick={() => toggleTimesOfDay(index === 0)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// KindTime.propTypes = {
//   isUI: PropTypes.object.isRequired,
//   toggleTimesOfDay: PropTypes.func.isRequired,
// };

const ToggleItem = ({ item, isSelected, handleClick = Function.prototype }) => {
  return (
    <motion.div
      // className="kind-time__time-box"
      onClick={handleClick}
      animate={{
        // color: isSelected ? '#F2E205' : '#5DD3BD',
        backgroundColor: isSelected ? '#96908E' : '#964031',
      }}
    >
      {/* <AnimatePresence>
        {isSelected && <ActiveLine key={item} index={item} items={nameKind} />}
      </AnimatePresence> */}
      {item}
    </motion.div>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      className="kind-time__active-line"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};

const UserDisplayControl = ({
  setTypeModalWindow,
  setOpenModalWindow,
  getAllUser,
  token,

  activeBtnDisplay,
  prevActiveBtnDisplay,
  setDisplayDataUsers,
  setShowAllUsers,
  setActiveBtnDisplay,
  arrAllUsers,
}) => {
  // const [indexKindWeather, setIndexKindWeather] = React.useState(0);
  const namesBtn = ['updateData', 'allUsers', 'usersFound'];

  const handleOptions = value => {
    if (value === activeBtnDisplay) return;
    // console.log(value);
    setActiveBtnDisplay(value);
    if (value === namesBtn[0]) {
      getAllUser(token);
      // console.log(namesBtn[0]);
    }
    if (value === namesBtn[1]) {
      setDisplayDataUsers(arrAllUsers);
      // console.log(namesBtn[1]);
    }
    if (value === namesBtn[2]) {
      // setDisplayDataUsers('Improved');
      // console.log(namesBtn[2]);
    }
  };
  React.useEffect(() => {
    if (activeBtnDisplay === namesBtn[1]) setDisplayDataUsers(arrAllUsers);
  }, [arrAllUsers]);

  return (
    <div className="kind-time">
      {nameKind.map((item, index) => (
        <ToggleItem
          key={index}
          item={item}
          isSelected={activeBtnDisplay === namesBtn[index]}
          handleClick={() => handleOptions(namesBtn[index])}
        />
      ))}
    </div>
  );
};

const mapState = state => {
  return {
    token: state.authorization.code,
    activeBtnDisplay: state.filterTable.activeBtnDisplay,
    prevActiveBtnDisplay: state.filterTable.prevActiveBtnDisplay,
    arrAllUsers: getArrConvertedAllUsers(state),
  };
};

const mapDispath = {
  setDisplayDataUsers: displayDataUsers,
  // setShowAllUsers: showAllUsers,
  setActiveBtnDisplay: activeBtnDisplay,

  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispath)(UserDisplayControl);
