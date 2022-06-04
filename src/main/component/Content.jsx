import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import type from '../constant/type';
import Album from '../common/Album';
import Profile from '../common/Profile';

function Content({ setHeading }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="100%" sx={{ mt: 5, mb: 5 }}>
        <Routes>
          <Route index element={<div>TODO</div>} />
          {
            type.map(
              (item) => (
                <Route
                  key={item.link}
                  path={item.link}
                  element={<Album comp={item} setHeading={setHeading} />}
                />
              ),
            )
          }
          {
            type.map(
              (item) => (
                <Route key={item.link} path={`${item.link}/:id`} element={<Profile setHeading={setHeading} />} />
              ),
            )
          }
        </Routes>
      </Container>
    </Box>
  );
}

Content.propTypes = {
  setHeading: PropTypes.func.isRequired,
};

export default Content;
