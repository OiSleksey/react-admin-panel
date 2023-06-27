import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import UpdateBtn from '../UpdateBtn/UpdateBtn';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../../store/actions/ui.actions';
import { connect } from 'react-redux';
import { getAllUsersDispath } from '../../../../store/middleware/getAllUser.middleware';
import DisplayUsersBtn from '../DisplayUsersBtn/DisplayUsersBtn';
import SearchField from '../SearchField/SearchField';
import { motion, AnimatePresence } from 'framer-motion';
import './UserDisplayControl.scss';
import { displayDataUsers } from '../../../../store/actions/dataUsers.actions';
import { activeBtnDisplay } from '../../../../store/actions/filterTable.actions';
import { getArrConvertedAllUsers } from '../../../../store/selectors/dataUsers.selector';
import { getToken } from '../../../../store/selectors/authorization.selector';
import {
  getActiveBtnDisplay,
  getPrevActiveBtnDisplay,
} from '../../../../store/selectors/filterTable.selector';
import { useTheme } from '@mui/material/styles';
import { getThemeMode } from '../../../../store/selectors/ui.selector';

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

const ToggleItem = ({
  item,
  isSelected,
  handleClick = Function.prototype,
  theme,
  themeMode,
}) => {
  const activeBackground =
    themeMode === 'light'
      ? theme.palette.text.primary
      : theme.palette.primary[500];
  const notActiveBackground = 'rgba(255, 255, 255, 0)';
  return (
    <motion.div
      onClick={handleClick}
      animate={{
        backgroundColor: isSelected ? activeBackground : notActiveBackground,
        borderRadius: '4px',
        marginRight: '5px',
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
  getAllUser,
  token,
  activeBtnDisplay,
  setDisplayDataUsers,
  setActiveBtnDisplay,
  arrAllUsers,
  themeMode,
}) => {
  const theme = useTheme();
  const namesBtn = ['updateData', 'allUsers', 'usersFound'];

  const handleOptions = value => {
    if (value === activeBtnDisplay) return;
    setActiveBtnDisplay(value);
    if (value === namesBtn[0]) {
      getAllUser(token);
    }
    if (value === namesBtn[1]) {
      setDisplayDataUsers(arrAllUsers);
    }
    if (value === namesBtn[2]) {
    }
  };

  React.useEffect(() => {
    // if (activeBtnDisplay === namesBtn[1])
    setDisplayDataUsers(arrAllUsers);
  }, [arrAllUsers]);

  return (
    <div className="kind-time">
      {nameKind.map((item, index) => (
        <ToggleItem
          themeMode={themeMode}
          theme={theme}
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
    token: getToken(state),
    activeBtnDisplay: getActiveBtnDisplay(state),
    prevActiveBtnDisplay: getPrevActiveBtnDisplay(state),
    arrAllUsers: getArrConvertedAllUsers(state),
    themeMode: getThemeMode(state),
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
