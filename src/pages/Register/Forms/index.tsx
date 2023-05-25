import React from 'react';
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
        placeholderTextColor="#141b4153"
        labelColor="#141b4153"
      />
      <Input
        placeholder="Nome Completo"
        value={values.fullName}
        onChangeText={handleChange('fullName')}
        placeholderTextColor="#141b4153"
        labelColor="#141b4153"
      />
      <Input
        placeholder="E-mail"
        value={values.email}
        onChangeText={handleChange('email')}
        placeholderTextColor="#141b4153"
        labelColor="#141b4153"
      />
      <Input
        placeholder="Senha"
        value={values.password}
        onChangeText={handleChange('password')}
        placeholderTextColor="#141b4153"
        labelColor="#141b4153"
      />
      <Input
        placeholder="Confirmar Senha"
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        placeholderTextColor="#141b4153"
        labelColor="#141b4153"
      />
    </S.Container>
  );
};

export default FormRegister;
