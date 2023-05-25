import React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';

import * as S from './styles';
import Input from '../../components/Input';
import Typography from '../../components/elements/Typography';
import LogoPurple from '../../assets/icons/logoPurple.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../../components/elements/Button';
import { theme } from '../../commons/styles/theme';
import { useLogin } from './useLogin';
import Toast from 'react-native-toast-message';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type ProfileScrrenProps = Props['navigation'];

function Login() {
  const navigation = useNavigation<ProfileScrrenProps>();
  const { onSubmit } = useLogin();

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, handleChange, values, isValid, handleSubmit }) => (
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
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
                    height="60px"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholderTextColor="#141b4153"
                    labelColor="#141b4153"
                    IconRight
                    secureTextEntry
                  />
                  {/* <InputPassWord /> */}
                  <S.ContainerResetPassword>
                    <Typography>Esqueceu sua senha?</Typography>
                    <S.ButtonResetPassword>Redefinir</S.ButtonResetPassword>
                  </S.ContainerResetPassword>
                  <S.ContainerButton>
                    <Button
                      variant="contained"
                      fontSize="18px"
                      height="40px"
                      width="170px"
                      color={theme.palette.colors.white.main}
                      // disabled={isSubmitting || !isValid}
                      onPress={handleSubmit}>
                      Entrar
                    </Button>
                  </S.ContainerButton>
                </S.ContainerForms>
                <S.ContainerRegister>
                  <Typography>Ainda não tem cadastro?</Typography>
                  <S.ButtonRegister
                    onPress={() => navigation.navigate('Register')}>
                    Cadastre-se.
                  </S.ButtonRegister>
                </S.ContainerRegister>
              </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
        )}
      </Formik>
      <Toast
        // config={TypeToast}
        position="bottom"
        bottomOffset={50}
        visibilityTime={4000}
      />
    </>
  );
}

export default Login;
