import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ru } from 'date-fns/locale'
import styled from 'styled-components'

const DatePicker = ({ label, width, height, value, onChange }) => {
   return (
      <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns}>
         <StyledDivContainer width={width} height={height}>
            <MuiDatePicker
               views={['day']}
               label={label}
               value={value}
               disablePast
               inputFormat="dd.MM.yy"
               popperProps={{ strategy: 'fixed' }}
               onChange={onChange}
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
         </StyledDivContainer>
         {/* <StyledDivContainer width={width} height={height}> */}

         {/* </StyledDivContainer> */}
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

const StyledDivContainer = styled.div`
   width: ${(props) => props.width || '100%'};
   height: ${(props) => props.height || '100%'};
`
