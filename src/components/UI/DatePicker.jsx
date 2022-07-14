import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ru } from 'date-fns/locale'

const DatePicker = ({
   label,
   width,
   height,
   selectedDate,
   setSelectedDate,
}) => {
   return (
      <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns}>
         <Stack sx={{ width: { width }, height: { height } }}>
            <MuiDatePicker
               views={['day']}
               label={label}
               value={selectedDate}
               disablePast
               inputFormat="dd.MM.yy"
               popperProps={{ strategy: 'fixed' }}
               onChange={(newValue) => setSelectedDate(newValue)}
               renderInput={(params) => (
                  <TextFieldStyle
                     {...params}
                     sx={{
                        '& .MuiOutlinedInput-root.Mui-focused': {
                           '& > fieldset': {
                              border: '1px solid #909CB5',
                           },
                        },
                     }}
                     border="none"
                     inputProps={{
                        ...params.inputProps,
                        readOnly: true,
                        placeholder: 'дд.мм.гг',
                     }}
                  />
               )}
            />
         </Stack>
      </LocalizationProvider>
   )
}

export default DatePicker

const TextFieldStyle = styled(TextField)`
   .MuiInputBase-root {
      border-radius: 6px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #8d949e;
      outline: none;
   }
`
