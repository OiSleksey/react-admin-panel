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
import CreateUserForm from '../../components/forms/CreateUserForm/CreateUserForm';

import {
  typeModalWindow,
  openModalWindow,
} from '../../store/actions/ui.actions';

const PanelPage = ({
  loggedIn,
  getAllUser,
  token,
  setActivePanel,
  getChangeUserData,
  setTypeModalWindow,
  setOpenModalWindow,
  modalType,
}) => {
  const titleModal =
    modalType === 'createUser' ? 'Create user' : 'Change user data';
  console.log(modalType);
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (!loggedIn) {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    setActivePanel('users');
    handleRedirect();
  }, [loggedIn]);

  return (
    <section className="panel-page">
      <DrawerPanelBar />
      <EnhancedTable />
      <ModalWindow modalType={modalType} titleModal={titleModal}>
        {modalType === 'changeUserData' && (
          <ChangeUserDataForm changeUserData={getChangeUserData} />
        )}
        {modalType === 'createUser' && (
          <CreateUserForm changeUserData={getChangeUserData} />
        )}
      </ModalWindow>
    </section>
  );
};

const mapState = state => {
  return {
    token: state.authorization.code,
    loggedIn: getLoggedIn(state),
    getChangeUserData: getChangeUserDataObj(state),
    modalType: state.ui.typeModalWindow,
  };
};

const mapDispatch = {
  setActivePanel: activePanel,
  getAllUser: getAllUsersDispath,

  setTypeModalWindow: typeModalWindow,
  setOpenModalWindow: openModalWindow,
};

export default connect(mapState, mapDispatch)(PanelPage);

// // CustomizedDialogs.jsx

// export default function CustomizedDialogs({ children, modalType }) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Modal title
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           {modalType === 'changeUserData' && <ChangeUserDataForm changeUserData={getChangeUserData} />}
//           {modalType === 'createUser' && <CreateUserForm changeUserData={getChangeUserData} />}
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
// У вашому компоненті, де ви використовуєте CustomizedDialogs, ви можете передати проп modalType залежно від натискання клавіші. Наприклад:

// jsx
// Copy code
// // Ваш компонент

// <section className="panel-page">
//   <DrawerPanelBar />
//   <EnhancedTable />
//   <CustomizedDialogs modalType="changeUserData">
//     <ChangeUserDataForm changeUserData={getChangeUserData} />
//   </CustomizedDialogs>
//   <CustomizedDialogs modalType="createUser">
//     <CreateUserForm changeUserData={getChangeUserData} />
//   </CustomizedDialogs>
//   {/* <button onClick={handleClick} type="button">
//         Get all user
//   </button> */}
// </section>
// Зверніть увагу, що я додав проп modalType до кожного виклику CustomizedDialogs і передав значення 'changeUserData' або 'createUser', відповідно до вашого бажаного модального вікна.

// Це дозволить вам відкривати різні модальні вікна залежно від вибраної клавіші.
