import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { getProfile } from '../action/profileAction';
import Spinner from './Spinner';
import imageNotFound from '../assets/imagenotfound.jpg';

function Profile({
  comp, profile, dispatch, setHeading,
}) {
  const { id } = useParams();

  const {
    loading, title, description, thumbnail, error,
  } = profile;

  useEffect(() => {
    dispatch(getProfile(comp, id));
    setHeading(title);
  }, []);

  if (loading) { return <Spinner />; }

  if (error) {
    return (
      <Navigate to="/500" replace />
    );
  }

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
              {
                comp.child.map(
                  (item) => (
                    <Button key={item.link.slice(1)} href={`#/${comp.link}/${id}/${item.link}`} iden={`/${id}`}>
                      {item.label}
                    </Button>
                  ),
                )
              }
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
            onError={(e) => { e.target.src = imageNotFound; }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  comp: PropTypes.exact({
    link: PropTypes.string.isRequired,
    t: PropTypes.string.isRequired,
    child: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      q: PropTypes.string.isRequired,
      t: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.exact({
    loading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
  setHeading: PropTypes.func.isRequired,
};

export default connect((store) => ({
  profile: store.get('profile'),
}))(Profile);
