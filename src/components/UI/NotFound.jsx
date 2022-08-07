import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
   return (
      <StyledDiv>
         <section>
            <div>
               <img
                  src="https://assets.codepen.io/5647096/backToTheHomepage.png"
                  alt="Back to the Homepage"
               />
               <img
                  src="https://assets.codepen.io/5647096/Delorean.png"
                  alt="El Delorean, El Doc y Marti McFly"
               />
            </div>
            <DivText>
               <h1>404</h1>
               <h2>PAGE NOT FOUND</h2>
               <StyledLink to="/">
                  <h3>BACK TO HOME</h3>
               </StyledLink>
            </DivText>
         </section>
      </StyledDiv>
   )
}

export default NotFound

const StyledDiv = styled.div`
   & {
      background-color: #000000;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%23dddcdd' fill-opacity='0.23'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E");
   }

   & section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5%;
      height: 100vh;
   }
`
const DivText = styled.div`
   & {
      height: 50vh;
      & h1 {
         color: red;
         font-size: 100px;
         margin-bottom: 40px;
         font-family: 'Press Start 2P';
      }
      & h2 {
         font-size: 50px;
         margin-bottom: 40px;
         font-family: 'Press Start 2P';
         color: #fff;
      }
      & h3 {
         margin-bottom: 40px;
         height: 50vh;
         font-family: 'Press Start 2P';
      }
   }
`

const StyledLink = styled(Link)`
   & {
      text-decoration: none;
      margin-right: 20px;
      color: #fff;
   }

   &:hover {
      color: red;
      text-decoration: underline;
   }
`
