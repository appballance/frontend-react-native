import { SafeAreaView, View } from 'react-native';
import React from 'react';
import Typography from '../../components/elements/Typography';
import Button from '../../components/elements/Button';

import * as S from './styles';
import Input from '../../components/Input';
import { Formik } from 'formik';
import { IRegisterForm } from './@types/formikTypes';
import FormRegister from './Forms';
import { theme } from '../../commons/styles/theme';

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
      <S.Container>
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
        <S.ContainerButton>
          <S.StyledButtonLoading
            color={theme.palette.colors.white.main}
            fontSize="18px"
            fontFamily={theme.typography.regular}>
            cadastrar
          </S.StyledButtonLoading>
        </S.ContainerButton>
      </S.Container>
    </SafeAreaView>
  );
};

export default Register;
