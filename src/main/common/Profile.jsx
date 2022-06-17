import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Badge, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { getProfile } from '../action/profileAction';
import Spinner from './Spinner';
import imageNotFound from '../assets/imagenotfound.jpg';
import Header from '../component/Header';

function Profile({ comp, profile, dispatch }) {
  const { id } = useParams();
  const { link, titleParam, child } = comp;
  const {
    loading, title, description, thumbnail, count, error,
  } = profile;

  useEffect(() => {
    dispatch(getProfile(`${link}/${id}`, titleParam, child));
  }, [comp, id]);

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
      <Header heading={title} />
      <Grid container spacing={3} alignContent="center" wrap="wrap-reverse">
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
              <Grid container justifyContent="center">
                {
                  child.map(
                    (item) => (
                      <Button
                        key={item.link}
                        variant="contained"
                        color="primary"
                        size="large"
                        href={`#/${link}/${id}/${item.link}`}
                        disabled={!count[item.link]}
                        sx={{ width: '180px', margin: '5px' }}
                        endIcon={(
                          <Badge badgeContent={count[item.link]} color="secondary" max={9999} showZero>
                            {item.icon}
                          </Badge>
                        )}
                      >
                        {item.label}
                      </Button>
                    ),
                  )
                }
              </Grid>
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
    </Box>
  );
}

Profile.propTypes = {
  comp: PropTypes.exact({
    link: PropTypes.string.isRequired,
    titleParam: PropTypes.string.isRequired,
    child: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.exact({
    loading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    count: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect((store) => ({
  profile: store.get('profile'),
}))(Profile);
