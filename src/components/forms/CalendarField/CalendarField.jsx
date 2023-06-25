import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/zh-cn';
import { deDE } from '@mui/x-date-pickers/locales';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { Formik, Form, useField } from 'formik';
import Box from '@mui/material/Box';

export default function ResponsiveDatePickers({
  label,
  width,
  dateValue,
  setDateValue,
}) {
  const handleChange = value => {
    const date = value.$D;
    const month = value.$M;
    const now = new Date();
    // const fakeEvent = {
    //   target: {
    //     value: value.$d.toISOString(),
    //   },
    // };

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
          sx={{ m: 1, width: `${width}ch` }}
          label={label}
          slotProps={{
            textField: { variant: 'filled' },
          }}
          onChange={handleChange}
        />
        {/* <DatePicker
          label="Filled picker"
          slotProps={{ textField: { variant: 'filled' } }}
        /> */}
        <div className="error-validation" style={{ width: `${width}ch` }}>
          {/* <p className="error-validation__message">{properties.info}</p> */}
        </div>
      </LocalizationProvider>
    </div>
  );
}
// export default function CalendarField({ width, label, ...props }) {
//   const [field, meta] = useField(props);
//   const defaultProperties = {
//     error: null,
//     sx: { m: 1, width: `${width}ch` },
//     // id: 'filled-search',
//     label,
//     type: 'date',
//     variant: 'filled',
//     info: null,
//     color: 'primary',
//     // focused: false,
//   };

//   const [properties, setProperties] = React.useState(defaultProperties);

//   const changeProperties = (touched, error) => {
//     if ((touched && error) === false) {
//       setProperties({
//         sx: { m: 1, width: `${width}ch` },
//         id: 'filled-search',
//         label,
//         type: 'date',
//         variant: 'filled',
//         info: null,
//       });
//     }
//     if ((touched && error) === undefined) {
//       setProperties({
//         ...properties,
//         error: null,
//         info: null,
//         color: 'success',
//         focused: true,
//       });
//     }
//     if (touched && error) {
//       setProperties({
//         ...properties,
//         error: true,
//         info: error,
//       });
//     }
//   };

//   React.useEffect(() => {
//     setTimeout(() => {
//       changeProperties(meta.touched, meta.error);
//     }, 500);
//   }, [meta.touched && meta.error]);

//   const handleChange = e => {
//     console.log(e.target.value);
//     // setProperties(e.target.value);
//   };
//   return (
//     <div className="input-box">
//       {/* <LocalizationProvider dateAdapter={AdapterDayjs} onClick={handleChange}>
//         <DatePicker />
//       </LocalizationProvider> */}
{
  /* <div className="error-validation" style={{ width: `${width}ch` }}>
        <p className="error-validation__message">{properties.info}</p>
      </div> */
}
//       <TextField
//         {...properties}
//         {...field}
//         {...props}
//         // type="date"
//         // variant="filled"
//         // value={properties}
//         onChange={e => {
//           handleChange(e);
//         }}
//       />
//       <div className="error-validation" style={{ width: `${width}ch` }}>
//         <p className="error-validation__message">{properties.info}</p>{' '}
//       </div>
//     </div>
//   );
// }
// export default function CalendarField({ width, label, ...props }) {
//   const [field, meta] = useField(props);
//   const defaultProperties = {
//     error: null,
//     sx: { m: 1, width: `${width}ch` },
//     id: 'filled-search',
//     label,
//     type: 'text',
//     variant: 'filled',
//     info: null,
//     color: 'primary',
//     // focused: false,
//   };

//   const [properties, setProperties] = React.useState(defaultProperties);

//   const changeProperties = (touched, error) => {
//     if ((touched && error) === false) {
//       setProperties({
//         sx: { m: 1, width: `${width}ch` },
//         id: 'filled-search',
//         label,
//         type: 'text',
//         variant: 'filled',
//         info: null,
//       });
//     }
//     if ((touched && error) === undefined) {
//       setProperties({
//         ...properties,
//         error: null,
//         info: null,
//         color: 'success',
//         focused: true,
//       });
//     }
//     if (touched && error) {
//       setProperties({
//         ...properties,
//         error: true,
//         info: error,
//       });
//     }
//   };

//   React.useEffect(() => {
//     setTimeout(() => {
//       changeProperties(meta.touched, meta.error);
//     }, 500);
//   }, [meta.touched && meta.error]);
//   return (
//     <div className="input-box">
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker {...properties} {...field} {...props} />
//       </LocalizationProvider>
//       <div className="error-validation" style={{ width: `${width}ch` }}>
//         <p className="error-validation__message">{properties.info}</p>
//       </div>
//     </div>
//   );
// }
