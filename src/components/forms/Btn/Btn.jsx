import * as React from 'react';
import Button from '@mui/material/Button';

export default function Btn(props) {
  const { text, width, ...otherProp } = props;
  return (
    <Button {...otherProp} sx={{ m: 1, width: `${width}ch` }}>
      {text}
    </Button>
  );
}
