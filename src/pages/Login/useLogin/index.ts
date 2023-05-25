import { ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';
import { authenticateUser } from '../../../services/auth';

interface IValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: ' 👋 Bem vindo ao balance',
    });
  };

  // const showToastAndroid = () => {
  //   ToastAndroid.show('Bem vindo ao balance', ToastAndroid.SHORT);
  // };

  const onSubmit = async ({ email, password }: IValues, { setSubmitting }) => {
    showToast();
    // showToastAndroid();
    const response = await authenticateUser({ email, password });
    console.log('Executei', response);
    if (!response.token) {
      setSubmitting(true);
      return;
    }
  };

  return {
    onSubmit,
  };
};
