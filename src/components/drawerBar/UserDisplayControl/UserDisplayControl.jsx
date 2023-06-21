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
  showAllUsers,
  activeBtnDisplay,
} from '../../../store/actions/dataUsers.actions';
import { getAllUsersArr } from '../../../store/selectors/dataUsers.selector';

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
  const nameBtn = ['updateData', 'allUser', 'usersFound'];

  const handleOptions = value => {
    console.log(value);
    setActiveBtnDisplay(value);
    if (value === nameBtn[0]) {
      getAllUser(token);
      // console.log(nameBtn[0]);
    }
    if (value === nameBtn[1]) {
      setDisplayDataUsers(arrAllUsers);
      // console.log(nameBtn[1]);
    }
    if (value === nameBtn[2]) {
      setDisplayDataUsers('Improved');
      // console.log(nameBtn[2]);
    }
  };
  return (
    <div className="kind-time">
      {nameKind.map((item, index) => (
        <ToggleItem
          key={index}
          item={item}
          isSelected={activeBtnDisplay === nameBtn[index]}
          handleClick={() => handleOptions(nameBtn[index])}
        />
      ))}
      {/* <UpdateBtn
          isSelected={indexKindWeather === index}
          handleClick={toggleTimesOfDay(index === 0)}
        />
        <DisplayUsersBtn
          handleClick={toggleTimesOfDay(index === 0)}
          isSelected={indexKindWeather === index}
        />
        <SearchField
          handleClick={toggleTimesOfDay(index === 0)}
          isSelected={indexKindWeather === index}
        /> */}
    </div>
  );
};

const mapState = state => {
  return {
    token: state.authorization.code,
    activeBtnDisplay: state.dataUsers.activeBtnDisplay,
    prevActiveBtnDisplay: state.dataUsers.prevActiveBtnDisplay,
    arrAllUsers: getAllUsersArr(state),
  };
};

const mapDispath = {
  setDisplayDataUsers: displayDataUsers,
  setShowAllUsers: showAllUsers,
  setActiveBtnDisplay: activeBtnDisplay,

  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispath)(UserDisplayControl);
// export default UserDisplayControl;

// const mapStates = state => {
//   return {
//     isUI: state.isUI,
//   };
// };
// const mapDispatchs = {
//   toggleTimesOfDay: toggleTimesOfDay,
// };

// //   export default connect(mapState, mapDispatch)(KindTime);
// const handleClickTEST = () => {
//   console.log('test');
// };

// const handleClickUpdate = () => {
//   getAllUser(token);
// };
