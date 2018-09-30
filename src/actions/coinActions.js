import Axios from 'axios';
import { error, receive, request } from '../shared/redux/baseActions';
import {
  FETCH_COINS_ERROR,
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS
} from './actionTypes';

// fetch coins
export const fetchCoins = () => dispatch => {
  // dispatch request action
  dispatch(request(FETCH_COINS_REQUEST));

  // axios data
  const axiosData = {
    method: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  // dispatch receive || error action
  return Axios(axiosData)
    .then(response => {
      dispatch(receive(FETCH_COINS_SUCCESS, response.data));
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('AXIOS error', err.response);
      dispatch(error(FETCH_COINS_ERROR));
    });
};
