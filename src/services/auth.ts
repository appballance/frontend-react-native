import { IAuthenticateUser, IServicePost } from './@types';
import { ServiceGet, ServicePost } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticateUser = async ({
  email,
  password,
}: IAuthenticateUser) => {
  const isAuth = false;
  // const response: IServicePost = await ServicePost(
  //   'auth',
  //   {
  //     email,
  //     password,
  //   },
  //   isAuth,
  // );

  // if (!response?.token) {
  //   return response;
  // }

  AsyncStorage.setItem('token', response.token);
  return response;
};

export const isAuthenticated = async () => {
  const response = await ServiceGet('user');
  return response?.detail ? false : true;
};
