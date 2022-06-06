import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import { derived, navs, root } from '../constant/route';
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
          <Route index element={<Navigate to={navs[0].link} replace />} />
          {
            root.map(
              (item) => (
                <Route
                  key={item.key}
                  path={item.link}
                  element={<Album comp={item} setHeading={setHeading} />}
                />
              ),
            )
          }
          {
            root.map(
              (item) => (
                <Route key={item.key} path={`${item.link}/:id`} element={<Profile setHeading={setHeading} />} />
              ),
            )
          }
          {
            derived.map(
              (der) => (
                der.child.map(
                  (item) => (
                    <Route
                      key={item.link}
                      path={`${der.link}/:id${item.link}`}
                      element={<Album comp={item} setHeading={setHeading} />}
                    />
                  ),
                )
              ),
            )
          }
          <Route path="*" element={<div>TODO Not Found</div>} />
        </Routes>
      </Container>
    </Box>
  );
}

Content.propTypes = {
  setHeading: PropTypes.func.isRequired,
};

export default Content;
