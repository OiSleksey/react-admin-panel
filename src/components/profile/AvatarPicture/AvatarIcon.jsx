import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  if (!name) return;
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function AvatarPicture({ nameProfile }) {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <Avatar
        {...stringAvatar(nameProfile)}
        sx={{
          backgroundColor: theme.palette.text.primary,
          fontWeight: 500,
          minWidth: { xs: '100px', sm: '130px' },
          minHeight: { xs: '100px', sm: '130px' },
          fontSize: { xs: '50px', sm: '70px' },
        }}
      />
    </Stack>
  );
}
