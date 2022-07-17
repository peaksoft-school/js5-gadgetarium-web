import React from 'react'

import { ReactComponent as Star } from '../../../assets/icons/Star.svg'

const CardRating = ({ rating }) => {
   return (
      <>
         {[...Array(5)].map((i) => {
            const ratingValue = i + 1
            return <Star fill={ratingValue > rating ? '#fff' : '#F99808'} />
         })}
      </>
   )
}

export default CardRating
