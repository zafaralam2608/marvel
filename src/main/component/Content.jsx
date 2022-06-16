import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import Album from '../common/Album';
import Profile from '../common/Profile';
import Error from '../common/Error';
import navList from '../constant/nav';
import albumList from '../constant/album';
import profileList from '../constant/profile';
import errorList from '../constant/error';

function Content({ handleDrawerOpen, open }) {
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
          <Route index element={<Navigate to={navList[0].link} replace />} />
          {
            albumList.map(
              (item) => (
                <Route
                  key={item.link}
                  path={item.link}
                  element={(
                    <Album
                      comp={item}
                      parent=""
                      handleDrawerOpen={handleDrawerOpen}
                      open={open}
                    />
                  )}
                />
              ),
            )
          }
          {
            profileList.map(
              (item) => (
                <Route
                  key={`${item.link}-id`}
                  path={`${item.link}/:id`}
                  element={(
                    <Profile
                      comp={item}
                      handleDrawerOpen={handleDrawerOpen}
                      open={open}
                    />
                  )}
                />
              ),
            )
          }
          {
            profileList.map(
              (der) => (
                der.child.map(
                  (item) => (
                    <Route
                      key={`${der.link}-id-${item.link}`}
                      path={`${der.link}/:id/${item.link}`}
                      element={(
                        <Album
                          comp={item}
                          parent={der.link}
                          handleDrawerOpen={handleDrawerOpen}
                          open={open}
                        />
                      )}
                    />
                  ),
                )
              ),
            )
          }
          {
            errorList.map(
              (item) => (
                <Route
                  key={item.link.slice(1)}
                  path={item.link}
                  element={(
                    <Error
                      comp={item}
                      handleDrawerOpen={handleDrawerOpen}
                      open={open}
                    />
                  )}
                />
              ),
            )
          }
          <Route path="*" element={<Navigate to={errorList[0].link} replace />} />
        </Routes>
      </Container>
    </Box>
  );
}

Content.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default Content;
