import styled from 'styled-components'

import banner from '../../../assets/images/banner.jpg'

const Description = () => {
   return (
      <Container>
         <img src={banner} alt="#" />
         <Text>
            <strong>Non ultricies sollicitudin nisi quisque?</strong>
            <p>
               Non ultricies sollicitudin nisi quisque. Morbi integer quis
               tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
               scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
               molestie odio. Adipiscing etiam vitae in semper sed eget nec
               aliquet aliquam. Morbi integer quis tincidunt vitae penatibus.
               Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam
               rhoncus adipiscing. Sem tortor molestie odio.Adipiscing etiam
               vitae in semper sed eget nec aliquet aliquam. Non ultricies
               sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
               penatibus. Feugiat quis tincidunt volutpat scelerisque elit
               fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
               Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.
               Morbi integer quis tincidunt vitae penatibus. Feugiat quis
               tincidunt volutpat scelerisque elit fermentum nullam rhoncus
               adipiscing. Sem tortor molestie odio.
               <br />
               Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.
               Non ultricies sollicitudin nisi quisque. Morbi integer quis
               tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
               scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
               molestie odio Vel at convallis tempus nisl ut posuere. Sagittis
               vitae sodales scelerisque egestas platea nulla aenean. Facilisis
               feugiat est aliquet amet eu neque. Magna elementum laoreet
               tincidunt dolor, quam pulvinar.
               <br />
               Feugiat lectus iaculis tortor magna vel eget in sem amet. Metus,
               tellus diam in neque sit sagittis ullamcorper. Nisl pulvinar
               lobortis enim morbi arcu, sed dictumst id. Tellus dolor eget
               magna auctor molestie eget. Vel at convallis tempus nisl ut
               posuere.
               <br />
               Sagittis vitae sodales scelerisque egestas platea nulla aenean.
               Facilisis feugiat est aliquet amet eu neque. Magna elementum
               laoreet tincidunt dolor, quam pulvinar. Feugiat lectus iaculis
               tortor magna vel eget in sem amet. Metus, tellus diam in neque
               sit sagittis ullamcorper. Nisl pulvinar lobortis enim morbi arcu,
               sed dictumst id. Tellus dolor eget magna auctor molestie eget.
            </p>
         </Text>
      </Container>
   )
}
export default Description
const Container = styled.div`
   width: 1530px;
   & img {
      width: auto;
      padding: 0px;
      margin: 50px 0px;
   }
`
const Text = styled.div`
   width: 1258px;
   margin: 20px auto;
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
