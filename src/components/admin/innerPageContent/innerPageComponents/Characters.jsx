import styled from 'styled-components'

import { multipleDots } from '../../../../utils/helpers/general'

const Characters = ({ characters }) => {
   return (
      <Container>
         {characters?.map((el) => (
            <SubContainer key={el.id}>
               <LeftSide>
                  <p>{multipleDots(el.key)}</p>
               </LeftSide>
               <RightSide>
                  <p>{el.value}</p>
               </RightSide>
            </SubContainer>
         ))}
      </Container>
   )
}

export default Characters

const SubContainer = styled.div`
   display: flex;
   flex-direction: row;
`
const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 6px;
`

const LeftSide = styled.div`
   margin-right: 5px;
   color: #969696;
   white-space: nowrap;
   width: 308px;
   overflow: hidden;
   font-size: 15px;
`

const RightSide = styled.div`
   font-size: 15px;
   color: #292929;
   & p {
      white-space: nowrap;
   }
`
