import * as React from 'react'

import { styled } from '@mui/material'
import Step from '@mui/material/Step'
import MuiStepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'

const ProgressStepper = ({ steps, currentStep }) => {
   return (
      <Stepper activeStep={currentStep}>
         {steps.map((step, index) => (
            <Step
               completed={step.completed}
               active={currentStep === index}
               key={step}
            >
               <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {step}
               </StepLabel>
            </Step>
         ))}
      </Stepper>
   )
}
export default ProgressStepper

const StepLabel = styled(MuiStepLabel)`
   svg {
      &.Mui-active {
         fill: #cb11ab;
      }
      &.Mui-completed {
         fill: #cb11ab;
      }
   }
   span {
      &.Mui-active {
         color: #cb11ab;
      }
   }
`
function ColorlibStepIcon(props) {
   const { active, completed, className } = props

   const icons = {
      1: 1,
      2: 2,
      3: 3,
   }

   return (
      <ColorlibStepIconRoot
         ownerState={{ completed, active }}
         className={className}
      >
         {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
   )
}

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
   backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
   zIndex: 1,
   color: '#fff',
   width: 56,
   height: 56,
   fontWeight: 600,
   fontSize: 28,
   display: 'flex',
   borderRadius: '50%',
   justifyContent: 'center',
   alignItems: 'center',
   ...(ownerState.active && {
      background: '#cb11ab',
      // backgroundImage:
      //    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64
      // ,87) 50%, rgb(138,35,135) 100%)',
   }),
   ...(ownerState.completed && {
      background: '#cb11ab',
   }),
}))
