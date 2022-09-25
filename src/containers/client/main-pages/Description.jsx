import styled from 'styled-components'

// import banner from '../../../assets/images/banner.jpg'

const Description = (props) => {
   return (
      <Container>
         {props.video && <img src={props.video} alt="#" />}
         <Text>
            <strong>{props.name}</strong>
            <p>{props.description}</p>
         </Text>
      </Container>
   )
}
export default Description
const Container = styled.div`
   & img {
      width: 100%;
      padding: 0px;
      margin: 50px 0px;
   }
`
const Text = styled.div`
   margin: 20px auto;
   width: 85%;
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: #384255;
      text-align: justify;
   }
   & strong {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 120%;
      color: #384255;
      margin: 20px 0px;
   }
`
