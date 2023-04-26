import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';
import Input from '../../../components/Input';
import { IRegisterForm } from '../@types/formikTypes';

import * as S from './styles';

const FormRegister = () => {
  const { handleChange, values } = useFormikContext<IRegisterForm>();

  return (
    <S.Container>
      <Input
        placeholder="Apelido"
        value={values.surname}
        onChangeText={handleChange('surname')}
      />
      <Input
        placeholder="Nome Completo"
        value={values.fullName}
        onChangeText={handleChange('fullName')}
      />
      <Input
        placeholder="E-mail"
        value={values.email}
        onChangeText={handleChange('email')}
      />
      <Input
        placeholder="Senha"
        value={values.password}
        onChangeText={handleChange('password')}
      />
      <Input
        placeholder="Confirmar Senha"
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
      />
    </S.Container>
  );
};

export default FormRegister;
