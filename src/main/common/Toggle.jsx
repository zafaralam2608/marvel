import React, { useContext } from 'react';
import {
  Box, FormControlLabel, IconButton, Switch, useTheme,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../constant/context';

function Toggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const darkMode = (theme.palette.mode === 'dark');

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={colorMode.toggleColorMode} />}
        label={`${darkMode ? 'Dark' : 'Light'} mode`}
      />
      <IconButton
        sx={{ borderRadius: 0 }}
        variant="outlined"
        size="medium"
        disabled
      >
        { darkMode ? <Brightness4 /> : <Brightness7 /> }
      </IconButton>
    </Box>
  );
}

export default Toggle;
