import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
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
