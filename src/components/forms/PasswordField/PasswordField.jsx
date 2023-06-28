import * as React from 'react';
import { useField } from 'formik';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Password({ label, width, ...props }) {
  //Password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const [field, meta] = useField(props);

  //controled
  const defaultProperties = {
    error: null,
    info: null,
  };
  const [properties, setProperties] = React.useState(defaultProperties);

  const changeProperties = (touched, error) => {
    if ((touched && error) === false) {
      setProperties({
        sx: { margin: '0 8px 8px 8px', width: `${width}ch` },
        label,
        type: 'email',
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
  }, [meta.touched && meta.error && meta.value]);

  return (
    <div className="input-box">
      <FormControl
        sx={{ margin: '0 8px 8px 8px', width: `${width}ch` }}
        variant="filled"
        defaultValue="Normal"
        {...properties}
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          {...field}
          {...props}
          // id="filled-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div className="error-validation" style={{ width: `${width}ch` }}>
        <p className="error-validation__message">{properties.info}</p>
      </div>
    </div>
  );
}
