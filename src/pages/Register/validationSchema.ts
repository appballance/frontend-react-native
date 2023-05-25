import * as Yup from 'yup';

export const schemaValidationRegister = Yup.object().shape({
  surname: Yup.string().required('Este campo é obrigatório'),
  fullName: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string().email().required('Email é obrigatório'),
  password: Yup.string().required('Digite sua senha'),
  confirmPassword: Yup.string()
    .required('confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password')], 'As senhas devem conresponder'),
});
