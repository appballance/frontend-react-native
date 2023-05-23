import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BASE_API } from '../../commons/constants/env';
// import { IServicePost } from '../@types';

export const ServiceGet = async (path: string) => {
  const token = AsyncStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${BASE_API}/${path}`;
  const response = await axios.get(url, config);
  return response.data;
};

export const ServicePost = async (path: string, body: any, isAuth = false) => {
  const url = `${BASE_API}/${path}`;
  console.log('LOG URL::', url);
  const token = AsyncStorage.getItem('token');

  const config = isAuth
    ? {}
    : {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  try {
    const response = await axios.post(url, body, config);
    return response?.data;
  } catch (error) {
    return error;
  }
};
