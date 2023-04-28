import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React from 'react';
import Typography from '../../components/elements/Typography';

import * as S from './styles';
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={-250}
          style={{ width: '100%', height: '100%', flex: 1 }}>
          <S.Container>
            <S.ContainerHeader>
              <Typography fontSize="25px" margin="0">
                Cadastro
              </Typography>
            </S.ContainerHeader>
            <S.ContainerForms>
              <FormRegister />
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
        </KeyboardAvoidingView>
      </Formik>
    </ScrollView>
  );
};

export default Register;
