import { object, string } from 'yup';

import { formModel } from './formModel';

const { surname, fullname, email, password1, password2 } = formModel.formFields;

export const validationSchema = object().shape({
  [surname.name]: string().required(),
  [fullname.name]: string().required(),
  [email.name]: string().required(),
  [password1.name]: string().required(),
  [password2.name]: string().required(),
});
