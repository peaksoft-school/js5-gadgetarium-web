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
               <StepLabel>{step}</StepLabel>
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
