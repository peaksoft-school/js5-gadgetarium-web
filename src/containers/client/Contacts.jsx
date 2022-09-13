import React, { useState } from 'react'

import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import googleMap from '../../assets/icons/googleMap.svg'
import BreadCrumbs from '../../components/UI/Bredcrumbs'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/inputs/Input'
import { postContacts } from '../../store/actions/userContactAction'

const pathsArray = [
   {
      path: '/',
      name: 'Главная',
   },
   {
      path: '/about',
      name: 'Контакты',
   },
]

const Contacts = () => {
   const dispatch = useDispatch()

   const [contact, setContact] = useState({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      message: '',
   })

   const getValuesHandler = (event) => {
      setContact({
         ...contact,
         [event.target.name]: event.target.value,
      })
   }

   const { name, email, phoneNumber, message } = contact

   const sendContactHandler = (event) => {
      event.preventDefault()
      if (name && email && phoneNumber && message) {
         dispatch(postContacts(contact))
         setContact({
            name: '',
            surname: '',
            email: '',
            phoneNumber: '',
            message: '',
         })
      } else {
         toast.error('Заполните все поля')
      }
   }

   return (
      <div>
         <BreadCrumbs paths={pathsArray} />
         <div>
            <Title>
               <h2> Контакты</h2>
            </Title>
            <Styled>
               <MinContainer>
                  <h3>Магазин Gadgetarium </h3>
                  <b>Адрес:</b> <br />
                  <p>г. Бишкек, ул. Гражданская 119</p>
                  <b>Телефон:</b> <br />
                  <p>г+996(400) 00-00-00</p>
                  <b>Почта:</b> <br />
                  <p>Gadgetarium.kg</p>
                  <b> Режим работы: </b>
                  <br />
                  <p>10:00 - 21:00</p>
               </MinContainer>
               <div>
                  <h3> Напишите нам</h3>
                  <FormContainer onSubmit={sendContactHandler}>
                     <StyledForm>
                        <Form>
                           <label htmlFor="name"> Имя</label>
                           <Input
                              onChange={getValuesHandler}
                              type="text"
                              placeholder="Напишите ваше имя"
                              width="338px"
                              height="48px"
                              borderRadius="6px"
                              id="firstName"
                              value={contact.name}
                              name="name"
                           />
                        </Form>
                        <Form>
                           <label htmlFor="lastName"> Фамилия </label>
                           <Input
                              onChange={getValuesHandler}
                              type="text"
                              placeholder="Напишите вашу фамилию"
                              width="338px"
                              height="48px"
                              borderRadius="6px"
                              id="lastName"
                              value={contact.surname}
                              name="surname"
                           />
                        </Form>
                     </StyledForm>
                     <StyledFormBlock>
                        <StyledFormBlock>
                           <Form>
                              <label htmlFor="E-mail"> E-mail </label>
                              <Input
                                 onChange={getValuesHandler}
                                 type="email"
                                 placeholder="Напишите ваш email"
                                 value={contact.email}
                                 width="338px"
                                 height="48px"
                                 borderRadius="6px"
                                 name="email"
                              />
                           </Form>
                           <Form>
                              <label htmlFor="Number"> Телефон </label>
                              <Input
                                 onChange={getValuesHandler}
                                 type="number"
                                 placeholder="+996 (_ _ _) _ _ _ _ _ _"
                                 value={contact.phoneNumber}
                                 width="338px"
                                 height="48px"
                                 borderRadius="6px"
                                 name="phoneNumber"
                              />
                           </Form>
                        </StyledFormBlock>
                     </StyledFormBlock>
                     <div>
                        <label htmlFor="text"> Сообщение</label>
                        <Textarea
                           onChange={getValuesHandler}
                           type="text"
                           placeholder="Напишите сообщение"
                           value={contact.message}
                           name="message"
                        />
                        <Button
                           width="690px"
                           height="47px"
                           variant="contained"
                           type="submit"
                        >
                           Отправить
                        </Button>
                     </div>
                  </FormContainer>
               </div>
            </Styled>
            <StyledImg>
               <img src={googleMap} alt="" />
            </StyledImg>
         </div>
      </div>
   )
}

export default Contacts

const Title = styled('div')`
   padding: 30px 0px;
   border-bottom: 1px solid #cdcdcd;
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
`
const Styled = styled('div')`
   display: flex;
   justify-content: space-between;
   margin: 60px 0px;
`
const FormContainer = styled('form')`
   width: 688px;
   height: 500px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const StyledForm = styled('div')`
   display: flex;
`
const StyledFormBlock = styled('div')`
   display: flex;
`
const Form = styled('div')`
   display: flex;
   flex-direction: column;
   padding: 5px;
`
const MinContainer = styled('div')`
   width: 372px;
   height: 340px;
   margin: 140px 0px;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   & h3 {
      margin-bottom: 47px;
      font-size: 24px;
      font-weight: 500;
      line-height: 26px;
   }
   & p {
      padding: 10px 24px 24px 0px;
   }
   & b {
      margin-bottom: 10px;
   }
`
const Textarea = styled('textarea')`
   width: 690px;
   height: 150px;
   border-radius: 6px;
   padding: 10px 0px 0px 10px;
   margin-bottom: 15px;
`
const StyledImg = styled('div')`
   & img {
      width: 1580px;
   }
`
