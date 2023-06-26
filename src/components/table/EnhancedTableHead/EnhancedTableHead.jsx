import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { connect } from 'react-redux';
import { getArrActiveColumns } from '../../../store/selectors/filterTable.selector';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
// import { getThemeMode } from '../../../../store/selectors/ui.selector';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

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

  const colorLightGrey = '#3d3a50';
  const colorBlue = '#580ef6';
  const colorWhite = '#f7f7f7';
  const theme = useTheme();
  return (
    <TableHead
      sx={{
        background: theme.palette.action.selected,
        // background: theme.palette.background.paper
      }}
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
