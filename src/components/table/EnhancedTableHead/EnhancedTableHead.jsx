import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
// import './EnhancedTableHead.scss';

const headCells = [
  {
    id: 'id',
    label: 'Id',
    numeric: true,
    disablePadding: true,
    paddingRight: 10,
    // minWidth: 170
  },
  {
    id: 'createdAt',
    label: 'Created',
    numeric: true,
    disablePadding: false,
    // minWidth: 100
  },
  {
    id: 'name',
    label: 'Name',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone',
    numeric: true,
    disablePadding: false,
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
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'hireDate',
    label: 'Date of hire',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'dateOfBirth',
    label: 'Birthday',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'lastLoginAt',
    label: 'Last entry',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'blocked',
    label: 'Blocked',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
  {
    id: 'role',
    label: 'Role',
    numeric: true,
    disablePadding: false,
    // minWidth: 170,
    // align: 'right',
    // format: value => value.toFixed(2),
  },
];

export default function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
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
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
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
              onClick={createSortHandler(headCell.id)}
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
}
