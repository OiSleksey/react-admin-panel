import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function SwitchFilter({
  dataName,
  labelName,
  handleChange,
  isChecked,
}) {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={event => {
              handleChange(event, dataName);
            }}
            name="gilad"
          />
        }
        label={labelName}
      />
    </FormControl>
  );
}
