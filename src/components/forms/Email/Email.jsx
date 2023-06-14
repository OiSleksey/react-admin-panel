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

export default function Email() {
  //controled
  const [email, setEmail] = React.useState('');

  return (
    <div>
      <TextField
        sx={{ m: 1, width: '35ch' }}
        id="filled-search"
        label="Email"
        type="email"
        variant="filled"
        value={email}
        onChange={event => {
          console.log(email);
          setEmail(event.target.value);
        }}
      />
    </div>
  );
}
