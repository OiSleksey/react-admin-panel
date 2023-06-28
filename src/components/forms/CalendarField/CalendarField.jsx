import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/zh-cn';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function ResponsiveDatePickers({
  label,
  width,
  dateValue,
  setDateValue,
}) {
  const handleChange = value => {
    const inputDate = value.$d;
    if (inputDate == 'Invalid Date') return;
    setDateValue(inputDate);
  };
  return (
    <div className="input-box">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
        <MobileDatePicker
          format="D/M/YYYY"
          defaultValue={dayjs(dateValue)}
          sx={{ margin: '0 8px 8px 8px', width: `${width}ch` }}
          label={label}
          slotProps={{
            textField: { variant: 'filled' },
          }}
          onChange={handleChange}
        />
        <div className="error-validation" style={{ width: `${width}ch` }}>
          {/* <p className="error-validation__message">{properties.info}</p> */}
        </div>
      </LocalizationProvider>
    </div>
  );
}
