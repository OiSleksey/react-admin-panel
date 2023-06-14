import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormControlLabel
      sx={{ margin: '8px' }}
      control={<Checkbox defaultChecked />}
      label="Keep me logged in"
    />
  );
}
