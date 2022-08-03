import * as yup from 'yup'

export const RegisterFormSchema = yup.object().shape({
   firstName: yup.string().required('Обязательное поле'),
   lastName: yup.string().required('Обязательное поле'),
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

export const LoginFormSchema = yup.object().shape({
   email: yup
      .string()
      .email('Неправильно указан Email и/или пароль')
      .required('Неправильно указан Email и/или пароль'),
   password: yup.string().required('Введите пароль'),
})
