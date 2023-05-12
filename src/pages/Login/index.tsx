import React from 'react';

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  // View,
} from 'react-native';
import { Formik } from 'formik';

import * as S from './styles';
import Input from '../../components/Input';
import Typography from '../../components/elements/Typography';
import LogoPurple from '../../assets/icons/logoPurple.svg';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => { }}>
      {({ handleChange, values }) => (
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{ height: 'auto' }}
            keyboardVerticalOffset={0}>
            <ScrollView style={{ height: '100%' }}>
              <S.ContainerLogo>
                <LogoPurple width={150} height={300} />
              </S.ContainerLogo>
              <S.ContainerForms>
                <Input
                  placeholder="E-mail"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  marginBottom="40px"
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
                <S.ContainerResetPassoword>
                  <Typography>Esqueceu sua senha?</Typography>
                  <S.ButtonResetPassword>Redefinir</S.ButtonResetPassword>
                </S.ContainerResetPassoword>
              </S.ContainerForms>
              <S.ContainerRegister>
                <Typography>Ainda não tem cadastro?</Typography>
                <S.ButtonRegister>Cadastre-se.</S.ButtonRegister>
              </S.ContainerRegister>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Login;
