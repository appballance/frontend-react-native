import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';
import Input from '../../../components/Input';
import { IRegisterForm } from '../@types/formikTypes';

const FormRegister = () => {
  const { handleChange } = useFormikContext<IRegisterForm>();

  return (
    <View>
      <Input
        placeholder="Apelido"
        value=""
        onChangeText={handleChange('surname')}
      />
      <Input
        placeholder="Nome Completo"
        value=""
        onChangeText={value => {
          console.log(value);
        }}
      />
      <Input
        placeholder="E-mail"
        value=""
        onChangeText={value => {
          console.log(value);
        }}
      />
      <Input
        placeholder="Senha"
        value=""
        onChangeText={value => {
          console.log(value);
        }}
      />
      <Input
        placeholder="Confirmar Senha"
        value=""
        onChangeText={value => {
          console.log(value);
        }}
      />
    </View>
  );
};

export default FormRegister;
