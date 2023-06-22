import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { connect } from 'react-redux';
import { getArrActiveColumns } from '../../../store/selectors/filterTable.selector';
import { MapSharp } from '@mui/icons-material';
// import './EnhancedTableHead.scss';

const headCells = [
  {
    id: 'id',
    label: 'Id',
    numeric: true,
    disablePadding: true,
    sorted: true,
    paddingRight: 10,
    // minWidth: 170
  },

  {
    id: 'name',
    label: 'Name',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'homePhone',
    label: 'Home phone',
    numeric: true,
    disablePadding: false,
    minWidth: 150,
    sorted: true,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'createdAt',
    label: 'Created',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 100
  },
  {
    id: 'hireDate',
    label: 'Date of hire',
    numeric: true,
    disablePadding: false,
    minWidth: 140,
    sorted: true,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'dateOfBirth',
    label: 'Birthday',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'lastLoginAt',
    label: 'Last entry',
    numeric: true,
    disablePadding: false,
    minWidth: 130,
    sorted: true,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'blocked',
    label: 'Blocked',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'role',
    label: 'Role',
    numeric: true,
    disablePadding: false,
    sorted: true,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'change',
    label: 'Change',
    numeric: true,
    disablePadding: false,
    sorted: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
];

const EnhancedTableHead = props => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowsLength,
    onRequestSort,
    activeHeadCell,
    // arrActiveColumns,
  } = props;

  // const activeHeadCell = headCells.filter(cell =>
  //   arrActiveColumns.includes(cell.id)
  // );

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  const styleTableCell = (width, padding) => {
    const minWidth = width ? `${width}px` : null;
    const paddingRight = padding ? `${padding}px` : null;
    const style = {
      minWidth,
      paddingRight,
    };
    return style;
  };
  return (
    <TableHead
    // sx={{ position: 'sticky', top: '20px' }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowsLength}
            checked={rowsLength > 0 && numSelected === rowsLength}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {activeHeadCell.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={styleTableCell(headCell.minWidth, headCell.paddingRight)}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={headCell.sorted ? createSortHandler(headCell.id) : null}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const mapState = state => {
  return {
    arrActiveColumns: getArrActiveColumns(state),
  };
};

export default connect(mapState)(EnhancedTableHead);
