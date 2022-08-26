import { forwardRef } from 'react'

import Selects from 'react-select'
import styled from 'styled-components'

import { ReactComponent as MiniImagePicker } from '../../assets/icons/imageMiniPicker.svg'

const Select = forwardRef((props, ref) => {
   const { placeholder, label, options, onChange, value } = props
   const colourStyles = {
      control: (style, { isFocused }) => ({
         ...style,
         display: 'flex',
         backgroundColor: 'white',
         borderRadius: '6px',
         boxShadow: 'none',
         border: `${props.border}`,
         borderColor: isFocused ? '#c4c4c4' : style.borderColor,
         '&:hover': {
            borderColor: isFocused ? '#c4c4c4' : style.borderColor,
         },
      }),
      option: (styles, { isSelected, isFocused }) => {
         return {
            ...styles,
            zIndex: 999,
            borderRadius: '11px',
            display: 'grid',
            height: '40px',
            margin: '2px 0',
            maxHeight: '293px',
            overflowY: 'auto',
            backgroundColor: isSelected && '#CB11AB',
            ':hover': {
               ...styles[':hover'],
               backgroundColor: isFocused && '#cb11ac70',
               color: '#fff',
            },
         }
      },
      indicatorSeparator: () => ({
         display: 'none',
      }),
      placeholder: (provided) => ({
         ...provided,
         fontFamily: 'Inter , sans-serif',
         fontStyle: 'normal',
         fontWeight: '300',
         fontSize: '16px',
         lineHeight: '19px',
         color: '#91969E',
      }),
   }
   return (
      <SelectDiv {...props}>
         {props.variant === 'brand' && (
            <StyledSpanContaner>
               <MiniImagePicker />
            </StyledSpanContaner>
         )}
         <Label htmlFor={label}>{label}</Label>
         <StyleSelect
            style={{ display: 'flex' }}
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            value={value}
            inputRef={ref}
            isSearchable={false}
            styles={colourStyles}
            {...props}
         />
      </SelectDiv>
   )
})
export default Select

const SelectDiv = styled.div`
   width: 396px;
   height: 56px;
   padding-bottom: 20px;
   & .css-319lph-ValueContainer {
      padding: ${(props) =>
         props.variant === 'brand' ? '2px 8px 2px 30px' : '2px 8px'};
   }
   & Select::placeholder {
      color: #8d949e;
      font-size: 16px;
   }
`
const Label = styled.label`
   color: #464444;
   font-family: 'Inter';
   font-weight: 400;
   font-style: normal;
   font-size: 17px;
   line-height: 15px;
   margin-bottom: 20px;
`
const StyleSelect = styled(Selects)`
   width: ${(props) => (props.width ? props.width : '396px')};
   height: ${(props) => (props.height ? props.height : '35px')};
   margin-top: 6px;
   border-radius: 6px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 24px;
   color: #020202;
   z-index: ${(props) => (props.variant === 'category' ? '999' : 'none')};
`
const StyledSpanContaner = styled.span`
   position: absolute;
   transform: translateY(38px);
   z-index: 99;
   margin-left: 9px;
   cursor: pointer;
`
