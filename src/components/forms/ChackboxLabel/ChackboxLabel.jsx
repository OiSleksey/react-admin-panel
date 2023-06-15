import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

export default function CheckboxLabels({ children, width, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <FormControlLabel
        sx={{ margin: '8px', width: `${width}ch`, marginTop: 0 }}
        control={<Checkbox {...field} {...props} />}
        label="Keep me logged in"
      />
      {/* <div className="error-validation" style={{ width: `${width}ch` }}>
        <p className="error-validation__message">{meta.info}</p>
      </div> */}
    </div>
  );
}
