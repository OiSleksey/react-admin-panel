import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useField } from 'formik';

export default function InputRadioGroup({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-box">
      <FormControl>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
          }}
        >
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            sx={{ marginRight: '20px' }}
          >
            {label}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            {...field}
            {...props}
          >
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
              <FormControlLabel
                sx={{ display: 'flex', alignItems: 'start' }}
                value="manager"
                control={<Radio sx={{ paddingTop: '0' }} />}
                label="Maneger"
              />
              <FormControlLabel
                sx={{ display: 'flex', alignItems: 'start' }}
                value="admin"
                control={<Radio sx={{ paddingTop: '0' }} />}
                label="Admin"
              />
            </Box>
          </RadioGroup>
        </Box>
      </FormControl>
    </div>
  );
}
