import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

export default function InputTextField({ width, label, ...props }) {
  //controled
  const [field, meta] = useField(props);
  const defaultProperties = {
    error: null,
    sx: { margin: '0 8px 8px 8px', width: `${width}ch` },
    label,
    type: 'text',
    variant: 'filled',
    info: null,
    color: 'primary',
  };

  const [properties, setProperties] = React.useState(defaultProperties);

  const changeProperties = (touched, error) => {
    if ((touched && error) === false) {
      setProperties({
        sx: { margin: '0 8px 8px 8px', width: `${width}ch` },
        id: 'filled-search',
        label,
        type: 'text',
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
