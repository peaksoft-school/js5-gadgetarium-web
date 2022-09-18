import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export default function MuiBadge({ onClick, children, counter }) {
   return (
      <StyledBadge badgeContent={counter} onClick={onClick}>
         {children}
      </StyledBadge>
   )
}

const StyledBadge = styled(Badge)({
   '& .MuiBadge-badge': {
      padding: '2px',
      fontSize: '10px',
      fontWeight: '400',
      color: '#FFFFFF',
      backgroundColor: '#F53B49',
      border: '2px solid #1A1A25',
   },
   badge: {
      iconColor: 'red',
   },
})
