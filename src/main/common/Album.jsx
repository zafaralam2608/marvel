import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Box, FormControl, FormHelperText, Grid, MenuItem, Pagination, Select, TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';
import { getItems } from '../action/albumAction';

function Album({ album, dispatch }) {
  const { items, total, loading } = album;

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [search, setSearch] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const totalPages = Math.ceil(total / itemsPerPage);
  const offset = (page - 1) * itemsPerPage;
  const firstItem = (total) ? itemsPerPage * (page - 1) + 1 : 0;
  const lastItem = (itemsPerPage * page < total) ? itemsPerPage * page : total;

  useEffect(() => {
    dispatch(getItems(offset, itemsPerPage, search));
  }, [offset, itemsPerPage, search]);

  return (
    <Box>
      <Grid container justifyContent="space-evenly">
        <Grid item sx={{ m: 1, minWidth: 120 }}>
          <TextField size="small" placeholder="Search" value={search} onChange={handleChangeSearch} />
        </Grid>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={itemsPerPage}
              onChange={handleChangeItemsPerPage}
              size="small"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
            <FormHelperText>Items per page</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <Pagination count={totalPages} page={page} onChange={handleChangePage} color="primary" variant="outlined" shape="rounded" size="large" showFirstButton showLastButton />
          <FormHelperText>{`Showing ${firstItem} to ${lastItem} of ${total} items`}</FormHelperText>
        </Grid>
      </Grid>
      {
        loading
          ? (<Spinner />)
          : (
            <Grid container justifyContent="center">
              {
                items.map(
                  (item) => (
                    <Thumbnail key={item.id} profile={item} />
                  ),
                )
              }
            </Grid>
          )
      }
    </Box>
  );
}

Album.propTypes = {
  dispatch: PropTypes.func.isRequired,
  album: PropTypes.exact({
    loading: PropTypes.bool,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      alias: PropTypes.string,
    })),
  }).isRequired,
};

export default connect((store) => ({
  album: store.get('album'),
}))(Album);
