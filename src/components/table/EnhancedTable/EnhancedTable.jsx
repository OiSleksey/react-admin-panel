import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import './EnhancedTable.scss';
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead';
import EnhancedTableToolbar from '../EnhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableBody from '../EnhancedTableBody/EnhancedTableBody';
import { getArrDisplayUsers } from '../../../store/selectors/dataUsers.selector';
import { connect } from 'react-redux';
import { getArrActiveColumns } from '../../../store/selectors/filterTable.selector';
import Card from '@mui/material/Card';

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

const EnhancedTable = ({ displayUsers, arrActiveColumns }) => {
  const activeHeadCell = headCells.filter(cell =>
    arrActiveColumns.includes(cell.id)
  );

  activeHeadCell.push(headCells[headCells.length - 1]);

  const rows = displayUsers ? displayUsers : [];
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    console.log(orderBy);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Horizontal scroll on table
  const containerRef = React.useRef(null);

  const handleWheel = event => {
    if (event.altKey) {
      event.stopPropagation();
      event.preventDefault();

      containerRef.current.scrollBy({
        left: event.deltaY < 0 ? -40 : 40,
      });
    }
  };

  React.useEffect(() => {
    containerRef.current.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      if (!containerRef.current) return;
      containerRef.current.removeEventListener('wheel', handleWheel, {
        passive: false,
      });
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ width: '100%', mb: 2, position: 'relative' }} elevation={3}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer
          sx={{ maxHeight: 1440, overflowX: 'auto' }}
          ref={containerRef}
          onWheel={handleWheel}
          // onClick={scrollToTop}
        >
          <Table
            sx={{
              minWidth: 750,
              borderCollapse: 'separate',
            }}
            // aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            // stickyHeader
            aria-label="sticky table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowsLength={rows.length}
              activeHeadCell={activeHeadCell}
            />
            <EnhancedTableBody
              selected={selected}
              setSelected={setSelected}
              order={order}
              orderBy={orderBy}
              page={page}
              dense={dense}
              rowsPerPage={rowsPerPage}
              arrActiveColumns={arrActiveColumns}
            />
          </Table>
        </TableContainer>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
          sx={{ position: 'absolute', bottom: '0' }}
        /> */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ alignItems: 'center' }}
        />
      </Card>
    </Box>
  );
};

// flex-shrink: 0;
const mapState = state => {
  return {
    displayUsers: getArrDisplayUsers(state),
    arrActiveColumns: getArrActiveColumns(state),
  };
};

export default connect(mapState)(EnhancedTable);
