import axios from 'axios';

import {SETTINGS} from 'infrastructure/shared/constants';

export const createUser = async user => {
  const request = async () => {
    try {
      const baseUrl = `${SETTINGS.BASE_URL}/${SETTINGS.ROUTES_BACKEND.CREATE_USER}`;
      return await axios.post(baseUrl, user);
    } catch (error) {
      return error?.response;
    }
  };
  const response = await request();
  return response?.data;
};
