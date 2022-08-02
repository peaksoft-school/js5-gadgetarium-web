import * as yup from 'yup'

export const RegisterFormSchema = yup.object().shape({
   firstName: yup.string().required('Обязательное поле'),
   lastname: yup.string().required('Обязательное поле'),
   email: yup
      .string()
      .email('Введите коррекный Email')
      .required('Введите коррекный Email'),
   phoneNumber: yup.string().required('Обязательное поле'),
   password: yup
      .string()
      .min(8, 'Введите более 8 символов')
      .required('Обязательное поле'),
   confirmedPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
      .required('Обязательное поле'),
})
