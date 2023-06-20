import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

export default function NumberField({ width, label, ...props }) {
  //controled
  // console.log(label);
  const [field, meta] = useField(props);
  const defaultProperties = {
    error: null,
    sx: { m: 1, width: `${width}ch` },
    id: 'filled-search',
    label,
    type: 'number',
    variant: 'filled',
    info: null,
    color: 'primary',
    // focused: false,
  };

  const [properties, setProperties] = React.useState(defaultProperties);

  const changeProperties = (touched, error) => {
    if ((touched && error) === false) {
      setProperties({
        sx: { m: 1, width: `${width}ch` },
        id: 'filled-search',
        label,
        type: 'number',
        variant: 'filled',
        info: null,
      });
    }
    if ((touched && error) === undefined) {
      setProperties({
        ...properties,
        error: null,
        info: null,
        color: 'success',
        focused: true,
      });
    }
    if (touched && error) {
      setProperties({
        ...properties,
        error: true,
        info: error,
      });
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      changeProperties(meta.touched, meta.error);
    }, 500);
  }, [meta.touched && meta.error]);

  return (
    <div className="input-box">
      <TextField {...properties} {...field} {...props} />
      <div className="error-validation" style={{ width: `${width}ch` }}>
        <p className="error-validation__message">{properties.info}</p>
      </div>
    </div>
  );
}
