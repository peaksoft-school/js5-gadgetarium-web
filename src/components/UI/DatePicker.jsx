import { forwardRef } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ru } from 'date-fns/locale'
import styled from 'styled-components'

const theme = createTheme({
   palette: {
      primary: {
         light: '#CB11AB',
         main: '#CB11AB',
         dark: '#CB11AB',
         contrastText: '#fff',
      },
   },
})

const DatePicker = forwardRef(
   ({ label, width, height, value, onChange, disablePast }, ref) => {
      return (
         <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns}>
            <StyledDivContainer width={width} height={height}>
               <ThemeProvider theme={theme}>
                  <MuiDatePicker
                     views={['day']}
                     label={label}
                     value={value}
                     disablePast={disablePast}
                     ref={ref}
                     sx={{
                        '& button.Mui-selected': {
                           backgroundColor: '#000',
                        },
                     }}
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
                           error={false}
                           border="none"
                           inputProps={{
                              ...params.inputProps,
                              readOnly: true,
                              placeholder: 'дд.мм.гг',
                           }}
                        />
                     )}
                  />
               </ThemeProvider>
            </StyledDivContainer>
         </LocalizationProvider>
      )
   }
)

export default DatePicker

const TextFieldStyle = styled(TextField)`
   .MuiInputBase-root {
      border-radius: 6px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #8d949e;
      outline: none;
      input {
         padding: 9px 10px;
      }
   }
`

const StyledDivContainer = styled.div`
   width: ${(props) => props.width || '100%'};
   height: ${(props) => props.height || '100%'};
`
