import React from 'react';

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { Formik } from 'formik';

import * as S from './styles';
import Input from '../../components/Input';
import Typography from '../../components/elements/Typography';
import Button from '../../components/elements/Button';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <View>
      <S.ContainerLogo>
        <Image
          source={require('../../../assets/icons/logo-purple.png')}
          style={{ width: 100, height: 100 }}
        />
      </S.ContainerLogo>
      <Formik initialValues={initialValues} onSubmit={() => { }}>
        {({ handleChange, values }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={20}>
            <ScrollView>
              <S.ContainerForms>
                <Input
                  placeholder="E-mail"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <Input
                  placeholder="Senha"
                  value={values.password}
                  onChangeText={handleChange('email')}
                />
                <S.ContainerResetPassoword>
                  <Typography>Esqueceu sua senha?</Typography>
                  <S.ButtonResetPassword>Redefinir</S.ButtonResetPassword>
                </S.ContainerResetPassoword>
              </S.ContainerForms>
              <S.ContainerRegiter>
                <Typography>Ainda não tem cadastro?</Typography>
                <S.ButtonRegister>Cadastre-se.</S.ButtonRegister>
              </S.ContainerRegiter>
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
}

export default Login;
