import { styled } from '@mui/material'

import Vector1 from '../../assets/icons/Vector1.svg'
import Vector2 from '../../assets/icons/Vector2.svg'
import Vector3 from '../../assets/icons/Vector3.svg'
import Vector4 from '../../assets/icons/Vector4.svg'
import Vector5 from '../../assets/icons/Vector5.svg'

const Pictures = () => {
   return (
      <Container>
         <img src={Vector1} alt="" />
         <img src={Vector2} alt="" />
         <img src={Vector3} alt="" />
         <img src={Vector4} alt="" />
         <img src={Vector5} alt="" />
      </Container>
   )
}

export default Pictures

const Container = styled('div')`
   width: 1270px;
   height: 192px;
   display: flex;
   justify-content: space-between;
   border: 1px solid red;
`
