import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { getProfile } from '../action/profileAction';
import Spinner from './Spinner';

function Profile({ profile, dispatch }) {
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProfile(id));
  }, []);

  const {
    loading, name, description, thumbnail,
  } = profile;

  console.log(name);
  if (loading) { return <Spinner />; }

  return (
    <Grid container spacing={3} alignContent="center">
      <Grid item lg={9} md={6} xs={12}>
        <Card>
          <CardHeader
            title="Description"
          />
          <CardContent sx={{ minHeight: '352px' }}>
            <Typography component="div" variant="subtitle1">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup variant="contained" fullWidth>
              <Button href={`/characters/${id}`}>
                Comics
              </Button>
              <Button href={`/characters/${id}`}>
                Series
              </Button>
              <Button href={`/characters/${id}`}>
                Stories
              </Button>
              <Button href={`/characters/${id}`}>
                Events
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <Card>
          <CardMedia
            sx={{
              height: '450px', width: '300px', marginLeft: 'auto', marginRight: 'auto', marginY: '10px',
            }}
            component="img"
            src={thumbnail}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.exact({
    loading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect((store) => ({
  profile: store.get('profile'),
}))(Profile);
