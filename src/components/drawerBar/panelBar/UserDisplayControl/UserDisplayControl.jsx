import * as React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import DisplayUsersBtn from '../DisplayUsersBtn/DisplayUsersBtn';
import SearchField from '../SearchField/SearchField';
import UpdateBtn from '../UpdateBtn/UpdateBtn';
import {
  typeModalWindow,
  openModalWindow,
} from '../../../../store/actions/ui.actions';
import { getAllUsersDispath } from '../../../../store/middleware/getAllUser.middleware';
import { displayDataUsers } from '../../../../store/actions/dataUsers.actions';
import { activeBtnDisplay } from '../../../../store/actions/filterTable.actions';
import { getArrConvertedAllUsers } from '../../../../store/selectors/dataUsers.selector';
import { getToken } from '../../../../store/selectors/authorization.selector';
import {
  getActiveBtnDisplay,
  getPrevActiveBtnDisplay,
} from '../../../../store/selectors/filterTable.selector';
import { getThemeMode } from '../../../../store/selectors/ui.selector';

const nameKind = [<UpdateBtn />, <DisplayUsersBtn />, <SearchField />];

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
      {item}
    </motion.div>
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
    setDisplayDataUsers(arrAllUsers);
  }, [arrAllUsers]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
      }}
    >
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
  setActiveBtnDisplay: activeBtnDisplay,
  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
  getAllUser: getAllUsersDispath,
};

export default connect(mapState, mapDispath)(UserDisplayControl);
