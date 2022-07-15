import MuiTooltip from '@mui/material/Tooltip'

const Tooltip = ({ children, title, placement }) => {
   return (
      <MuiTooltip title={title} placement={placement}>
         {children}
      </MuiTooltip>
   )
}
export default Tooltip
