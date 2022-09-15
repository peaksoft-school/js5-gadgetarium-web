import React from 'react'

import YouTube from 'react-youtube'
import styled from 'styled-components'

const AboutBlock = ({ description, videoReview }) => {
   const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo()
   }
   const opts = {
      height: '570',
      width: '100%',
   }
   return (
      <div>
         <YoutubVideoBlock>
            <YouTube
               videoId={videoReview || 'VYLzOakff2g'}
               opts={opts}
               onReady={onReady}
            />
         </YoutubVideoBlock>
         <DescriptionBlock>
            <p>{description}</p>
         </DescriptionBlock>
      </div>
   )
}

export default AboutBlock

const YoutubVideoBlock = styled.div`
   width: 100%;
`
const DescriptionBlock = styled.div`
   margin: 100px 135px 0 135px;
   & p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: #384255;
   }
`
