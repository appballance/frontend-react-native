import { SafeAreaView, View } from 'react-native';
import React from 'react';
import Typography from '../../components/elements/Typography';
import Button from '../../components/elements/Button';

import * as S from './styles';
import Input from '../../components/Input';
import { Formik } from 'formik';
import { IRegisterForm } from './@types/formikTypes';
import FormRegister from './Forms';

const Register = () => {
  const initialValues = {
    surname: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  } as IRegisterForm;

  const handleSubmit = async (values: IRegisterForm) => { };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.ContainerHeader>
        <Typography fontSize="25px" margin="0">
          Cadastro
        </Typography>
      </S.ContainerHeader>
      <S.ContainerForms>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ }) => <FormRegister />}
        </Formik>
      </S.ContainerForms>
      <Button width="100px" height="30px">
        cadastrar
      </Button>
      <Typography>Olá pessoas</Typography>
    </SafeAreaView>
  );
};

export default Register;
