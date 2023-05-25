import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Typography from '../../components/elements/Typography';

import * as S from './styles';
import { Formik } from 'formik';
import { IRegisterForm } from './@types/formikTypes';
import FormRegister from './Forms';
import { theme } from '../../commons/styles/theme';
import { schemaValidationRegister } from './validationSchema';
import { useHeaderHeight } from '@react-navigation/elements';

const Register = () => {
  const initialValues = {
    surname: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  } as IRegisterForm;

  const handleSubmit = async (values: IRegisterForm) => { };

  const height = useHeaderHeight();

  console.log(height);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schemaValidationRegister}>
      {({ handleSubmit }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={height + 20}>
          <S.StScrollView>
            {/* <S.Container> */}

            <S.ContainerHeader>
              <Typography
                fontSize="25px"
                fontFamily={theme.typography.bold}
                margin="0">
                Cadastro
              </Typography>
            </S.ContainerHeader>
            <S.ContainerForms>
              <FormRegister />
            </S.ContainerForms>
            <S.ContainerButton>
              <S.StyledButtonLoading>cadastrar</S.StyledButtonLoading>
            </S.ContainerButton>
            {/* </S.Container> */}
          </S.StScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default Register;
