import styled from 'styled-components'

const Sale = (props) => {
   return <Price>{props.salePrice}</Price>
}
export default Sale
const Price = styled.div`
   background-color: red;
   border-radius: 50%;
   width: 36px;
   height: 36px;
   color: white;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 900;
   font-size: 12px;
   line-height: 15px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
`
