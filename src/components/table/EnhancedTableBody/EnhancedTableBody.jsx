import * as React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { getAllUsersArr } from '../../../store/selectors/dataUsers.selectror';
import { connect } from 'react-redux';

// function createData(
//   id,
//   createdAt,
//   name,
//   email,
//   phone,
//   homePhone,
//   hireDate,
//   dateOfBirth,
//   lastLoginAt,
//   blocked,
//   role
// ) {
//   return {
//     id,
//     createdAt,
//     name,
//     email,
//     phone,
//     homePhone,
//     hireDate,
//     dateOfBirth,
//     lastLoginAt,
//     blocked,
//     role,
//   };
// }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const EnhancedTableBody = props => {
  const {
    selected,
    setSelected,
    order,
    orderBy,
    page,
    dense,
    rowsPerPage,
    allUsersArray,
  } = props;

  // React.useEffect(() => {
  //   console.log(allUsersArray);
  // }, [allUsersArray]);

  const rows = allUsersArray;
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={event => handleClick(event, row.id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            // key={row.name}
            key={row.id}
            selected={isItemSelected}
            sx={{ cursor: 'pointer' }}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isItemSelected}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </TableCell>
            {/* <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell> */}
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.createdAt}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.homePhone}</TableCell>
            <TableCell align="right">{row.hireDate}</TableCell>
            <TableCell align="right">{row.dateOfBirth}</TableCell>
            <TableCell align="right">{row.lastLoginAt}</TableCell>
            <TableCell align="right">{row.blocked}</TableCell>
            <TableCell align="right">{row.role}</TableCell>
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

const mapState = state => {
  return {
    allUsersArray: getAllUsersArr(state),
  };
};

export default connect(mapState)(EnhancedTableBody);

// export const rows = [
//   createData(
//     1,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + true,
//     'admin'
//   ),
//   createData(
//     2,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     3,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     4,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     5,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     6,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     7,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     8,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     9,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     10,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     11,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     12,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     13,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     14,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     15,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
//   createData(
//     16,
//     '2023-04-30T21:02:22.4526204',
//     'Admin admiN',
//     'admin@admin.com',
//     '+10961111144',
//     '+380777744345',
//     '2023-04-30T21:02:22.4545659',
//     '0001-01-01T00:00:00',
//     '2023-06-18T10:40:27.355031',
//     '' + false,
//     'admin'
//   ),
// ];
