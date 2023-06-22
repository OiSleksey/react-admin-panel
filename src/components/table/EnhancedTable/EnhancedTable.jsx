import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './EnhancedTable.scss';
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead';
import EnhancedTableToolbar from '../EnhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableBody from '../EnhancedTableBody/EnhancedTableBody';
import { getArrDisplayUsers } from '../../../store/selectors/dataUsers.selector';
import { connect } from 'react-redux';

const EnhancedTable = ({ displayUsers }) => {
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
      containerRef.current.removeEventListener('wheel', handleWheel, {
        passive: false,
      });
    };
  }, []);
  // const handleScroll = event => {
  //   event.preventDefault();
  // };
  // const body = document.querySelector('body');
  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY);
  //   console.log(window.scrollX);
  //   window.scrollTo(0, 0);
  // });

  // const handleWheel = event => {
  //   const container = containerRef.current;
  //   // console.log(verticalScroll);
  //   if (event.altKey) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //     const scrollAmount = event.deltaY;
  //     container.scrollTo({
  //       top: 0,
  //       left: container.scrollLeft + scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   }
  //   event.preventDefault();
  //   // if (document.body.doScroll) {
  //   //   containerRef.current.doScroll(event.wheelDelta > 0 ? 'left' : 'right');
  //   // } else if ((event.wheelDelta || event.detail) > 0) {
  //   //   containerRef.current.scrollLeft -= 10;
  //   //   console.log('left');
  //   // } else {
  //   //   containerRef.current.scrollLeft += 10;
  //   //   console.log('right');
  //   // }

  //   // return false;
  // };
  // const scrollToTop = () => {
  //   console.log(window.scrollY);

  // };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, position: 'relative' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer
          sx={{ maxHeight: 1440, overflowX: 'auto' }}
          ref={containerRef}
          onWheel={handleWheel}
          // onClick={scrollToTop}
        >
          <Table
            sx={{ minWidth: 750 }}
            // aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            stickyHeader
            aria-label="sticky table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <EnhancedTableBody
              selected={selected}
              setSelected={setSelected}
              order={order}
              orderBy={orderBy}
              page={page}
              dense={dense}
              rowsPerPage={rowsPerPage}
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
      </Paper>
    </Box>
  );
};

// flex-shrink: 0;
const mapState = state => {
  return {
    displayUsers: getArrDisplayUsers(state),
  };
};
export default connect(mapState)(EnhancedTable);
