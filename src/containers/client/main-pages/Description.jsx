import YouTube from 'react-youtube'
import styled from 'styled-components'

const Description = (props) => {
   const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo()
   }
   const opts = {
      height: '570',
      width: '100%',
   }
   return (
      <Container>
         <YoutubVideoBlock>
            <YouTube
               videoId={props?.video || 'VYLzOakff2g'}
               opts={opts}
               onReady={onReady}
            />
         </YoutubVideoBlock>
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

const YoutubVideoBlock = styled.div`
   width: 100%;
`
