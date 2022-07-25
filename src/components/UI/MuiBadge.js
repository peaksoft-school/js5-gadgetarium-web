import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export default function MuiBadge({ children, counter }) {
   return <StyledBadge badgeContent={counter}>{children}</StyledBadge>
}

const StyledBadge = styled(Badge)({
   '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      padding: '0 4px',
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
