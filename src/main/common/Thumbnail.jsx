import React from 'react';
import {
  Card, CardActionArea, CardHeader, CardMedia,
} from '@mui/material';
import PropTypes from 'prop-types';
import imageNotFound from '../assets/imagenotfound.jpg';

function Thumbnail({ profile, path }) {
  const { id, title, thumbnail } = profile;

  return (
    <Card sx={{
      height: '340px', width: '270px', margin: '10px', padding: '10px',
    }}
    >
      <CardActionArea href={`#/${path}/${id}`}>
        <CardHeader
          title={title.slice(0, 14)}
        />
        <CardMedia
          sx={{ height: '250px', width: '250px' }}
          component="img"
          src={`${thumbnail.path}/standard_medium.${thumbnail.extension}`}
          onError={(e) => { e.target.src = imageNotFound; }}
        />
      </CardActionArea>
    </Card>
  );
}

Thumbnail.propTypes = {
  profile: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.exact({
      path: PropTypes.string,
      extension: PropTypes.string,
    }).isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Thumbnail;
