import React from 'react';
import {
  Card, CardHeader, CardMedia,
} from '@mui/material';
import PropTypes from 'prop-types';

function Thumbnail({ profile }) {
  const { id, title, thumbnail } = profile;

  return (
    <Card sx={{
      height: '340px', width: '270px', margin: '10px', padding: '10px',
    }}
    >
      <CardHeader
        title={<a href={`/characters/${id}`} style={{ textDecoration: 'none' }} title={title}>{ title.slice(0, 16)}</a>}
      />
      <CardMedia
        sx={{ height: '250px', width: '250px' }}
        component="img"
        src={`${thumbnail.path}/standard_large.${thumbnail.extension}`}
      />
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
};

export default Thumbnail;
