import React, { useEffect } from 'react';
import {
  Box, Button, Card, CardActions, CardHeader, CardMedia, Grid,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';

function Error({ comp, setHeading }) {
  const { title, message, image } = comp;
  useEffect(() => {
    setHeading(title);
  }, []);

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Grid container justifyContent="center">
        <Card sx={{ width: '100%', textAlign: 'center' }}>
          <CardHeader
            title={message}
          />
          <CardMedia
            sx={{
              height: '600px', width: '400px', margin: 'auto',
            }}
            component="img"
            image={image}
          />
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button href="/" variant="contained" size="large" startIcon={(<ArrowBackIcon fontSize="small" />)} sx={{ width: '250px' }}>
              Go Home
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}

Error.propTypes = {
  comp: PropTypes.exact({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  setHeading: PropTypes.func.isRequired,
};

export default Error;