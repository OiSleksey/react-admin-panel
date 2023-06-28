import * as React from 'react';
import { useField } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({ children, width, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <FormControlLabel
        sx={{ margin: '8px', width: `${width}ch`, marginTop: 0 }}
        control={<Checkbox {...field} {...props} />}
        label="Keep me logged in"
      />
    </div>
  );
}
