import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import {
  Box, FormControl, FormHelperText, Grid, MenuItem, Pagination, Select, TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';
import { getItems } from '../action/albumAction';
import Header from '../component/Header';

function Album({
  comp, album, dispatch, parent, handleDrawerOpen, open,
}) {
  const { id } = useParams();
  const {
    link, label, titleParam, searchParam, orderParam,
  } = comp;
  const {
    error, items, total, loading,
  } = album;

  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
    setPage(1);
  };

  const handleChangeSize = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(total / size);
  const firstItem = (total) ? size * (page - 1) + 1 : 0;
  const lastItem = Math.min(size * page, total);

  useEffect(() => {
    const params = { offset: (page - 1) * size, limit: size };
    if (search) {
      params[searchParam] = search;
    }
    if (order) {
      params.orderBy = order;
    }
    const apiLink = (parent && id) ? `${parent}/${id}/${link}` : link;
    dispatch(getItems(apiLink, params, titleParam));
  }, [parent, comp, search, order, size, page]);

  if (error) {
    return (
      <Navigate to="/500" replace />
    );
  }

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <Box>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        heading={label}
      />
      <Grid container justifyContent="space-evenly">
        <Grid item sx={{ m: 1, minWidth: 120 }}>
          <TextField size="small" placeholder="Title" value={search} onChange={handleChangeSearch} />
          <FormHelperText>Search</FormHelperText>
        </Grid>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={order}
              onChange={handleChangeOrder}
              size="small"
            >
              {
                orderParam.map((item) => (
                  <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>Sort by</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={size}
              onChange={handleChangeSize}
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
      <Grid container justifyContent="center">
        {
          items.map(
            (item) => (
              <Thumbnail key={item.id} profile={item} path={comp.link} />
            ),
          )
        }
      </Grid>
    </Box>
  );
}

Album.propTypes = {
  comp: PropTypes.exact({
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    titleParam: PropTypes.string.isRequired,
    searchParam: PropTypes.string.isRequired,
    orderParam: PropTypes.arrayOf(
      PropTypes.exact({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  album: PropTypes.exact({
    loading: PropTypes.bool,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      alias: PropTypes.string,
    })),
    error: PropTypes.bool.isRequired,
  }).isRequired,
  parent: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default connect((store) => ({
  album: store.get('album'),
}))(Album);
