import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import { routes } from '../constant/route';

function Content() {
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
          {
                routes.map(
                  (route) => (
                    <Route key={route.key} path={route.link} element={route.component} />
                  ),
                )
              }
        </Routes>
      </Container>
    </Box>
  );
}

export default Content;
