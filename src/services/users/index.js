import axios from 'axios';

import {SETTINGS} from '../../settings';

export const createUser = data => {
  axios
    .post(SETTINGS.ROUTES_BACKEND.CREATE_USER, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
};
