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
import Email from '../Email/Email';
import Password from '../Password/Password';
import CheckboxLabels from '../ChackboxLabel/ChackboxLabel';
import Submit from '../Submit/Submit';
import './LoginForm.scss';

export default function LoginForm() {
  return (
    <div className="login-form">
      <Box sx={{}} component="form">
        <Email />
        <Password />
        <CheckboxLabels />
        <div className="login-form__submit">
          <Submit />
        </div>
      </Box>
    </div>
  );
}
