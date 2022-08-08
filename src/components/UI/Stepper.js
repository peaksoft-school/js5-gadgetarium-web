import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'

const ProgressStepper = ({ activeStep, steps, completed }) => {
   return (
      <Stepper activeStep={activeStep}>
         {steps.map((step, index) => (
            <Step key={step} completed={completed[index]}>
               <StepLabel
                  sx={{
                     svg: {
                        '&.Mui-active': {
                           fill: '#CB11AB',
                        },
                        '&.Mui-completed': {
                           fill: '#CB11AB',
                        },
                     },
                     span: {
                        '&.Mui-active': {
                           color: '#CB11AB',
                        },
                        '&.Mui-completed': {
                           color: '#CB11AB',
                        },
                     },
                  }}
               >
                  {step}
               </StepLabel>
            </Step>
         ))}
      </Stepper>
   )
}
export default ProgressStepper
